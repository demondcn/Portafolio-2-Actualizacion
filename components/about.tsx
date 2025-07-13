"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Code, Lightbulb, Target, Download, Zap, Bot } from "lucide-react"

export function About() {
  const stats = [
    { label: "AÑOS DE EXPERIENCIA", value: "3+", icon: Code },
    { label: "PROYECTOS COMPLETADOS", value: "15+", icon: Target },
    { label: "TECNOLOGÍAS DOMINADAS", value: "10+", icon: Lightbulb },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <User className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              ACERCA DE MÍ
            </Badge>
            <Bot className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            DESARROLLADOR APASIONADO
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-cyan-300 leading-relaxed">
                Soy un <span className="text-purple-400 font-semibold">desarrollador de software</span> con más de 3
                años de experiencia creando soluciones digitales innovadoras. Mi pasión por la tecnología me impulsa a
                estar siempre actualizado con las últimas tendencias y mejores prácticas del desarrollo.
              </p>

              <p className="text-lg text-cyan-300 leading-relaxed">
                Especializado en <span className="text-cyan-400 font-semibold">desarrollo full-stack</span>, trabajo con
                tecnologías modernas como React, Next.js, Python y Java para crear aplicaciones web y móviles que no
                solo funcionan perfectamente, sino que también ofrecen experiencias de usuario excepcionales.
              </p>

              <p className="text-lg text-cyan-300 leading-relaxed">
                Mi enfoque se centra en escribir{" "}
                <span className="text-purple-400 font-semibold">código limpio y escalable</span>, implementar las
                mejores prácticas de desarrollo y colaborar efectivamente en equipos multidisciplinarios para entregar
                proyectos de alta calidad.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Desarrollo Web", "Aplicaciones Móviles", "APIs REST", "Bases de Datos", "UI/UX", "DevOps"].map(
                (skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 font-orbitron"
                  >
                    {skill}
                  </Badge>
                ),
              )}
            </div>

            <Button className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500 group" size="lg" asChild>
              <a href="mailto:guerrero70407@gmail.com">
                <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                DESCARGAR CV
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
                  <h3 className="font-semibold text-cyan-400 font-orbitron">MI FILOSOFÍA</h3>
                </div>
                <p className="text-cyan-300 text-sm leading-relaxed">
                  "La tecnología debe servir a las personas, no al revés. Cada línea de código que escribo tiene el
                  propósito de crear soluciones que mejoren la vida de los usuarios y impulsen el crecimiento de los
                  negocios."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
