"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Scissors, Store, ClipboardList, Users, Zap, Bot } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function CharlesBarberPage() {
  const { lang } = useLanguage()

  const features =
    lang === "es"
      ? [
          {
            icon: ClipboardList,
            title: "Inventario y productos",
            description: "Gestion de insumos, productos y alertas de stock.",
          },
          {
            icon: Store,
            title: "Ventas y tienda",
            description: "Registro de ventas, pedidos y control de caja.",
          },
          {
            icon: Users,
            title: "Clientes y servicios",
            description: "Historial de clientes, servicios y preferencias.",
          },
          {
            icon: Scissors,
            title: "Catalogo de servicios",
            description: "Precios, duraciones y combos por tipo de servicio.",
          },
        ]
      : [
          {
            icon: ClipboardList,
            title: "Inventory and products",
            description: "Supplies management, product catalog, and stock alerts.",
          },
          {
            icon: Store,
            title: "Sales and store",
            description: "Sales tracking, orders, and cash control.",
          },
          {
            icon: Users,
            title: "Clients and services",
            description: "Client history, services, and preferences.",
          },
          {
            icon: Scissors,
            title: "Service catalog",
            description: "Pricing, durations, and combos by service type.",
          },
        ]

  const benefits =
    lang === "es"
      ? [
          "Control de inventario en tiempo real",
          "Ventas centralizadas y trazables",
          "Atencion mas rapida en mostrador",
          "Mejor fidelizacion de clientes",
          "Reportes para decisiones de negocio",
          "Reduccion de errores manuales",
          "Seguimiento de servicios y clientes",
        ]
      : [
          "Real-time inventory control",
          "Centralized and traceable sales",
          "Faster counter service",
          "Better customer retention",
          "Reports for business decisions",
          "Fewer manual errors",
          "Service and client tracking",
        ]

  const stack =
    lang === "es"
      ? ["Android Studio", "Java", "Base de datos local", "API REST", "Panel administrativo", "Notificaciones"]
      : ["Android Studio", "Java", "Local database", "REST API", "Admin panel", "Notifications"]

  const flow =
    lang === "es"
      ? [
          "Registro de servicios, precios y productos",
          "Venta en mostrador o desde la app",
          "Actualizacion de inventario automatica",
          "Reporte diario y seguimiento de clientes",
        ]
      : [
          "Service, pricing, and product setup",
          "Counter or in-app sales",
          "Automatic inventory updates",
          "Daily reports and customer tracking",
        ]

  const copy =
    lang === "es"
      ? {
          back: "VOLVER AL PORTAFOLIO",
          badge: "APP ANDROID + E-COMMERCE",
          title: "CHARLES BARBER",
          subtitle:
            "Aplicacion movil para barberias con control de inventario, ventas y tienda en linea, pensada para operaciones diarias y crecimiento del negocio.",
          videoTitle: "DEMO DE LA APP",
          videoNote: "(PLACEHOLDER PARA VIDEO)",
          videoCta: "VER DEMO",
          aboutTitle: "QUE RESUELVE?",
          aboutText:
            "Optimiza la operacion diaria de la barberia, mejora el control de productos y facilita las ventas desde el movil. Centraliza el flujo de atencion, reduce tiempos de espera y da visibilidad clara del inventario y las ventas.",
          featuresTitle: "FUNCIONALIDADES CLAVE",
          benefitsTitle: "BENEFICIOS",
          stackTitle: "STACK Y TECNOLOGIA",
          flowTitle: "FLUJO DE OPERACION",
          ctaTitle: "QUIERES UNA APP ASI?",
          ctaText:
            "La adapto a tu negocio con tu marca, precios, servicios y flujos. Tambien puedo integrar pagos, facturacion y reportes avanzados.",
          ctaContact: "CONTACTAR",
          ctaMore: "VER MAS PROYECTOS",
        }
      : {
          back: "BACK TO PORTFOLIO",
          badge: "ANDROID APP + E-COMMERCE",
          title: "CHARLES BARBER",
          subtitle:
            "Mobile app for barbershops with inventory control, sales, and an online store, built for daily operations and business growth.",
          videoTitle: "APP DEMO",
          videoNote: "(VIDEO PLACEHOLDER)",
          videoCta: "WATCH DEMO",
          aboutTitle: "WHAT DOES IT SOLVE?",
          aboutText:
            "Optimizes daily barbershop operations, improves product control, and enables mobile sales. It streamlines service flow, reduces waiting time, and provides clear visibility into inventory and sales.",
          featuresTitle: "KEY FEATURES",
          benefitsTitle: "BENEFITS",
          stackTitle: "STACK AND TECHNOLOGY",
          flowTitle: "OPERATION FLOW",
          ctaTitle: "NEED AN APP LIKE THIS?",
          ctaText:
            "I can tailor it to your business with your branding, pricing, and flows. I can also add payments, invoicing, and advanced reporting.",
          ctaContact: "CONTACT",
          ctaMore: "SEE MORE PROJECTS",
        }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="arcade-grid"></div>

      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-orbitron"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {copy.back}
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-cyan-400 animate-pulse" />
              <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
                {copy.badge}
              </Badge>
              <Zap className="w-8 h-8 text-purple-400 animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
              {copy.title}
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">{copy.subtitle}</p>
          </div>
        </div>
      </header>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto arcade-card">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-purple-900 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/30">
                <div className="text-center">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-cyan-300 font-orbitron">{copy.videoTitle}</p>
                  <p className="text-sm text-purple-300 mt-2 font-orbitron">{copy.videoNote}</p>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500">
                  <Play className="w-4 h-4 mr-2" />
                  {copy.videoCta}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.aboutTitle}
            </h2>
            <p className="text-cyan-300 text-center max-w-3xl mx-auto">{copy.aboutText}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.flowTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flow.map((step, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-orbitron flex items-center justify-center">
                      {index + 1}
                    </div>
                    <span className="text-cyan-300">{step}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.stackTitle}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {stack.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 font-orbitron"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.featuresTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-2 border border-cyan-500/30">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg font-orbitron text-purple-400">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-cyan-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.benefitsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-3">
                    <Scissors className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-300">{benefit}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center arcade-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                {copy.ctaTitle}
              </h3>
              <p className="text-cyan-300 mb-6">{copy.ctaText}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500">
                  <Link href="/#contact">{copy.ctaContact}</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="arcade-button-outline border-cyan-500 text-cyan-400 bg-transparent"
                >
                  <Link href="/">{copy.ctaMore}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
