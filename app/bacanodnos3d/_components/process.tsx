"use client";

import { MessageSquare, FileCheck, Printer, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta",
    description: "Cuentanos tu proyecto y necesidades. Analizamos viabilidad y te asesoramos.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Cotizacion",
    description: "Recibe un presupuesto detallado con tiempos de entrega y opciones de material.",
  },
  {
    number: "03",
    icon: Printer,
    title: "Produccion",
    description: "Imprimimos tu pieza con los mas altos estandares de calidad y precision.",
  },
  {
    number: "04",
    icon: Package,
    title: "Entrega",
    description: "Recibe tu pedido empacado de forma segura, listo para usar.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="inline-block px-5 py-2 glass rounded-full text-primary text-sm font-medium mb-6 shadow-lg animate-fade-in-up">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Como trabajamos
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed animate-fade-in-up delay-200">
            Un proceso simple y transparente para que tu experiencia sea
            lo mas fluida posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="relative flex flex-col items-center text-center group">
                <div className="relative z-10 w-32 h-32 glass rounded-3xl flex items-center justify-center mb-8 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-2">
                  <step.icon className="w-14 h-14 text-primary" />
                  <span className="absolute -top-3 -right-3 w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg shadow-primary/30">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
