"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface InstagramItem {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
}

const getInstagramPreview = (item: InstagramItem) => {
  const type = (item.media_type || "").toUpperCase();
  if (type === "VIDEO" || type === "REELS") {
    return item.thumbnail_url || item.media_url || "";
  }
  return item.media_url || item.thumbnail_url || "";
};

const isVideoPost = (item: InstagramItem) => {
  const type = (item.media_type || "").toUpperCase();
  return type === "VIDEO" || type === "REELS";
};

const fallbackProjects = [
  {
    title: "Prototipo Arquitectonico",
    category: "Arquitectura",
    description: "Maqueta detallada de edificio residencial a escala 1:100",
  },
  {
    title: "Repuestos Industriales",
    category: "Industrial",
    description: "Piezas de reemplazo para maquinaria de produccion",
  },
  {
    title: "Figuras Coleccionables",
    category: "Arte",
    description: "Serie de figuras personalizadas con acabado premium",
  },
  {
    title: "Prototipos Medicos",
    category: "Salud",
    description: "Modelos anatomicos para planificacion quirurgica",
  },
  {
    title: "Carcasas Electronicas",
    category: "Tecnologia",
    description: "Enclosures personalizados para dispositivos IoT",
  },
  {
    title: "Piezas Automotrices",
    category: "Automotriz",
    description: "Componentes funcionales para restauracion de vehiculos",
  },
];

export function Portfolio() {
  const [items, setItems] = useState<InstagramItem[]>([]);

  useEffect(() => {
    let mounted = true;
    const loadInstagram = async () => {
      try {
        const response = await fetch("/api/instagram/media", { cache: "no-store" });
        const data = await response.json();
        if (!mounted) return;
        const parsed = Array.isArray(data?.items) ? data.items : [];
        setItems(parsed);
      } catch {
        if (mounted) {
          setItems([]);
        }
      }
    };
    loadInstagram();
    return () => {
      mounted = false;
    };
  }, []);

  const isInstagram = items.length > 0;

  return (
    <section id="trabajos" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="inline-block px-5 py-2 glass rounded-full text-primary text-sm font-medium mb-6 shadow-lg animate-fade-in-up">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Nuestros trabajos destacados
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed animate-fade-in-up delay-200">
            {isInstagram
              ? "Galeria sincronizada con Instagram: @bacanodnos3d."
              : "Cada proyecto es unico y lo tratamos con la misma dedicacion. Conoce algunos de nuestros trabajos mas destacados."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isInstagram ? items : fallbackProjects).map((project: any, index) => (
            <Card 
              key={isInstagram ? project.id : project.title} 
              className="group overflow-hidden glass hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-transparent hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.play().catch(() => {});
                }
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                  video.pause();
                }
              }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
                {isInstagram ? (
                  isVideoPost(project) ? (
                    <video
                      src={project.media_url}
                      poster={project.thumbnail_url || undefined}
                      className="h-full w-full object-cover"
                      controls
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img
                      src={getInstagramPreview(project)}
                      alt={(project.caption || "Trabajo bacanodnos3d").slice(0, 60)}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  )
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                      <svg
                        viewBox="0 0 100 100"
                        className="w-12 h-12 text-primary"
                        fill="currentColor"
                      >
                        <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" opacity="0.3" />
                        <path d="M50 10 L90 30 L50 50 L10 30 Z" opacity="0.6" />
                        <path d="M50 50 L90 30 L90 70 L50 90 Z" opacity="0.4" />
                      </svg>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-6">
                {isInstagram ? (
                  <>
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                      Instagram
                    </Badge>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      @bacanodnos3d
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                      {project.caption || "Trabajo publicado en Instagram"}
                    </p>
                    <a
                      href={project.permalink || "https://www.instagram.com/bacanodnos3d/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      Ver en Instagram
                    </a>
                  </>
                ) : (
                  <>
                    <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                      {project.category}
                    </Badge>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
