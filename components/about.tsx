"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Code, Lightbulb, Target, Download, Zap, Bot } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AboutSymbols } from "@/components/about-symbols"

export function About() {
  const { lang } = useLanguage()

  const stats =
    lang === "es"
      ? [
          { label: "ANOS DE EXPERIENCIA", value: "3+", icon: Code },
          { label: "PROYECTOS COMPLETADOS", value: "4+", icon: Target },
          { label: "TECNOLOGIAS DOMINADAS", value: "30+", icon: Lightbulb },
        ]
      : [
          { label: "YEARS OF EXPERIENCE", value: "3+", icon: Code },
          { label: "PROJECTS COMPLETED", value: "4+", icon: Target },
          { label: "TECHNOLOGIES MASTERED", value: "30+", icon: Lightbulb },
        ]

  const chipSkills =
    lang === "es"
      ? ["Desarrollo Web", "Aplicaciones Moviles", "APIs REST", "Bases de Datos", "UI/UX", "DevOps"]
      : ["Web Development", "Mobile Apps", "REST APIs", "Databases", "UI/UX", "DevOps"]

  const copy =
    lang === "es"
      ? {
          badge: "ACERCA DE MI",
          title: "DESARROLLADOR APASIONADO",
          p1:
            "Soy un desarrollador de software con mas de 3 anos de experiencia creando soluciones digitales innovadoras. Mi pasion por la tecnologia me impulsa a estar siempre actualizado con las ultimas tendencias y mejores practicas del desarrollo.",
          p2:
            "Especializado en desarrollo full-stack, trabajo con tecnologias modernas como React, Next.js, Python y Java para crear aplicaciones web y moviles que no solo funcionan perfectamente, sino que tambien ofrecen experiencias de usuario excepcionales.",
          p3:
            "Mi enfoque se centra en escribir codigo limpio y escalable, implementar las mejores practicas de desarrollo y colaborar efectivamente en equipos multidisciplinarios para entregar proyectos de alta calidad.",
          cta: "DESCARGAR CV",
          philosophyTitle: "MI FILOSOFIA",
          philosophy:
            '"La tecnologia debe servir a las personas, no al reves. Cada linea de codigo que escribo tiene el proposito de crear soluciones que mejoren la vida de los usuarios y impulsen el crecimiento de los negocios."',
        }
      : {
          badge: "ABOUT ME",
          title: "PASSIONATE DEVELOPER",
          p1:
            "I am a software developer with more than 3 years of experience building innovative digital solutions. My passion for technology pushes me to stay up to date with the latest trends and best development practices.",
          p2:
            "Specialized in full-stack development, I work with modern technologies like React, Next.js, Python, and Java to build web and mobile apps that not only work flawlessly but also deliver great user experiences.",
          p3:
            "My focus is on writing clean, scalable code, applying best practices, and collaborating effectively in multidisciplinary teams to deliver high-quality projects.",
          cta: "DOWNLOAD CV",
          philosophyTitle: "MY PHILOSOPHY",
          philosophy:
            '"Technology should serve people, not the other way around. Every line of code I write aims to create solutions that improve users lives and drive business growth."',
        }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <AboutSymbols className="absolute inset-0 opacity-70" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <User className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              {copy.badge}
            </Badge>
            <Bot className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            {copy.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-cyan-300 leading-relaxed">{copy.p1}</p>
              <p className="text-lg text-cyan-300 leading-relaxed">{copy.p2}</p>
              <p className="text-lg text-cyan-300 leading-relaxed">{copy.p3}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {chipSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 font-orbitron"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <Button className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500 group" size="lg" asChild>
              <a href="/cv/CVp 6 Software (1).pdf" download>
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                {copy.cta}
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <stat.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                        {stat.value}
                      </div>
                      <div className="text-sm text-purple-400 font-orbitron">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="arcade-card bg-gradient-to-r from-slate-900/80 to-purple-900/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <h3 className="font-semibold text-cyan-400 font-orbitron">{copy.philosophyTitle}</h3>
                </div>
                <p className="text-cyan-300 text-sm leading-relaxed">{copy.philosophy}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
