"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Globe, Zap, Bot, Cpu, Monitor, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "LENGUAJES DE PROGRAMACIÓN",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 90, icon: "🟨" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "C++", level: 75, icon: "⚡" },
      { name: "HTML/CSS", level: 95, icon: "🌐" },
    ],
  },
  {
    title: "FRAMEWORKS & LIBRERÍAS",
    icon: Layers,
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "Next.js", level: 85, icon: "▲" },
      { name: "React Native", level: 80, icon: "📱" },
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express.js", level: 80, icon: "🚀" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
    ],
  },
  {
    title: "BASES DE DATOS",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85, icon: "🐘" },
      { name: "MySQL", level: 80, icon: "🗄️" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "SQLite", level: 80, icon: "💾" },
      { name: "Neon", level: 85, icon: "⚡" },
      { name: "Supabase", level: 80, icon: "🔥" },
    ],
  },
  {
    title: "HERRAMIENTAS & TECNOLOGÍAS",
    icon: Monitor,
    skills: [
      { name: "Git & GitHub", level: 90, icon: "🔧" },
      { name: "Vercel", level: 85, icon: "▲" },
      { name: "Docker", level: 70, icon: "🐳" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Android Studio", level: 80, icon: "🤖" },
      { name: "Figma", level: 75, icon: "🎨" },
    ],
  },
  {
    title: "ESPECIALIDADES",
    icon: Cpu,
    skills: [
      { name: "Desarrollo Full-Stack", level: 90, icon: "🔄" },
      { name: "E-Commerce", level: 85, icon: "🛒" },
      { name: "APIs REST", level: 85, icon: "🔗" },
      { name: "Responsive Design", level: 90, icon: "📱" },
      { name: "IoT Development", level: 75, icon: "🌐" },
      { name: "AI Integration", level: 70, icon: "🤖" },
    ],
  },
]

const softSkills = [
  "Resolución de Problemas",
  "Trabajo en Equipo",
  "Comunicación Efectiva",
  "Aprendizaje Continuo",
  "Pensamiento Crítico",
  "Gestión del Tiempo",
  "Adaptabilidad",
  "Liderazgo",
]

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-cyan-400 animate-pulse" />
            <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
              HABILIDADES
            </Badge>
            <Bot className="w-6 h-6 text-purple-400 animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-6">
            ARSENAL TECNOLÓGICO
          </h2>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto">
            Dominio de tecnologías modernas y herramientas de desarrollo para crear soluciones innovadoras y escalables.
          </p>
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
                        <span className="text-lg">{skill.icon}</span>
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
        <Card className="arcade-card bg-gradient-to-r from-slate-900/80 to-purple-900/50">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <CardTitle className="text-xl font-orbitron text-purple-400">HABILIDADES BLANDAS</CardTitle>
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
                10+
              </div>
              <p className="text-purple-400 font-orbitron text-sm">TECNOLOGÍAS DOMINADAS</p>
            </CardContent>
          </Card>
          <Card className="arcade-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                3+
              </div>
              <p className="text-purple-400 font-orbitron text-sm">AÑOS DE EXPERIENCIA</p>
            </CardContent>
          </Card>
          <Card className="arcade-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-2">
                15+
              </div>
              <p className="text-purple-400 font-orbitron text-sm">PROYECTOS COMPLETADOS</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
