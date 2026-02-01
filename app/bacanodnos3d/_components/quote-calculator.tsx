"use client";

import React from "react";
import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { STLViewer } from "./stl-viewer";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Vector3 } from "three";
import {
  Upload,
  FileType,
  X,
  Calculator,
  Package,
  Palette,
  Ruler,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  RotateCcw,
  Eye,
} from "lucide-react";

const COLORS = [
  { name: "Blanco", hex: "#FFFFFF", costPerGram: 60 },
  { name: "Negro", hex: "#1a1a1a", costPerGram: 60 },
  { name: "Gris", hex: "#6b7280", costPerGram: 65 },
  { name: "Rojo", hex: "#dc2626", costPerGram: 65 },
  { name: "Azul", hex: "#2563eb", costPerGram: 65 },
  { name: "Verde", hex: "#16a34a", costPerGram: 65 },
  { name: "Amarillo", hex: "#eab308", costPerGram: 65 },
  { name: "Naranja", hex: "#ea580c", costPerGram: 65 },
  { name: "Rosa", hex: "#ec4899", costPerGram: 65 },
  { name: "Morado", hex: "#9333ea", costPerGram: 65 },
];

const SIZES = [
  { name: "5 cm", scale: "5 cm", sizeCm: 5, viewScale: 0.5, description: "Miniatura compacta" },
  { name: "10 cm", scale: "10 cm", sizeCm: 10, viewScale: 1, description: "Tamano estandar" },
  { name: "20 cm", scale: "20 cm", sizeCm: 20, viewScale: 2, description: "Formato grande" },
  { name: "30 cm", scale: "30 cm", sizeCm: 30, viewScale: 3, description: "Maximo detalle" },
];

const MATERIALS = [
  { name: "PLA", description: "Economico y ecologico" },
  { name: "PETG", description: "Resistente y duradero" },
  { name: "ABS", description: "Alta resistencia termica" },
  { name: "TPU Flexible", description: "Material flexible" },
];

const PLA_DENSITY = 1.24; // g/cm3
const LAYER_HEIGHT_MM = 0.2;
const LINE_WIDTH_MM = 0.42;
const INFILL_PERCENT = 0.15;
const WALLS = 2;
const TOP_LAYERS = 5;
const BOTTOM_LAYERS = 3;
const SPEEDS = {
  infill: 270,
  wallExternal: 150,
  wallInternal: 300,
  topBottom: 200,
  support: 150,
};
const SPEED_EFFICIENCY = 0.25;
const TIME_OVERHEAD = 1.3;
const TIME_SIZE_FACTOR_A = 0.95734;
const TIME_SIZE_FACTOR_K = -0.5586;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "odnogoodnogo3@gmail.com",
    href: "mailto:odnogoodnogo3@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+57 302 4468132",
    href: "tel:+573024468132",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Soacha, Colombia",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
    href: "#",
  },
];

interface FileInfo {
  name: string;
  size: number;
  url: string;
}

interface ModelMetrics {
  volumeMm3: number;
  surfaceAreaMm2: number;
  maxSizeMm: number;
}

