"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send, Zap, Bot } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "guerrero70407@gmail.com",
    href: "mailto:guerrero70407@gmail.com",
  },
  {
    icon: Phone,
    label: "TELÉFONO",
    value: "+57 305 423 3742",
    href: "tel:+573054233742",
  },
  {
    icon: MapPin,
    label: "UBICACIÓN",
    value: "Soacha, Colombia",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "cristian-stiven-guerrero-andrade",
    href: "https://www.linkedin.com/in/cristian-stiven-guerrero-andrade-877625267/",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:guerrero70407@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              CONTACTO
            </Badge>
            <Bot className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            ¡TRABAJEMOS JUNTOS!
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla
            realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-orbitron text-purple-400 mb-6">INFORMACIÓN DE CONTACTO</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg arcade-border hover:glow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium text-purple-400 font-orbitron">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-cyan-300 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-cyan-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card className="arcade-card bg-gradient-to-r from-slate-900/80 to-purple-900/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-cyan-400 mb-4 font-orbitron">¿POR QUÉ TRABAJAR CONMIGO?</h4>
                <ul className="space-y-2 text-cyan-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <span className="text-sm">Más de 3 años de experiencia en proyectos reales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <span className="text-sm">Especialización en tecnologías modernas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <span className="text-sm">Enfoque en soluciones escalables y eficientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                    <span className="text-sm">Comunicación clara y trabajo en equipo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <Card className="arcade-card hover:glow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-cyan-400">ENVÍAME UN MENSAJE</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                      NOMBRE *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                      EMAIL *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                    ASUNTO *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿De qué quieres hablar?"
                    className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                    MENSAJE *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                    rows={5}
                    className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full arcade-button bg-gradient-to-r from-cyan-500 to-purple-500 group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  ENVIAR MENSAJE
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
