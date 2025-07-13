"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, Github, Linkedin, Mail, Zap, Code, Rocket } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Code className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              DESARROLLADOR FULL-STACK
            </Badge>
            <Rocket className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 font-orbitron">
            <span className="text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text animate-gradient">
              CRISTIAN STIVEN
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text animate-gradient-reverse glitch-text">
              GUERRERO ANDRADE
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-cyan-300 mb-8 font-orbitron">
            CREANDO EL FUTURO CON <span className="text-purple-400 animate-pulse">CÓDIGO</span>
          </p>

          {/* Description */}
          <p className="text-lg text-cyan-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Desarrollador de software especializado en tecnologías modernas como{" "}
            <span className="text-cyan-400 font-semibold">React</span>,{" "}
            <span className="text-purple-400 font-semibold">Next.js</span>,{" "}
            <span className="text-pink-400 font-semibold">Python</span> y{" "}
            <span className="text-cyan-400 font-semibold">Java</span>. Transformo ideas innovadoras en soluciones
            digitales que impulsan el crecimiento empresarial.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={scrollToAbout}
              className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 group"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              EXPLORAR PROYECTOS
            </Button>

            <Button
              variant="outline"
              className="arcade-button border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 group bg-transparent"
              size="lg"
              asChild
            >
              <a href="mailto:guerrero70407@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                CONTACTAR
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
              <a
                href="https://www.linkedin.com/in/cristian-stiven-guerrero-andrade-877625267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6 text-cyan-400" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
              <a href="https://github.com/demondcn" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-purple-400" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
              <a href="mailto:guerrero70407@gmail.com">
                <Mail className="h-6 w-6 text-pink-400" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <p className="text-cyan-400 text-sm mb-2 font-orbitron">DESCUBRE MÁS</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToAbout}
              className="animate-bounce text-cyan-400 hover:text-cyan-300"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
