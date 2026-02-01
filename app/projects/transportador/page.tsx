"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Download, Upload, MapPin, FileText, FolderDown, Zap, Bot } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function TransportadorPage() {
  const { lang } = useLanguage()

  const projectFeatures =
    lang === "es"
      ? [
          {
            icon: FileText,
            title: "Recepcion de instrucciones",
            description:
              "Los usuarios interactuan con una aplicacion Python disenada para el robot. En esta aplicacion ingresan la distancia de recoleccion, el punto de entrega, la cantidad de peso y el peso maximo que puede llevar.",
          },
          {
            icon: FolderDown,
            title: "Procesamiento de instrucciones",
            description:
              "La aplicacion procesa las instrucciones y las envia al robot a traves de una conexion inalambrica. El robot recibe y decodifica estas instrucciones.",
          },
          {
            icon: MapPin,
            title: "Movilidad y navegacion",
            description:
              "El robot utiliza sensores integrados (ultrasonidos, infrarrojos o camaras) para detectar obstaculos. Con esta informacion planifica su ruta y evita colisiones.",
          },
          {
            icon: Download,
            title: "Recogida de objetos",
            description:
              "Al llegar al punto de recogida, el robot recoge los objetos segun las especificaciones del usuario y puede cargar varios en su compartimento.",
          },
          {
            icon: MapPin,
            title: "Navegacion al punto de entrega",
            description:
              "El robot calcula la ruta mas eficiente para llegar al punto de entrega, evitando obstaculos en el camino.",
          },
          {
            icon: Upload,
            title: "Entrega de objetos",
            description: "En el punto de entrega, el robot descarga los objetos de manera segura y completa la entrega.",
          },
        ]
      : [
          {
            icon: FileText,
            title: "Instruction intake",
            description:
              "Users interact with a Python app designed for the robot. They provide pickup distance, delivery point, payload weight, and the maximum weight it can carry.",
          },
          {
            icon: FolderDown,
            title: "Instruction processing",
            description:
              "The app processes the instructions and sends them to the robot via a wireless connection. The robot receives and decodes the instructions.",
          },
          {
            icon: MapPin,
            title: "Mobility and navigation",
            description:
              "The robot uses integrated sensors (ultrasound, infrared, or cameras) to detect obstacles. With this data it plans its route and avoids collisions.",
          },
          {
            icon: Download,
            title: "Object pickup",
            description:
              "Once it reaches the pickup point, the robot collects the objects based on the user's specifications and can carry multiple items in its compartment.",
          },
          {
            icon: MapPin,
            title: "Navigation to delivery point",
            description:
              "The robot calculates the most efficient route to the delivery point, avoiding obstacles along the way.",
          },
          {
            icon: Upload,
            title: "Object delivery",
            description: "At the delivery point, the robot unloads the objects safely and completes the delivery.",
          },
        ]

  const applications =
    lang === "es"
      ? [
          {
            title: "Entrega de suministros en oficinas y almacenes",
            description:
              "El robot puede llevar documentos, materiales de oficina, productos o suministros dentro de un edificio o almacen.",
          },
          {
            title: "Servicio de habitaciones en hoteles",
            description:
              "En el sector hotelero, el robot puede entregar alimentos, bebidas u otros servicios de habitaciones a los huespedes.",
          },
          {
            title: "Asistencia medica en hospitales",
            description:
              "En hospitales y centros de atencion medica, el robot puede entregar medicamentos o suministros a pacientes o personal medico.",
          },
          {
            title: "Automatizacion de procesos industriales",
            description:
              "Las fabricas y almacenes pueden utilizar el robot para automatizar la distribucion de componentes o productos.",
          },
        ]
      : [
          {
            title: "Office and warehouse supply delivery",
            description:
              "The robot can transport documents, office materials, products, or supplies within a building or warehouse.",
          },
          {
            title: "Hotel room service",
            description:
              "In the hospitality sector, the robot can deliver food, beverages, or other room-service items to guests.",
          },
          {
            title: "Medical assistance in hospitals",
            description:
              "In hospitals and medical centers, the robot can deliver medication or supplies to patients or staff.",
          },
          {
            title: "Industrial process automation",
            description:
              "Factories and warehouses can use the robot to automate the distribution of components or products.",
          },
        ]

  const conclusions =
    lang === "es"
      ? [
          {
            title: "Eficiencia en la distribucion",
            description:
              "El robot de transporte ha demostrado ser una solucion eficiente para la distribucion de objetos en diversos entornos. Su capacidad de moverse de manera autonoma y evitar obstaculos ha mejorado la velocidad y la precision de las entregas.",
          },
          {
            title: "Automatizacion de procesos",
            description:
              "La capacidad del robot para funcionar de manera autonoma ha permitido la automatizacion de procesos logisticos en diversas industrias, reduciendo tiempos de espera y mejorando la gestion de carga y distribucion.",
          },
          {
            title: "Seguridad y confiabilidad",
            description:
              "Se han implementado medidas de seguridad efectivas para prevenir colisiones y garantizar un funcionamiento seguro en entornos con personas. Las pruebas han demostrado su confiabilidad en diferentes situaciones.",
          },
          {
            title: "Versatilidad de aplicacion",
            description:
              "El robot ha encontrado aplicaciones en una amplia gama de entornos, desde oficinas y almacenes hasta hospitales y hoteles. Su versatilidad lo hace adecuado para diversas necesidades de distribucion y entrega.",
          },
        ]
      : [
          {
            title: "Distribution efficiency",
            description:
              "The transport robot has proven to be an efficient solution for object distribution in diverse environments. Its autonomous movement and obstacle avoidance improve delivery speed and accuracy.",
          },
          {
            title: "Process automation",
            description:
              "Its ability to operate autonomously enables automation of logistics processes across industries, reducing wait times and improving load and distribution management.",
          },
          {
            title: "Safety and reliability",
            description:
              "Effective safety measures prevent collisions and ensure safe operation around people. Testing has shown reliable performance across scenarios.",
          },
          {
            title: "Application versatility",
            description:
              "The robot has applications in a wide range of environments, from offices and warehouses to hospitals and hotels. Its versatility suits many delivery needs.",
          },
        ]

  const copy =
    lang === "es"
      ? {
          back: "VOLVER AL PORTAFOLIO",
          badge: "PROYECTO IOT",
          title: "TRANSPORTADOR DE OBJETOS",
          subtitle:
            "Robot autonomo disenado para facilitar la transportacion de objetos de un lugar a otro de manera eficiente y segura.",
          videoTitle: "VIDEO DEMOSTRATIVO DEL ROBOT",
          videoNote: "(PLACEHOLDER PARA EL VIDEO ORIGINAL)",
          videoCta: "VER DEMOSTRACION",
          aboutTitle: "DE QUE TRATA?",
          aboutP1:
            "El robot de transporte es un dispositivo autonomo disenado para facilitar la transportacion de objetos de un lugar a otro de manera eficiente y segura. Esta equipado con sensores, motores y un sistema de comunicacion que le permite recibir instrucciones desde una aplicacion Python.",
          aboutP2:
            "Su estructura y movilidad se adaptan a diversos entornos, desde interiores hasta exteriores. Cuenta con un compartimento de carga que acomoda diferentes objetos y su capacidad es ajustable segun las necesidades.",
          purposeTitle: "PROPOSITO DEL ROBOT",
          purposeText:
            "El proposito principal del robot de transporte es ofrecer una solucion eficiente y conveniente para la distribucion de objetos en diferentes entornos.",
          purposeItems: [
            "Entregas a corta distancia",
            "Automatizacion de la logistica",
            "Asistencia personalizada",
            "Minimizar la interaccion humana",
          ],
          howTitle: "FUNCIONAMIENTO DEL ROBOT",
          howText:
            "El robot de transporte es un dispositivo autonomo que se basa en una combinacion de hardware y software para llevar a cabo sus tareas.",
          appsTitle: "APLICACIONES DEL ROBOT",
          conclusionsTitle: "CONCLUSIONES DEL PROYECTO",
          ctaTitle: "INTERESADO EN ESTE PROYECTO?",
          ctaText:
            "Si quieres conocer mas detalles tecnicos o discutir proyectos similares, no dudes en contactarme.",
          ctaContact: "CONTACTAR",
          ctaMore: "VER MAS PROYECTOS",
        }
      : {
          back: "BACK TO PORTFOLIO",
          badge: "IOT PROJECT",
          title: "OBJECT TRANSPORTER",
          subtitle:
            "Autonomous robot designed to move objects efficiently and safely from one place to another.",
          videoTitle: "ROBOT DEMO VIDEO",
          videoNote: "(PLACEHOLDER FOR ORIGINAL VIDEO)",
          videoCta: "WATCH DEMO",
          aboutTitle: "WHAT IS IT ABOUT?",
          aboutP1:
            "The transport robot is an autonomous device designed to move objects efficiently and safely. It is equipped with sensors, motors, and a communication system to receive instructions from a Python app.",
          aboutP2:
            "Its structure and mobility adapt to various environments, from indoor to outdoor. It has a cargo compartment for multiple items and an adjustable load capacity.",
          purposeTitle: "ROBOT PURPOSE",
          purposeText:
            "The main purpose of the transport robot is to provide an efficient and convenient solution for object distribution in different environments.",
          purposeItems: [
            "Short-distance deliveries",
            "Logistics automation",
            "Personalized assistance",
            "Minimize human interaction",
          ],
          howTitle: "HOW THE ROBOT WORKS",
          howText:
            "The transport robot relies on a combination of hardware and software to perform its tasks.",
          appsTitle: "ROBOT APPLICATIONS",
          conclusionsTitle: "PROJECT CONCLUSIONS",
          ctaTitle: "INTERESTED IN THIS PROJECT?",
          ctaText:
            "If you want more technical details or to discuss similar projects, feel free to contact me.",
          ctaContact: "CONTACT",
          ctaMore: "SEE MORE PROJECTS",
        }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="arcade-grid"></div>

      {/* Header */}
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

      {/* Video Hero Section */}
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

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.aboutTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="arcade-card">
                <CardContent className="p-6">
                  <p className="text-cyan-300 leading-relaxed mb-6">{copy.aboutP1}</p>
                  <p className="text-cyan-300 leading-relaxed">{copy.aboutP2}</p>
                </CardContent>
              </Card>
              <Card className="arcade-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 font-orbitron text-purple-400">{copy.purposeTitle}</h3>
                  <p className="text-cyan-300 leading-relaxed mb-4">{copy.purposeText}</p>
                  <div className="space-y-3">
                    {copy.purposeItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-sm text-cyan-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                {copy.howTitle}
              </h2>
              <p className="text-cyan-300 max-w-3xl mx-auto">{copy.howText}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectFeatures.map((feature, index) => (
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

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.appsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-orbitron text-purple-400">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-300">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              {copy.conclusionsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conclusions.map((conclusion, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-orbitron text-purple-400">{conclusion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-300">{conclusion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
