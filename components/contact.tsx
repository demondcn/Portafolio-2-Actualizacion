"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send, Zap, Bot } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { ContactBot } from "@/components/contact-bot"

export function Contact() {
  const { lang } = useLanguage()

  const contactInfo =
    lang === "es"
      ? [
          {
            icon: Mail,
            label: "EMAIL",
            value: "guerrero70407@gmail.com",
            href: "mailto:guerrero70407@gmail.com",
          },
          {
            icon: Phone,
            label: "TELEFONO",
            value: "+57 305 423 3742",
            href: "tel:+573054233742",
          },
          {
            icon: MapPin,
            label: "UBICACION",
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
      : [
          {
            icon: Mail,
            label: "EMAIL",
            value: "guerrero70407@gmail.com",
            href: "mailto:guerrero70407@gmail.com",
          },
          {
            icon: Phone,
            label: "PHONE",
            value: "+57 305 423 3742",
            href: "tel:+573054233742",
          },
          {
            icon: MapPin,
            label: "LOCATION",
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

  const copy =
    lang === "es"
      ? {
          badge: "CONTACTO",
          title: "TRABAJEMOS JUNTOS",
          subtitle: "Tienes un proyecto en mente? Me encantaria conocer mas sobre tu idea y como puedo ayudarte a hacerla realidad.",
          infoTitle: "INFORMACION DE CONTACTO",
          whyTitle: "POR QUE TRABAJAR CONMIGO?",
          whyItems: [
            "Mas de 3 anos de experiencia en proyectos reales",
            "Especializacion en tecnologias modernas",
            "Enfoque en soluciones escalables y eficientes",
            "Comunicacion clara y trabajo en equipo",
          ],
          formTitle: "ENVIAME UN MENSAJE",
          nameLabel: "NOMBRE *",
          namePlaceholder: "Tu nombre completo",
          emailLabel: "EMAIL *",
          emailPlaceholder: "tu@email.com",
          subjectLabel: "ASUNTO *",
          subjectPlaceholder: "De que quieres hablar?",
          messageLabel: "MENSAJE *",
          messagePlaceholder: "Cuentame sobre tu proyecto o idea...",
          send: "ENVIAR MENSAJE",
          mailName: "Nombre",
          mailEmail: "Email",
          mailMessage: "Mensaje",
          whatsappText: "Tambien puedes comunicarte via WhatsApp",
          whatsappCta: "CONTACTAR",
        }
      : {
          badge: "CONTACT",
          title: "LETS WORK TOGETHER",
          subtitle: "Have a project in mind? I would love to hear about your idea and how I can help make it real.",
          infoTitle: "CONTACT INFO",
          whyTitle: "WHY WORK WITH ME?",
          whyItems: [
            "More than 3 years of experience on real projects",
            "Specialized in modern technologies",
            "Focus on scalable and efficient solutions",
            "Clear communication and teamwork",
          ],
          formTitle: "SEND ME A MESSAGE",
          nameLabel: "NAME *",
          namePlaceholder: "Your full name",
          emailLabel: "EMAIL *",
          emailPlaceholder: "you@email.com",
          subjectLabel: "SUBJECT *",
          subjectPlaceholder: "What do you want to talk about?",
          messageLabel: "MESSAGE *",
          messagePlaceholder: "Tell me about your project or idea...",
          send: "SEND MESSAGE",
          mailName: "Name",
          mailEmail: "Email",
          mailMessage: "Message",
          whatsappText: "You can also reach me via WhatsApp",
          whatsappCta: "CONTACT",
        }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `${copy.mailName}: ${formData.name}\n${copy.mailEmail}: ${formData.email}\nAsunto: ${formData.subject}\n\n${copy.mailMessage}:\n${formData.message}`
    const mailtoLink = `mailto:guerrero70407@gmail.com?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(body)}`
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute right-8 top-4 pointer-events-auto">
          <div className="relative mb-2 ml-8 w-[240px] rounded-2xl border border-cyan-400/30 bg-slate-900/70 px-4 py-3 text-sm text-cyan-200 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
            {copy.whatsappText}
            <div className="mt-3">
              <a
                href="https://wa.me/573054233742"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-cyan-400/50 px-3 py-1.5 text-xs font-orbitron text-cyan-300 hover:bg-cyan-400/10"
              >
                {copy.whatsappCta}
              </a>
            </div>
            <div className="absolute left-10 -bottom-2 h-4 w-4 rotate-45 border-b border-r border-cyan-400/30 bg-slate-900/70"></div>
          </div>
          <ContactBot className="h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] opacity-90" />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-orbitron text-purple-400 mb-6">{copy.infoTitle}</h3>
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
                <h4 className="font-semibold text-cyan-400 mb-4 font-orbitron">{copy.whyTitle}</h4>
                <ul className="space-y-2 text-cyan-300">
                  {copy.whyItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="arcade-card hover:glow-card transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-cyan-400">{copy.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                      {copy.nameLabel}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={copy.namePlaceholder}
                      className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                      {copy.emailLabel}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={copy.emailPlaceholder}
                      className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                    {copy.subjectLabel}
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={copy.subjectPlaceholder}
                    className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-400 mb-2 font-orbitron">
                    {copy.messageLabel}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={copy.messagePlaceholder}
                    rows={5}
                    className="bg-slate-800/50 border-cyan-500/30 text-cyan-300 placeholder:text-cyan-500/50"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full arcade-button bg-gradient-to-r from-cyan-500 to-purple-500 group"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  {copy.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
