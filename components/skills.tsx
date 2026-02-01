"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Globe, Zap, Bot, Cpu, Monitor, Layers } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export function Skills() {
  const { lang } = useLanguage()

  const skillCategories =
    lang === "es"
      ? [
          {
            title: "LENGUAJES DE PROGRAMACION",
            icon: Code2,
            skills: [
              { name: "JavaScript", level: 90, icon: "JS" },
              { name: "Python", level: 85, icon: "PY" },
              { name: "Java", level: 80, icon: "JV" },
              { name: "TypeScript", level: 85, icon: "TS" },
              { name: "C++", level: 75, icon: "C++" },
              { name: "HTML/CSS", level: 95, icon: "HTML" },
            ],
          },
          {
            title: "FRAMEWORKS Y LIBRERIAS",
            icon: Layers,
            skills: [
              { name: "React", level: 90, icon: "RE" },
              { name: "Next.js", level: 85, icon: "NX" },
              { name: "React Native", level: 80, icon: "RN" },
              { name: "Node.js", level: 85, icon: "ND" },
              { name: "Express.js", level: 80, icon: "EX" },
              { name: "Tailwind CSS", level: 90, icon: "TW" },
            ],
          },
          {
            title: "BASES DE DATOS",
            icon: Database,
            skills: [
              { name: "PostgreSQL", level: 85, icon: "PG" },
              { name: "MySQL", level: 80, icon: "MY" },
              { name: "MongoDB", level: 75, icon: "MG" },
              { name: "SQLite", level: 80, icon: "SQ" },
              { name: "Neon", level: 85, icon: "NE" },
              { name: "Supabase", level: 80, icon: "SB" },
            ],
          },
          {
            title: "HERRAMIENTAS Y TECNOLOGIAS",
            icon: Monitor,
            skills: [
              { name: "Git & GitHub", level: 90, icon: "GIT" },
              { name: "Vercel", level: 85, icon: "VC" },
              { name: "Docker", level: 70, icon: "DK" },
              { name: "VS Code", level: 95, icon: "VS" },
              { name: "Android Studio", level: 80, icon: "AS" },
              { name: "Figma", level: 75, icon: "FG" },
            ],
          },
          {
            title: "ESPECIALIDADES",
            icon: Cpu,
            skills: [
              { name: "Desarrollo Full-Stack", level: 90, icon: "FS" },
              { name: "E-Commerce", level: 85, icon: "EC" },
              { name: "APIs REST", level: 85, icon: "API" },
              { name: "Responsive Design", level: 90, icon: "RWD" },
              { name: "IoT Development", level: 75, icon: "IOT" },
              { name: "AI Integration", level: 70, icon: "AI" },
            ],
          },
        ]
      : [
          {
            title: "PROGRAMMING LANGUAGES",
            icon: Code2,
            skills: [
              { name: "JavaScript", level: 90, icon: "JS" },
              { name: "Python", level: 85, icon: "PY" },
              { name: "Java", level: 80, icon: "JV" },
              { name: "TypeScript", level: 85, icon: "TS" },
              { name: "C++", level: 75, icon: "C++" },
              { name: "HTML/CSS", level: 95, icon: "HTML" },
            ],
          },
          {
            title: "FRAMEWORKS AND LIBRARIES",
            icon: Layers,
            skills: [
              { name: "React", level: 90, icon: "RE" },
              { name: "Next.js", level: 85, icon: "NX" },
              { name: "React Native", level: 80, icon: "RN" },
              { name: "Node.js", level: 85, icon: "ND" },
              { name: "Express.js", level: 80, icon: "EX" },
              { name: "Tailwind CSS", level: 90, icon: "TW" },
            ],
          },
          {
            title: "DATABASES",
            icon: Database,
            skills: [
              { name: "PostgreSQL", level: 85, icon: "PG" },
              { name: "MySQL", level: 80, icon: "MY" },
              { name: "MongoDB", level: 75, icon: "MG" },
              { name: "SQLite", level: 80, icon: "SQ" },
              { name: "Neon", level: 85, icon: "NE" },
              { name: "Supabase", level: 80, icon: "SB" },
            ],
          },
          {
            title: "TOOLS AND TECHNOLOGIES",
            icon: Monitor,
            skills: [
              { name: "Git & GitHub", level: 90, icon: "GIT" },
              { name: "Vercel", level: 85, icon: "VC" },
              { name: "Docker", level: 70, icon: "DK" },
              { name: "VS Code", level: 95, icon: "VS" },
              { name: "Android Studio", level: 80, icon: "AS" },
              { name: "Figma", level: 75, icon: "FG" },
            ],
          },
          {
            title: "SPECIALTIES",
            icon: Cpu,
            skills: [
              { name: "Full-Stack Development", level: 90, icon: "FS" },
              { name: "E-Commerce", level: 85, icon: "EC" },
              { name: "REST APIs", level: 85, icon: "API" },
              { name: "Responsive Design", level: 90, icon: "RWD" },
              { name: "IoT Development", level: 75, icon: "IOT" },
              { name: "AI Integration", level: 70, icon: "AI" },
            ],
          },
        ]

  const softSkills =
    lang === "es"
      ? [
          "Resolucion de Problemas",
          "Trabajo en Equipo",
          "Comunicacion Efectiva",
          "Aprendizaje Continuo",
          "Pensamiento Critico",
          "Gestion del Tiempo",
          "Adaptabilidad",
          "Liderazgo",
          "Orientacion a Resultados",
          "Atencion al Detalle",
          "Proactividad",
          "Empatia",
          "Trabajo bajo Presion",
          "Organizacion",
          "Creatividad",
          "Pensamiento Analitico",
        ]
      : [
          "Problem Solving",
          "Teamwork",
          "Effective Communication",
          "Continuous Learning",
          "Critical Thinking",
          "Time Management",
          "Adaptability",
          "Leadership",
          "Results Oriented",
          "Attention to Detail",
          "Proactivity",
          "Empathy",
          "Work Under Pressure",
          "Organization",
          "Creativity",
          "Analytical Thinking",
        ]

  const copy =
    lang === "es"
      ? {
          badge: "HABILIDADES",
          title: "ARSENAL TECNOLOGICO",
          subtitle: "Dominio de tecnologias modernas y herramientas de desarrollo para crear soluciones innovadoras y escalables.",
          softTitle: "HABILIDADES BLANDAS",
          statsTech: "TECNOLOGIAS DOMINADAS",
          statsYears: "ANOS DE EXPERIENCIA",
          statsProjects: "PROYECTOS COMPLETADOS",
        }
      : {
          badge: "SKILLS",
          title: "TECH ARSENAL",
          subtitle: "Mastery of modern technologies and tools to build innovative, scalable solutions.",
          softTitle: "SOFT SKILLS",
          statsTech: "TECHNOLOGIES MASTERED",
          statsYears: "YEARS OF EXPERIENCE",
          statsProjects: "PROJECTS COMPLETED",
        }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-8 top-10 h-14 w-14 rounded-full border border-cyan-400/30"></div>
        <div className="absolute right-10 top-16 h-10 w-20 rounded-full border border-purple-400/30"></div>
        <div className="absolute left-1/2 top-14 h-1 w-48 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute left-1/3 bottom-20 h-24 w-24 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-16 h-20 w-20 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute left-12 top-32 h-8 w-28 rounded-full border border-cyan-400/20"></div>
        <div className="absolute right-12 top-36 h-12 w-12 rounded-md border border-purple-400/20 rotate-12"></div>
        <div className="absolute left-1/2 bottom-10 h-1 w-56 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
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

        {/* Technical Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <category.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg font-orbitron text-purple-400">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-orbitron text-purple-400">{skill.icon}</span>
                        <span className="text-cyan-300 font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-orbitron text-xs">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="arcade-progress h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <Card className="arcade-card bg-gradient-to-r from-slate-900/80 to-purple-900/50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-6 top-6 h-16 w-16 rounded-full bg-cyan-500/10 blur-2xl"></div>
            <div className="absolute right-8 bottom-6 h-20 w-20 rounded-full bg-purple-500/10 blur-2xl"></div>
            <div className="absolute left-1/2 top-8 h-1 w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            <div className="absolute left-10 bottom-8 h-8 w-24 rounded-full border border-cyan-400/20"></div>
            <div className="absolute right-12 top-8 h-10 w-10 rounded-md border border-purple-400/20 rotate-12"></div>
          </div>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <CardTitle className="text-xl font-orbitron text-purple-400">{copy.softTitle}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-lg arcade-border hover:glow-card transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-300 text-sm font-orbitron">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="arcade-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                30+
              </div>
              <p className="text-purple-400 font-orbitron text-sm">{copy.statsTech}</p>
            </CardContent>
          </Card>
          <Card className="arcade-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                3+
              </div>
              <p className="text-purple-400 font-orbitron text-sm">{copy.statsYears}</p>
            </CardContent>
          </Card>
          <Card className="arcade-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                4+
              </div>
              <p className="text-purple-400 font-orbitron text-sm">{copy.statsProjects}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
