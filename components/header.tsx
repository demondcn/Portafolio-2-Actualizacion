"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail, Zap } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "INICIO", href: "#hero" },
    { name: "ACERCA", href: "#about" },
    { name: "EXPERIENCIA", href: "#experience" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROYECTOS", href: "#projects" },
    { name: "CONTACTO", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/30" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Zap className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="text-xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              CSGA
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-cyan-300 hover:text-cyan-400 transition-colors font-orbitron text-sm hover:glow-text"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
              <a
                href="https://www.linkedin.com/in/cristian-stiven-guerrero-andrade-877625267/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4 text-cyan-400" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
              <a href="https://github.com/demondcn" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 text-purple-400" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
              <a href="mailto:guerrero70407@gmail.com">
                <Mail className="h-4 w-4 text-pink-400" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/30">
            <nav className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-cyan-300 hover:text-cyan-400 transition-colors font-orbitron text-left hover:glow-text"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-cyan-500/30">
                <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
                  <a
                    href="https://www.linkedin.com/in/cristian-stiven-guerrero-andrade-877625267/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4 text-cyan-400" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
                  <a href="https://github.com/demondcn" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 text-purple-400" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="arcade-icon-button">
                  <a href="mailto:guerrero70407@gmail.com">
                    <Mail className="h-4 w-4 text-pink-400" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
