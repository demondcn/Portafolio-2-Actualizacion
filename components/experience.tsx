"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building, Briefcase, Zap, Bot } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Experience() {
  const { lang } = useLanguage()

  const experiences =
    lang === "es"
      ? [
          {
            title: "Transportador de Objetos",
            company: "Proyecto IoT",
            location: "Universidad de Cundinamarca",
            period: "2023",
            type: "Proyecto Academico",
            description:
              "Robot automatizado disenado para transportar objetos de un lugar a otro de manera eficiente. Utiliza automatizacion y tecnologia avanzada para facilitar la logistica y el movimiento de objetos.",
            technologies: ["IoT", "Arduino", "Sensores", "Automatizacion", "C++"],
            achievements: [
              "Diseno e implementacion de sistema de navegacion autonoma",
              "Integracion de sensores para deteccion de obstaculos",
              "Desarrollo de algoritmos de optimizacion de rutas",
            ],
          },
          {
            title: "Emprex360",
            company: "Analisis Empresarial",
            location: "Proyecto Profesional",
            period: "2024",
            type: "Aplicacion Web",
            description:
              "Aplicacion web especializada en analisis de datos y diagnostico empresarial con dashboards interactivos y diagnostico predictivo.",
            technologies: ["React", "Next.js", "PostgreSQL", "Vercel", "Neon"],
            achievements: [
              "Dashboards interactivos en tiempo real",
              "Analisis predictivo empresarial",
              "Procesamiento y visualizacion de datos",
            ],
          },
        ]
      : [
          {
            title: "Object Transporter",
            company: "IoT Project",
            location: "Cundinamarca University",
            period: "2023",
            type: "Academic Project",
            description:
              "Automated robot designed to transport objects efficiently. It uses automation and advanced technology to streamline logistics and object movement.",
            technologies: ["IoT", "Arduino", "Sensors", "Automation", "C++"],
            achievements: [
              "Designed and implemented autonomous navigation system",
              "Integrated sensors for obstacle detection",
              "Developed route optimization algorithms",
            ],
          },
          {
            title: "Emprex360",
            company: "Business Analytics",
            location: "Professional Project",
            period: "2024",
            type: "Web Application",
            description:
              "Web application specialized in data analytics and business diagnostics with interactive dashboards and predictive insights.",
            technologies: ["React", "Next.js", "PostgreSQL", "Vercel", "Neon"],
            achievements: [
              "Real-time interactive dashboards",
              "Predictive business analytics",
              "Data processing and visualization",
            ],
          },
        ]

  const copy =
    lang === "es"
      ? {
          badge: "EXPERIENCIA",
          title: "PROYECTOS Y EXPERIENCIA",
          subtitle: "Una coleccion de proyectos innovadores que demuestran mi experiencia en diferentes tecnologias y dominios.",
          achievements: "LOGROS PRINCIPALES:",
          technologies: "TECNOLOGIAS UTILIZADAS:",
        }
      : {
          badge: "EXPERIENCE",
          title: "PROJECTS AND EXPERIENCE",
          subtitle: "A collection of innovative projects that showcase my experience across different technologies and domains.",
          achievements: "KEY ACHIEVEMENTS:",
          technologies: "TECHNOLOGIES USED:",
        }

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -left-24 top-12 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute right-0 top-1/4 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute left-1/2 top-12 h-1 w-44 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute right-20 top-24 h-10 w-10 rounded-md border border-cyan-400/20 rotate-12"></div>
        <div className="absolute left-12 top-32 h-8 w-24 rounded-full border border-purple-400/20"></div>
        <div className="absolute right-16 bottom-24 h-12 w-12 rounded-lg border border-cyan-400/20 rotate-6"></div>
        <div className="absolute left-1/3 bottom-16 h-1 w-40 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              {copy.badge}
            </Badge>
            <Bot className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            {copy.title}
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">{copy.subtitle}</p>
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
                      <span className="text-cyan-300">|</span>
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
                  <h4 className="font-semibold text-purple-400 mb-2 font-orbitron">{copy.achievements}</h4>
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
                  <h4 className="font-semibold text-purple-400 mb-3 font-orbitron">{copy.technologies}</h4>
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
