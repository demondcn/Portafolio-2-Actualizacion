"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Layers, Zap, Shield, Sparkles } from "lucide-react";
import { Canvas, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";

function BearModel() {
  const geometry = useLoader(STLLoader, "/models/babypolarbear_ams.stl");
  const [size, setSize] = useState(new THREE.Vector3(1, 1, 1));

  useEffect(() => {
    geometry.computeBoundingBox();
    let box = geometry.boundingBox;
    if (box) {
      const initialSize = new THREE.Vector3();
      box.getSize(initialSize);
      if (initialSize.y < initialSize.z) {
        geometry.rotateX(-Math.PI / 2);
        geometry.computeBoundingBox();
        box = geometry.boundingBox;
      }
      geometry.computeVertexNormals();
      geometry.center();
      geometry.computeBoundingBox();
      box = geometry.boundingBox;
      if (box) {
        const finalSize = new THREE.Vector3();
        box.getSize(finalSize);
        setSize(finalSize);
      }
    }
  }, [geometry]);

  const scale = useMemo(() => {
    const maxDim = Math.max(size.x, size.y, size.z);
    return maxDim > 0 ? 2.4 / maxDim : 1;
  }, [size]);


  return (
    <group scale={scale}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial color="#f8fafc" roughness={0.6} metalness={0.1} />
      </mesh>
    </group>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                          linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-primary text-sm font-medium animate-fade-in-up shadow-lg">
              <Sparkles className="w-4 h-4" />
              Impresion 3D de Alta Calidad
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] tracking-tight animate-fade-in-up delay-100">
              <span className="text-balance">Hacemos realidad</span>
              <span className="text-primary block mt-2">tus ideas en 3D</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed animate-fade-in-up delay-200">
              Servicio profesional de impresion 3D. Desde prototipos hasta produccion en serie, 
              transformamos tus disenos en piezas fisicas de alta precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button size="lg" asChild className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
                <Link href="#cotizar" className="gap-3">
                  Solicitar Cotizacion
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto bg-transparent hover:bg-muted/50 transition-all duration-300">
                <Link href="#trabajos">Ver Trabajos</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-10 pt-4 sm:pt-6 animate-fade-in-up delay-400">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-lg">
                  <Layers className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">+500</p>
                  <p className="text-sm text-muted-foreground">Proyectos</p>
                </div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-foreground">100%</p>
                  <p className="text-sm text-muted-foreground">Garantia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right delay-200">
            <div className="relative glass rounded-3xl p-5 sm:p-10 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-muted/50 to-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  <div className="relative z-10 text-center animate-float">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 sm:mb-6 glass rounded-3xl border border-primary/20 shadow-xl overflow-hidden">
                      <Canvas
                        shadows
                        camera={{ position: [3, 3, 3], fov: 40 }}
                        className="w-full h-full"
                        gl={{ antialias: true, alpha: true }}
                      >
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={0.9} castShadow />
                        <directionalLight position={[-5, -3, -4]} intensity={0.3} />
                        <BearModel />
                      </Canvas>
                    </div>
                    <p className="text-muted-foreground font-medium text-base sm:text-lg">Tu proximo proyecto</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-2 sm:-bottom-5 sm:-right-5 bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-2xl shadow-xl shadow-primary/30 animate-fade-in delay-500">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <p className="font-semibold text-sm sm:text-base">Entrega en 24-72h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