export function QuoteCalculator() {
  const [file, setFile] = useState<FileInfo | null>(null);
  const [modelMetrics, setModelMetrics] = useState<ModelMetrics | null>(null);
  const [selectedColor, setSelectedColor] = useState(COLORS[0]);
  const [selectedSize, setSelectedSize] = useState(SIZES[1]);
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  const [isDragging, setIsDragging] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState<"quote" | "contact" | "success">("quote");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const computeGeometryVolume = (positions: Float32Array) => {
    let volume = 0;
    const v1 = new Vector3();
    const v2 = new Vector3();
    const v3 = new Vector3();
    const cross = new Vector3();

    for (let i = 0; i < positions.length; i += 9) {
      v1.set(positions[i], positions[i + 1], positions[i + 2]);
      v2.set(positions[i + 3], positions[i + 4], positions[i + 5]);
      v3.set(positions[i + 6], positions[i + 7], positions[i + 8]);
      cross.crossVectors(v2, v3);
      volume += v1.dot(cross);
    }

    return Math.abs(volume) / 6;
  };

  const computeGeometrySurfaceArea = (positions: Float32Array) => {
    let area = 0;
    const v1 = new Vector3();
    const v2 = new Vector3();
    const v3 = new Vector3();
    const edge1 = new Vector3();
    const edge2 = new Vector3();
    const cross = new Vector3();

    for (let i = 0; i < positions.length; i += 9) {
      v1.set(positions[i], positions[i + 1], positions[i + 2]);
      v2.set(positions[i + 3], positions[i + 4], positions[i + 5]);
      v3.set(positions[i + 6], positions[i + 7], positions[i + 8]);
      edge1.subVectors(v2, v1);
      edge2.subVectors(v3, v1);
      cross.crossVectors(edge1, edge2);
      area += cross.length() * 0.5;
    }

    return area;
  };

  const processFile = async (uploadedFile: File) => {
    if (uploadedFile && uploadedFile.name.toLowerCase().endsWith(".stl")) {
      const url = URL.createObjectURL(uploadedFile);
      setFile({ name: uploadedFile.name, size: uploadedFile.size, url });
      try {
        const buffer = await uploadedFile.arrayBuffer();
        const loader = new STLLoader();
        const geometry = loader.parse(buffer);
        geometry.computeBoundingBox();
        const bbox = geometry.boundingBox;
        if (bbox && geometry.attributes.position) {
          const size = new Vector3();
          bbox.getSize(size);
          const maxSizeMm = Math.max(size.x, size.y, size.z);
          const positions = geometry.attributes.position.array as Float32Array;
          const volumeMm3 = computeGeometryVolume(positions);
          const surfaceAreaMm2 = computeGeometrySurfaceArea(positions);
          setModelMetrics({ volumeMm3, surfaceAreaMm2, maxSizeMm });
        } else {
          setModelMetrics(null);
        }
      } catch {
        setModelMetrics(null);
      }
    }
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    processFile(droppedFile);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      processFile(selectedFile);
    }
  };

  const removeFile = () => {
    if (file?.url) {
      URL.revokeObjectURL(file.url);
    }
    setFile(null);
    setModelMetrics(null);
  };

  const getScaledVolumes = () => {
    if (!modelMetrics) {
      return { shellMm3: 0, infillMm3: 0, extrusionMm3: 0 };
    }
    const targetMm = selectedSize.sizeCm * 10;
    const scale = modelMetrics.maxSizeMm > 0 ? targetMm / modelMetrics.maxSizeMm : 1;
    const volumeScaledMm3 = modelMetrics.volumeMm3 * Math.pow(scale, 3);
    const surfaceScaledMm2 = modelMetrics.surfaceAreaMm2 * Math.pow(scale, 2);

    const wallThickness = WALLS * LINE_WIDTH_MM;
    const topBottomThickness = Math.max(TOP_LAYERS, BOTTOM_LAYERS) * LAYER_HEIGHT_MM;
    const shellThickness = (wallThickness * 2 + topBottomThickness) / 3;

    let shellMm3 = surfaceScaledMm2 * shellThickness;
    shellMm3 = Math.min(shellMm3, volumeScaledMm3 * 0.85);

    const coreMm3 = Math.max(volumeScaledMm3 - shellMm3, 0);
    const infillMm3 = coreMm3 * INFILL_PERCENT;
    const extrusionMm3 = shellMm3 + infillMm3;

    return { shellMm3, infillMm3, extrusionMm3 };
  };

  const estimateGrams = () => {
    if (!file || !modelMetrics) return 0;
    const { extrusionMm3 } = getScaledVolumes();
    const volumeCm3 = extrusionMm3 / 1000;
    const grams = volumeCm3 * PLA_DENSITY;
    return grams * quantity;
  };

  const estimateTimeSeconds = () => {
    const { shellMm3, infillMm3 } = getScaledVolumes();
    if (!shellMm3 && !infillMm3) return 0;

    const wallSpeed = (SPEEDS.wallExternal + SPEEDS.wallInternal) / 2;
    const shellSpeed = (wallSpeed + SPEEDS.topBottom) / 2;
    const wallRate = LINE_WIDTH_MM * LAYER_HEIGHT_MM * (shellSpeed * SPEED_EFFICIENCY);
    const infillRate = LINE_WIDTH_MM * LAYER_HEIGHT_MM * (SPEEDS.infill * SPEED_EFFICIENCY);

    const shellTime = wallRate > 0 ? shellMm3 / wallRate : 0;
    const infillTime = infillRate > 0 ? infillMm3 / infillRate : 0;
    const sizeCorrection = TIME_SIZE_FACTOR_A * Math.pow(selectedSize.sizeCm / 10, TIME_SIZE_FACTOR_K);
    const total = (shellTime + infillTime) * TIME_OVERHEAD * sizeCorrection * quantity;

    return Math.max(0, total);
  };

  const estimateTimeHours = () => {
    return estimateTimeSeconds() / 3600;
  };

  const formatDuration = (seconds: number) => {
    const total = Math.round(seconds);
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const secs = total % 60;
    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const calculatePrice = () => {
    if (!file) return 0;
    const grams = estimateGrams();
    const cp = selectedColor.costPerGram * grams;
    const ch = estimateTimeHours() * 3000;
    const base = cp + ch;
    const sgm = base * 0.1;
    const pf = base + sgm;
    return Math.round(pf);
  };

  const price = calculatePrice();
  const grams = estimateGrams();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setStep("success");
  };

  const handleWhatsApp = () => {
    const form = formRef.current;
    const formData = form ? new FormData(form) : null;
    const name = formData ? String(formData.get("name") || "") : "";
    const email = formData ? String(formData.get("email") || "") : "";
    const phone = formData ? String(formData.get("phone") || "") : "";
    const city = formData ? String(formData.get("city") || "") : "";
    const notes = formData ? String(formData.get("notes") || "") : "";
    const message = [
      "Cotizacion Bacanodnos3D",
      `Nombre: ${name || "N/A"}`,
      `Email: ${email || "N/A"}`,
      `Telefono: ${phone || "N/A"}`,
      `Ciudad: ${city || "N/A"}`,
      `Notas: ${notes || "N/A"}`,
      `Archivo: ${file?.name || "N/A"}`,
      `Material: ${selectedMaterial.name}`,
      `Color: ${selectedColor.name}`,
      `Tamano: ${selectedSize.scale}`,
      `Cantidad: ${quantity}`,
      `Gramos estimados: ${grams.toFixed(2)} g`,
      `Tiempo estimado: ${formatDuration(estimateTimeSeconds())}`,
      `Precio estimado: ${price.toLocaleString()} COP`,
    ].join("\n");
    const url = `https://wa.me/573024468132?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const resetForm = () => {
    if (file?.url) {
      URL.revokeObjectURL(file.url);
    }
    setFile(null);
    setSelectedColor(COLORS[0]);
    setSelectedSize(SIZES[1]);
    setSelectedMaterial(MATERIALS[0]);
    setQuantity(1);
    setStep("quote");
  };

  return (
    <section id="cotizar" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-primary text-sm font-medium mb-6 shadow-lg animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            Cotizador Online
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Cotiza y Solicita tu Impresion 3D
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-xl leading-relaxed animate-fade-in-up delay-200">
            Configura tu impresion y completa tus datos para recibir una cotizacion personalizada
          </p>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in-up delay-300">
            <div className={`flex items-center gap-2 ${step === "quote" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-500 ${step === "quote" ? "bg-primary text-primary-foreground shadow-primary/30" : step === "contact" || step === "success" ? "bg-primary text-primary-foreground shadow-primary/30" : "bg-muted text-muted-foreground"}`}>
                {step === "contact" || step === "success" ? <CheckCircle2 className="w-5 h-5" /> : "1"}
              </div>
              <span className="font-medium hidden sm:inline">Configura</span>
            </div>
            <div className={`w-16 h-1 rounded-full transition-all duration-500 ${step === "contact" || step === "success" ? "bg-primary" : "bg-border"}`} />
            <div className={`flex items-center gap-2 ${step === "contact" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-500 ${step === "contact" ? "bg-primary text-primary-foreground shadow-primary/30" : step === "success" ? "bg-primary text-primary-foreground shadow-primary/30" : "glass"}`}>
                {step === "success" ? <CheckCircle2 className="w-5 h-5" /> : "2"}
              </div>
              <span className="font-medium hidden sm:inline">Contacto</span>
            </div>
            <div className={`w-16 h-1 rounded-full transition-all duration-500 ${step === "success" ? "bg-primary" : "bg-border"}`} />
            <div className={`flex items-center gap-2 ${step === "success" ? "text-primary" : "text-muted-foreground"}`}>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-500 ${step === "success" ? "bg-primary text-primary-foreground shadow-primary/30" : "glass"}`}>
                3
              </div>
              <span className="font-medium hidden sm:inline">Listo</span>
            </div>
          </div>
        </div>

        {step === "success" ? (
          <Card className="max-w-2xl mx-auto glass animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Solicitud Enviada
              </h3>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Hemos recibido tu solicitud de cotizacion. Te contactaremos en menos de 24 horas
                para confirmar los detalles y el precio final de tu impresion 3D.
              </p>
              <div className="glass rounded-2xl p-8 mb-10 text-left">
                <h4 className="font-bold text-foreground mb-6 text-lg">Resumen de tu pedido:</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Archivo:</span>
                    <span className="font-medium text-foreground">{file?.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium text-foreground">{selectedMaterial.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Color:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full border border-muted" style={{ backgroundColor: selectedColor.hex }} />
                      <span className="font-medium text-foreground">{selectedColor.name}</span>
                    </div>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Escala:</span>
                    <span className="font-medium text-foreground">{selectedSize.scale}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Cantidad:</span>
                    <span className="font-medium text-foreground">{quantity} unidad(es)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Gramos estimados:</span>
                    <span className="font-medium text-foreground">{grams.toFixed(2)} g</span>
                  </div>
                  <div className="flex justify-between pt-4">
                    <span className="text-muted-foreground font-medium">Precio estimado:</span>
                    <span className="font-bold text-primary text-xl">${price.toLocaleString()} COP</span>
                  </div>
                </div>
              </div>
              <Button onClick={resetForm} variant="outline" size="lg" className="gap-2 bg-transparent hover:bg-muted/50">
                <RotateCcw className="w-4 h-4" />
                Nueva Cotizacion
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main Content */}
            <Card className="lg:col-span-2 glass animate-slide-in-left">
              <CardContent className="p-8">
                {step === "quote" ? (
                  <>
                    {/* 3D Viewer + File Upload */}
                    <div className="mb-10">
                      <Label className="text-lg font-bold mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Eye className="w-5 h-5 text-primary" />
                        </div>
                        Vista Previa 3D
                      </Label>
                      
                      {/* 3D Viewer */}
                      <div className="mt-4 h-[350px] rounded-2xl overflow-hidden border-2 border-border/30 shadow-xl">
                        <STLViewer 
                          fileUrl={file?.url || null} 
                          color={selectedColor.hex} 
                          scale={selectedSize.viewScale}
                        />
                      </div>

                      {/* File Upload */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer mt-4
                          ${isDragging ? "border-primary bg-primary/5 scale-[1.02]" : "border-border/50 hover:border-primary/50 hover:bg-muted/30"}
                          ${file ? "bg-primary/5 border-primary" : ""}`}
                      >
                        <input
                          type="file"
                          accept=".stl"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {file ? (
                          <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                              <FileType className="w-6 h-6 text-primary" />
                            </div>
                            <div className="text-left">
                              <p className="font-bold text-foreground">{file.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeFile();
                              }}
                              className="p-2 hover:bg-destructive/10 rounded-xl transition-colors ml-4"
                            >
                              <X className="w-5 h-5 text-destructive" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                              <Upload className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div className="text-left">
                              <p className="text-foreground font-bold">
                                Arrastra tu archivo STL aqui
                              </p>
                              <p className="text-sm text-muted-foreground">
                                o haz clic para seleccionar
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Material Selection */}
                    <div className="mb-10">
                      <Label className="text-lg font-bold mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Package className="w-5 h-5 text-primary" />
                        </div>
                        Material
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {MATERIALS.map((material) => (
                          <button
                            key={material.name}
                            type="button"
                            onClick={() => setSelectedMaterial(material)}
                            className={`p-5 rounded-2xl border-2 transition-all duration-300 text-left hover:-translate-y-1
                              ${selectedMaterial.name === material.name
                                ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                : "border-border/50 hover:border-primary/50 glass"}`}
                          >
                            <p className="font-bold text-foreground">{material.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{material.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Color Selection */}
                    <div className="mb-10">
                      <Label className="text-lg font-bold mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Palette className="w-5 h-5 text-primary" />
                        </div>
                        Color del Filamento
                        <span className="text-sm font-normal text-muted-foreground ml-2">
                          (el modelo cambiara de color)
                        </span>
                      </Label>
                      <div className="flex flex-wrap gap-4 mt-4">
                        {COLORS.map((color) => (
                          <button
                            key={color.name}
                            type="button"
                            onClick={() => setSelectedColor(color)}
                            className={`group relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1
                              ${selectedColor.name === color.name
                                ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                : "border-border/50 hover:border-primary/50 glass"}`}
                          >
                            <div
                              className="w-10 h-10 rounded-xl border-2 border-muted shadow-lg transition-transform group-hover:scale-110"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="text-xs font-medium text-foreground">{color.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-10">
                      <Label className="text-lg font-bold mb-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Ruler className="w-5 h-5 text-primary" />
                        </div>
                        Escala / Tamano
                      </Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        {SIZES.map((size) => (
                          <button
                            key={size.name}
                            type="button"
                            onClick={() => setSelectedSize(size)}
                            className={`p-5 rounded-2xl border-2 transition-all duration-300 text-center hover:-translate-y-1
                              ${selectedSize.name === size.name
                                ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                                : "border-border/50 hover:border-primary/50 glass"}`}
                          >
                            <p className="text-3xl font-bold text-primary">{size.scale}</p>
                            <p className="font-bold text-foreground mt-1">{size.name}</p>
                            <p className="text-xs text-muted-foreground mt-1">{size.description}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quantity */}
                    <div>
                      <Label className="text-lg font-bold mb-4 block">Cantidad</Label>
                      <div className="flex items-center gap-6 mt-4">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl font-bold text-foreground hover:bg-muted/50 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-4xl font-bold text-foreground w-16 text-center">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl font-bold text-foreground hover:bg-muted/50 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Contact Form */
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Completa tus datos</h3>
                      <p className="text-muted-foreground">Te contactaremos para confirmar tu pedido</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium mb-2 block">Nombre completo</Label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="Tu nombre" 
                          required 
                          className="h-12 bg-background/50 border-border/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="tu@email.com" 
                          required 
                          className="h-12 bg-background/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium mb-2 block">Telefono</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          placeholder="+56 9 1234 5678" 
                          required 
                          className="h-12 bg-background/50 border-border/50"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city" className="text-sm font-medium mb-2 block">Ciudad</Label>
                        <Input 
                          id="city" 
                          name="city"
                          placeholder="Tu ciudad" 
                          required 
                          className="h-12 bg-background/50 border-border/50"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <Label htmlFor="notes" className="text-sm font-medium mb-2 block">Notas adicionales (opcional)</Label>
                      <Textarea 
                        id="notes" 
                        name="notes"
                        placeholder="Detalles especiales, acabados, etc." 
                        rows={4}
                        className="bg-background/50 border-border/50 resize-none"
                      />
                    </div>

                    {/* Contact Info */}
                    <div className="glass rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-foreground mb-4">Tambien puedes contactarnos directamente:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {contactInfo.map((info) => (
                          <a
                            key={info.label}
                            href={info.href}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <info.icon className="w-4 h-4" />
                            <span className="text-sm">{info.value}</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setStep("quote")}
                        className="gap-2 bg-transparent hover:bg-muted/50"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Volver
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={handleWhatsApp}
                        className="gap-2 bg-transparent hover:bg-muted/50"
                      >
                        Comunicarse por WhatsApp
                      </Button>
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="flex-1 gap-2 shadow-lg shadow-primary/30 min-w-[220px]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Enviar Solicitud
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Price Sidebar */}
            <div className="animate-slide-in-right">
              <Card className="glass sticky top-24">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg">Resumen</h3>
                      <p className="text-sm text-muted-foreground">Tu cotizacion</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-sm py-3 border-b border-border/30">
                      <span className="text-muted-foreground">Material</span>
                      <span className="font-medium text-foreground">{selectedMaterial.name}</span>
                    </div>
                    <div className="flex justify-between text-sm py-3 border-b border-border/30">
                      <span className="text-muted-foreground">Color</span>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full border border-muted" style={{ backgroundColor: selectedColor.hex }} />
                        <span className="font-medium text-foreground">{selectedColor.name}</span>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm py-3 border-b border-border/30">
                      <span className="text-muted-foreground">Escala</span>
                      <span className="font-medium text-foreground">{selectedSize.scale}</span>
                    </div>
                    <div className="flex justify-between text-sm py-3 border-b border-border/30">
                      <span className="text-muted-foreground">Cantidad</span>
                      <span className="font-medium text-foreground">{quantity}</span>
                    </div>
                    <div className="flex justify-between text-sm py-3 border-b border-border/30">
                      <span className="text-muted-foreground">Gramos estimados</span>
                      <span className="font-medium text-foreground">{grams.toFixed(2)} g</span>
                    </div>
                    <div className="flex justify-between text-sm py-3 border-b border-border/30">
                      <span className="text-muted-foreground">Tiempo estimado</span>
                      <span className="font-medium text-foreground">{formatDuration(estimateTimeSeconds())}</span>
                    </div>
                  </div>

                  <div className="glass rounded-2xl p-6 mb-8">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Precio estimado</p>
                      <p className="text-4xl font-bold text-primary">${price.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">COP</p>
                    </div>
                  </div>

                  {step === "quote" && (
                    <>
                      <Button
                        onClick={() => setStep("contact")}
                        className="w-full gap-2 h-14 text-base shadow-lg shadow-primary/30"
                        disabled={!file}
                      >
                        Continuar
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleWhatsApp}
                        className="w-full mt-3 gap-2 h-12 bg-transparent hover:bg-muted/50"
                      >
                        Comunicarse por WhatsApp
                      </Button>
                    </>
                  )}

                  {!file && step === "quote" && (
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Sube un archivo STL para continuar
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
