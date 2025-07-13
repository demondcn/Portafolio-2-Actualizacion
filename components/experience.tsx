"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase, Zap, Bot } from "lucide-react"

const experiences = [
  {
    title: "Transportador de Objetos",
    company: "Proyecto IoT",
    location: "Universidad de Cundinamarca",
    period: "2023",
    type: "Proyecto Académico",
    description:
      "Robot automatizado diseñado para transportar objetos de un lugar a otro de manera eficiente. Utiliza automatización y tecnología avanzada para facilitar la logística y el movimiento de objetos.",
    technologies: ["IoT", "Arduino", "Sensores", "Automatización", "C++"],
    achievements: [
      "Diseño e implementación de sistema de navegación autónoma",
      "Integración de sensores para detección de obstáculos",
      "Desarrollo de algoritmos de optimización de rutas",
    ],
  },
  {
    title: "InformationUdeCundinamarca",
    company: "Aplicación Móvil",
    location: "Universidad de Cundinamarca",
    period: "2023",
    type: "Desarrollo Móvil",
    description:
      "Aplicación móvil que proporciona información valiosa sobre la Universidad de Cundinamarca. Ofrece detalles sobre ubicaciones de clases, horarios, tareas y eventos universitarios.",
    technologies: ["Android", "Java", "SQLite", "API REST", "Material Design"],
    achievements: [
      "Interfaz intuitiva para estudiantes universitarios",
      "Sistema de notificaciones para eventos importantes",
      "Integración con sistemas académicos existentes",
    ],
  },
  {
    title: "Registro Facial",
    company: "Aplicación de IA",
    location: "Proyecto Personal",
    period: "2022",
    type: "Inteligencia Artificial",
    description:
      "Aplicación desarrollada en Python que utiliza inteligencia artificial para permitir el registro facial. Puede ser utilizada para autenticación o identificación de personas basada en reconocimiento facial.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning", "Computer Vision"],
    achievements: [
      "Implementación de algoritmos de reconocimiento facial",
      "Sistema de autenticación biométrica seguro",
      "Optimización para tiempo real",
    ],
  },
  {
    title: "TeachMath",
    company: "Aplicación Educativa",
    location: "Proyecto Personal",
    period: "2022",
    type: "Desarrollo Web",
    description:
      "Aplicación que utiliza juegos y tutoriales para enseñar y practicar conceptos matemáticos. Ayuda a estudiantes y entusiastas de las matemáticas a fortalecer sus habilidades de manera interactiva.",
    technologies: ["React", "JavaScript", "CSS3", "Node.js", "MongoDB"],
    achievements: [
      "Gamificación del aprendizaje matemático",
      "Sistema de progreso y logros",
      "Interfaz adaptativa para diferentes niveles",
    ],
  },
  {
    title: "TechEnglish",
    company: "Plataforma de Aprendizaje",
    location: "Proyecto Personal",
    period: "2022",
    type: "Desarrollo Web",
    description:
      "Aplicación que combina juegos y tutoriales para facilitar el aprendizaje del inglés. Proporciona una plataforma interactiva que ayuda a los usuarios a mejorar sus habilidades en el idioma.",
    technologies: ["React", "TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
    achievements: [
      "Sistema de aprendizaje adaptativo",
      "Integración de reconocimiento de voz",
      "Métricas de progreso detalladas",
    ],
  },
  {
    title: "DronSecurity",
    company: "Sistema de Seguridad",
    location: "Proyecto Innovador",
    period: "2021",
    type: "IoT & Seguridad",
    description:
      "Proyecto enfocado en el uso de un dron para la búsqueda de objetos específicos y grabación de áreas para fines de seguridad. Ofrece una solución tecnológica para vigilancia y grabación de áreas extensas.",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Computer Vision", "Streaming"],
    achievements: [
      "Sistema de vigilancia aérea automatizada",
      "Detección de objetos en tiempo real",
      "Transmisión de video en vivo",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              EXPERIENCIA
            </Badge>
            <Bot className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            PROYECTOS Y EXPERIENCIA
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">
            Una colección de proyectos innovadores que demuestran mi experiencia en diferentes tecnologías y dominios.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold font-orbitron text-cyan-400 mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <Building className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-cyan-300">•</span>
                      <span className="text-cyan-300">{exp.type}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-cyan-300">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                    <Badge
                      variant="outline"
                      className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-cyan-300 leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-2 font-orbitron">LOGROS PRINCIPALES:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-cyan-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-purple-400 mb-3 font-orbitron">TECNOLOGÍAS UTILIZADAS:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-300 border-cyan-500/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
