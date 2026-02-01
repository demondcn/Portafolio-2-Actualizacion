"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Smartphone,
  BarChart3,
  Scissors,
  Eye,
  Bot,
  GraduationCap,
  Brain,
  Calculator,
  BookOpen,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export function Projects() {
  const { lang } = useLanguage()

  const projects =
    lang === "es"
      ? [
          {
            title: "Emprex360 - Analisis Empresarial",
            description:
              "Aplicacion web especializada en analisis de datos y diagnostico empresarial con dashboards interactivos y diagnostico predictivo.",
            icon: BarChart3,
            technologies: ["React", "Next.js", "PostgreSQL", "Vercel", "Neon"],
            features: [
              "Dashboards interactivos en tiempo real",
              "Analisis predictivo empresarial",
              "Carga y procesamiento de datos",
              "Reportes automatizados",
            ],
            link: "https://emprex360.vercel.app",
            type: "Web Application",
            status: "ACTIVO",
          },
          {
            title: "Transportador de Objetos - IoT",
            description:
              "Robot autonomo para transporte de objetos con control remoto mediante aplicacion Python y sensores integrados.",
            icon: Bot,
            technologies: ["Python", "IoT", "Sensors", "Automation"],
            features: [
              "Control remoto via Python",
              "Navegacion autonoma",
              "Deteccion de obstaculos",
              "Sistema de carga automatizado",
            ],
            type: "IoT Project",
            detailPage: "/projects/transportador",
            status: "COMPLETADO",
          },
          {
            title: "Chocontano Restaurante",
            description: "Aplicacion movil y sistema E-commerce completo para restaurante con gestion de pedidos e inventario.",
            icon: Smartphone,
            technologies: ["React Native", "React", "E-Commerce", "Admin Panel"],
            features: [
              "Aplicacion movil para pedidos",
              "Sistema web E-commerce",
              "Panel de administracion",
              "Gestion de inventario",
            ],
            type: "Mobile & Web App",
            status: "COMPLETADO",
            detailPage: "/projects/chocontano",
          },
          {
            title: "Charles Barber - App Android",
            description: "Aplicacion movil especializada para barberias con control de inventario, ventas y tienda en linea.",
            icon: Scissors,
            technologies: ["Java", "Android Studio", "E-Commerce", "Inventory Management"],
            features: ["Control de inventario", "Sistema de ventas", "Tienda en linea integrada", "Panel administrativo"],
            type: "Android Application",
            status: "COMPLETADO",
            detailPage: "/projects/charles-barber",
          },
        ]
      : [
          {
            title: "Emprex360 - Business Analytics",
            description:
              "Web application specialized in data analytics and business diagnostics with interactive dashboards and predictive insights.",
            icon: BarChart3,
            technologies: ["React", "Next.js", "PostgreSQL", "Vercel", "Neon"],
            features: [
              "Real-time interactive dashboards",
              "Predictive business analytics",
              "Data upload and processing",
              "Automated reports",
            ],
            link: "https://emprex360.vercel.app",
            type: "Web Application",
            status: "ACTIVE",
          },
          {
            title: "Object Transporter - IoT",
            description:
              "Autonomous robot for object transport with remote control via Python app and integrated sensors.",
            icon: Bot,
            technologies: ["Python", "IoT", "Sensors", "Automation"],
            features: [
              "Remote control via Python",
              "Autonomous navigation",
              "Obstacle detection",
              "Automated loading system",
            ],
            type: "IoT Project",
            detailPage: "/projects/transportador",
            status: "COMPLETED",
          },
          {
            title: "Chocontano Restaurant",
            description: "Mobile app and complete e-commerce system for a restaurant with order and inventory management.",
            icon: Smartphone,
            technologies: ["React Native", "React", "E-Commerce", "Admin Panel"],
            features: [
              "Mobile ordering app",
              "E-commerce web system",
              "Admin panel",
              "Inventory management",
            ],
            type: "Mobile & Web App",
            status: "COMPLETED",
            detailPage: "/projects/chocontano",
          },
          {
            title: "Charles Barber - Android App",
            description:
              "Mobile app for barbershops with inventory control, sales, and an online store.",
            icon: Scissors,
            technologies: ["Java", "Android Studio", "E-Commerce", "Inventory Management"],
            features: ["Inventory control", "Sales system", "Integrated online store", "Admin dashboard"],
            type: "Android Application",
            status: "COMPLETED",
            detailPage: "/projects/charles-barber",
          },
        ]

  const copy =
    lang === "es"
      ? {
          badge: "PROYECTOS",
          title: "PROYECTOS DESTACADOS",
          subtitle:
            "Una seleccion de proyectos reales que he desarrollado, demostrando mi experiencia en diferentes tecnologias y sectores.",
          features: "CARACTERISTICAS:",
          viewProject: "VER PROYECTO",
          viewDetails: "VER DETALLES",
        }
      : {
          badge: "PROJECTS",
          title: "FEATURED PROJECTS",
          subtitle:
            "A selection of real projects I have built, showcasing my experience across different technologies and industries.",
          features: "FEATURES:",
          viewProject: "VIEW PROJECT",
          viewDetails: "VIEW DETAILS",
        }

  const isActive = (status?: string) => status === "ACTIVO" || status === "ACTIVE"

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-10 top-10 h-16 w-16 rounded-lg border border-cyan-400/30 rotate-12"></div>
        <div className="absolute right-12 top-16 h-10 w-24 rounded-full border border-purple-400/30"></div>
        <div className="absolute left-1/2 top-14 h-1 w-52 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
        <div className="absolute left-1/3 top-36 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-1/3 top-40 h-20 w-20 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute left-8 bottom-24 h-10 w-40 rounded-full border border-cyan-400/20"></div>
        <div className="absolute right-10 bottom-28 h-14 w-14 rounded-md border border-purple-400/20 rotate-6"></div>
        <div className="absolute left-1/2 bottom-16 h-1 w-64 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-orbitron">
            {copy.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            {copy.title}
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="arcade-card hover:glow-card transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <project.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron"
                    >
                      {project.type}
                    </Badge>
                    {project.status && (
                      <Badge
                        variant={isActive(project.status) ? "default" : "secondary"}
                        className={`text-xs font-orbitron ${
                          isActive(project.status)
                            ? "bg-green-500/20 text-green-300 border-green-500/30"
                            : "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>
                <CardTitle className="text-lg font-orbitron text-cyan-400">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-purple-400 mb-2 text-sm font-orbitron">{copy.features}</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs text-cyan-300">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-xs bg-slate-800/50 text-cyan-300 border-cyan-500/30 font-orbitron"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.link && (
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 arcade-button bg-gradient-to-r from-cyan-500 to-purple-500"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        {copy.viewProject}
                      </a>
                    </Button>
                  )}
                  {project.detailPage && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 arcade-button-outline border-cyan-500 text-cyan-400 bg-transparent"
                    >
                      <Link href={project.detailPage}>
                        <Eye className="w-3 h-3 mr-1" />
                        {copy.viewDetails}
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
