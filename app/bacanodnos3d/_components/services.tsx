"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Printer, Cog, Boxes, Paintbrush, Wrench, Clock } from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Impresion FDM",
    description: "Impresion por deposicion de material fundido. Ideal para prototipos funcionales y piezas de uso diario.",
  },
  {
    icon: Cog,
    title: "Prototipado Rapido",
    description: "Transforma tus ideas en prototipos fisicos en tiempo record para validar disenos antes de produccion.",
  },
  {
    icon: Boxes,
    title: "Produccion en Serie",
    description: "Fabricacion de multiples unidades con consistencia y calidad garantizada para tu negocio.",
  },
  {
    icon: Paintbrush,
    title: "Acabados Premium",
    description: "Lijado, pintura y tratamientos especiales para lograr el acabado perfecto en tus piezas.",
  },
  {
    icon: Wrench,
    title: "Piezas Personalizadas",
    description: "Disenamos y fabricamos piezas a medida segun tus especificaciones exactas.",
  },
  {
    icon: Clock,
    title: "Entrega Express",
    description: "Servicio urgente con entregas en 24 horas para proyectos que no pueden esperar.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-5 py-2 glass rounded-full text-primary text-sm font-medium mb-6 shadow-lg animate-fade-in-up">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Soluciones completas de impresion 3D
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed animate-fade-in-up delay-200">
            Ofrecemos servicios integrales para todo tipo de proyectos,
            desde prototipos unicos hasta produccion en masa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group glass hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-transparent hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
