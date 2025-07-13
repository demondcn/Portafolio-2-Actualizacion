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

const projects = [
  {
    title: "Emprex360 - Análisis Empresarial",
    description:
      "Aplicación web especializada en análisis de datos y diagnóstico empresarial con dashboards interactivos y diagnóstico predictivo.",
    icon: BarChart3,
    technologies: ["React", "Next.js", "PostgreSQL", "Vercel", "Neon"],
    features: [
      "Dashboards interactivos en tiempo real",
      "Análisis predictivo empresarial",
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
      "Robot autónomo para transporte de objetos con control remoto mediante aplicación Python y sensores integrados.",
    icon: Bot,
    technologies: ["Python", "IoT", "Sensors", "Automation"],
    features: [
      "Control remoto via Python",
      "Navegación autónoma",
      "Detección de obstáculos",
      "Sistema de carga automatizado",
    ],
    type: "IoT Project",
    detailPage: "/projects/transportador",
    status: "COMPLETADO",
  },
  {
    title: "InformationUdeCundinamarca",
    description:
      "Aplicación móvil que proporciona información valiosa sobre la Universidad de Cundinamarca con ubicaciones, horarios y eventos.",
    icon: GraduationCap,
    technologies: ["Android Studio", "Java", "Mobile Development"],
    features: ["Ubicaciones de clases", "Horarios académicos", "Gestión de tareas", "Eventos universitarios"],
    type: "Mobile Application",
    status: "COMPLETADO",
  },
  {
    title: "Registro Facial - IA",
    description:
      "Aplicación desarrollada en Python que utiliza inteligencia artificial para permitir el registro facial y autenticación.",
    icon: Brain,
    technologies: ["Python", "AI", "Computer Vision", "Machine Learning"],
    features: ["Reconocimiento facial", "Autenticación biométrica", "Identificación de personas", "Seguridad avanzada"],
    type: "AI Application",
    status: "COMPLETADO",
  },
  {
    title: "TeachMath - Educación",
    description:
      "Aplicación que utiliza juegos y tutoriales para enseñar y practicar conceptos matemáticos de manera interactiva.",
    icon: Calculator,
    technologies: ["Java", "Educational Tech", "Gamification", "Interactive Learning"],
    features: ["Juegos matemáticos", "Tutoriales interactivos", "Práctica de conceptos", "Progreso personalizado"],
    type: "Educational App",
    status: "COMPLETADO",
  },
  {
    title: "TechEnglish - Idiomas",
    description:
      "Aplicación que combina juegos y tutoriales para facilitar el aprendizaje del inglés de manera divertida y efectiva.",
    icon: BookOpen,
    technologies: ["Java", "Educational Tech", "Language Learning", "Gamification"],
    features: ["Juegos de idiomas", "Tutoriales interactivos", "Mejora de habilidades", "Aprendizaje divertido"],
    type: "Language App",
    status: "COMPLETADO",
  },
  {
    title: "DronSecurity - Vigilancia",
    description:
      "Proyecto que utiliza un dron para búsqueda de objetos específicos y grabación de áreas para fines de seguridad.",
    icon: Shield,
    technologies: ["Python", "Drone Technology", "Security Systems", "Video Recording"],
    features: ["Búsqueda de objetos", "Grabación de áreas", "Vigilancia automatizada", "Soluciones de seguridad"],
    type: "Security Project",
    status: "COMPLETADO",
  },
  {
    title: "Chocontano Restaurante",
    description: "Aplicación móvil y sistema E-commerce completo para restaurante con gestión de pedidos e inventario.",
    icon: Smartphone,
    technologies: ["React Native", "React", "E-Commerce", "Admin Panel"],
    features: [
      "Aplicación móvil para pedidos",
      "Sistema web E-commerce",
      "Panel de administración",
      "Gestión de inventario",
    ],
    type: "Mobile & Web App",
    status: "COMPLETADO",
  },
  {
    title: "Charles Barber - App Android",
    description: "Aplicación móvil especializada para barberías con control de inventario, ventas y tienda en línea.",
    icon: Scissors,
    technologies: ["Java", "Android Studio", "E-Commerce", "Inventory Management"],
    features: ["Control de inventario", "Sistema de ventas", "Tienda en línea integrada", "Panel administrativo"],
    type: "Android Application",
    status: "COMPLETADO",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-orbitron">
            PROYECTOS
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            PROYECTOS DESTACADOS
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">
            Una selección de proyectos reales que he desarrollado, demostrando mi experiencia en diferentes tecnologías
            y sectores.
          </p>
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
                        variant={project.status === "ACTIVO" ? "default" : "secondary"}
                        className={`text-xs font-orbitron ${
                          project.status === "ACTIVO"
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
                  <h4 className="font-semibold text-purple-400 mb-2 text-sm font-orbitron">CARACTERÍSTICAS:</h4>
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
                        VER PROYECTO
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
                        VER DETALLES
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
