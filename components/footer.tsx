"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp, Zap } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-cyan-500/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
              <div className="text-2xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                CSGA
              </div>
            </div>
            <p className="text-cyan-300 max-w-sm">
              Desarrollador de Software especializado en crear soluciones web y móviles modernas que impulsan el
              crecimiento empresarial.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-400 font-orbitron">ENLACES RÁPIDOS</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "INICIO", href: "#hero" },
                { name: "ACERCA", href: "#about" },
                { name: "EXPERIENCIA", href: "#experience" },
                { name: "SKILLS", href: "#skills" },
                { name: "PROYECTOS", href: "#projects" },
                { name: "CONTACTO", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="text-left text-cyan-300 hover:text-cyan-400 transition-colors text-sm font-orbitron hover:glow-text"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Redes sociales */}
          <div className="space-y-4">
            <h3 className="font-semibold text-purple-400 font-orbitron">CONECTA CONMIGO</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
                <a
                  href="https://www.linkedin.com/in/cristian-stiven-guerrero-andrade-877625267/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5 text-cyan-400" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
                <a href="https://github.com/demondcn" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-purple-400" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
                <a href="mailto:guerrero70407@gmail.com">
                  <Mail className="h-5 w-5 text-pink-400" />
                </a>
              </Button>
            </div>
            <div className="arcade-border p-3">
              <p className="text-sm text-cyan-300 font-orbitron">
                ¿TIENES UN PROYECTO EN MENTE?
                <br />
                <a
                  href="mailto:guerrero70407@gmail.com"
                  className="text-purple-400 hover:text-purple-300 hover:glow-text transition-colors"
                >
                  ¡HABLEMOS!
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-500/30 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-cyan-300 font-orbitron">
            © {currentYear} CRISTIAN STIVEN GUERRERO ANDRADE. TODOS LOS DERECHOS RESERVADOS.
          </p>

          <Button variant="ghost" size="icon" onClick={scrollToTop} className="mt-4 sm:mt-0 arcade-icon-button">
            <ArrowUp className="h-4 w-4 text-cyan-400" />
          </Button>
        </div>
      </div>
    </footer>
  )
}
