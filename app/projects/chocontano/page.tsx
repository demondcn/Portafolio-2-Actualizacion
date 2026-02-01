"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, ShoppingBag, Smartphone, Store, ClipboardList, Zap, Bot } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function ChocontanoPage() {
  const { lang } = useLanguage()

  const features =
    lang === "es"
      ? [
          {
            icon: Smartphone,
            title: "Pedidos desde el movil",
            description: "App movil para explorar el menu, personalizar pedidos y pagar en linea.",
          },
          {
            icon: Store,
            title: "E-commerce web",
            description: "Plataforma web para compras rapidas, promociones y seguimiento de pedidos.",
          },
          {
            icon: ClipboardList,
            title: "Administracion centralizada",
            description: "Panel para gestionar productos, inventario, estados y reportes.",
          },
          {
            icon: ShoppingBag,
            title: "Promos y combos",
            description: "Reglas para descuentos, combos y horarios especiales.",
          },
        ]
      : [
          {
            icon: Smartphone,
            title: "Mobile ordering",
            description: "Mobile app to browse the menu, customize orders, and pay online.",
          },
          {
            icon: Store,
            title: "Web e-commerce",
            description: "Web platform for fast purchases, promotions, and order tracking.",
          },
          {
            icon: ClipboardList,
            title: "Centralized management",
            description: "Admin panel to manage products, inventory, order status, and reports.",
          },
          {
            icon: ShoppingBag,
            title: "Promos and bundles",
            description: "Rules for discounts, combos, and special schedules.",
          },
        ]

  const benefits =
    lang === "es"
      ? [
          "Reduccion de tiempos de espera",
          "Control de inventario en tiempo real",
          "Mejor experiencia de cliente",
          "Reportes y analitica de ventas",
          "Incremento de pedidos digitales",
          "Menos errores en la toma de pedidos",
        ]
      : [
          "Reduced waiting times",
          "Real-time inventory control",
          "Better customer experience",
          "Sales reports and analytics",
          "More digital orders",
          "Fewer order-taking errors",
        ]

  const stack =
    lang === "es"
      ? ["React Native", "React", "API REST", "Base de datos", "Panel administrativo", "Pagos"]
      : ["React Native", "React", "REST API", "Database", "Admin panel", "Payments"]

  const flow =
    lang === "es"
      ? [
          "Cliente elige productos y personaliza el pedido",
          "Pago en linea y confirmacion automatica",
          "Cocina recibe y actualiza el estado",
          "Cliente recibe notificaciones del avance",
        ]
      : [
          "Customer selects items and customizes the order",
          "Online payment and automatic confirmation",
          "Kitchen receives and updates the status",
          "Customer gets progress notifications",
        ]

  const copy =
    lang === "es"
      ? {
          back: "VOLVER AL PORTAFOLIO",
          badge: "E-COMMERCE + APP MOVIL",
          title: "CHOCONTANO RESTAURANTE",
          subtitle:
            "Sistema completo para pedidos, ventas e inventario que une app movil, web y panel administrativo.",
          videoTitle: "DEMO DEL SISTEMA",
          videoNote: "(PLACEHOLDER PARA VIDEO)",
          videoCta: "VER DEMO",
          aboutTitle: "QUE RESUELVE?",
          aboutText:
            "Centraliza la operacion del restaurante y facilita las ventas digitales con una experiencia simple para el cliente y un control claro para el negocio. Reduce filas, mejora el control de inventario y estandariza el proceso de pedidos.",
          featuresTitle: "FUNCIONALIDADES CLAVE",
          benefitsTitle: "BENEFICIOS",
          stackTitle: "STACK Y TECNOLOGIA",
          flowTitle: "FLUJO DEL PEDIDO",
          ctaTitle: "QUIERES ESTE TIPO DE SOLUCION?",
          ctaText: "Puedo adaptarlo a tu negocio con branding, flujos y pagos a medida.",
          ctaContact: "CONTACTAR",
          ctaMore: "VER MAS PROYECTOS",
        }
      : {
          back: "BACK TO PORTFOLIO",
          badge: "E-COMMERCE + MOBILE APP",
          title: "CHOCONTANO RESTAURANT",
          subtitle:
            "Complete system for orders, sales, and inventory combining mobile app, web, and admin panel.",
          videoTitle: "SYSTEM DEMO",
          videoNote: "(VIDEO PLACEHOLDER)",
          videoCta: "WATCH DEMO",
          aboutTitle: "WHAT DOES IT SOLVE?",
          aboutText:
            "Centralizes restaurant operations and boosts digital sales with a simple customer experience and clear business control. It reduces lines, improves inventory control, and standardizes ordering.",
          featuresTitle: "KEY FEATURES",
          benefitsTitle: "BENEFITS",
          stackTitle: "STACK AND TECHNOLOGY",
          flowTitle: "ORDER FLOW",
          ctaTitle: "NEED A SOLUTION LIKE THIS?",
          ctaText: "I can tailor it to your business with branding, flows, and custom payments.",
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

      <section className="py-16">
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
                    <ShoppingBag className="w-5 h-5 text-cyan-400" />
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
