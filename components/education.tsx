"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { EducationCap } from "@/components/education-cap"

export function Education() {
  const { lang } = useLanguage()

  const education =
    lang === "es"
      ? [
          {
            institution: "Universidad de Cundinamarca",
            degree: "Tecnologo en Desarrollo de Software",
            location: "Soacha, Colombia",
            period: "Marzo 2025",
            honors: "Mencion de honor en Desarrollo de Software con enfasis en Ciencia de Datos",
            type: "Educacion Superior",
          },
        ]
      : [
          {
            institution: "Cundinamarca University",
            degree: "Software Development Technologist",
            location: "Soacha, Colombia",
            period: "March 2025",
            honors: "Honors in Software Development with emphasis on Data Science",
            type: "Higher Education",
          },
        ]

  const certifications =
    lang === "es"
      ? [
          "Curso Profesional de Git y GitHub",
          "Curso de Fundamentos de Bases de Datos",
          "Curso de Introduccion a la Terminal y Linea de Comandos",
          "Curso de Java SE Orientado a Objetos",
          "Curso de JavaScript Desde Cero",
          "Curso de Python: Comprehensions, Funciones y Manejo de Errores",
          "Curso de Frontend Developer",
          "Curso de Fundamentos de Python",
          "Curso de Introduccion a Java SE",
        ]
      : [
          "Professional Git and GitHub Course",
          "Database Fundamentals Course",
          "Terminal and Command Line Fundamentals",
          "Java SE Object-Oriented Course",
          "JavaScript From Scratch",
          "Python: Comprehensions, Functions, and Error Handling",
          "Frontend Developer Course",
          "Python Fundamentals Course",
          "Introduction to Java SE",
        ]

  const copy =
    lang === "es"
      ? {
          badge: "Educacion",
          title: "Formacion Academica",
          subtitle: "Mi formacion academica y certificaciones profesionales que respaldan mi experiencia tecnica.",
          higherEd: "Educacion Superior",
          certifications: "Certificaciones Platzi",
          courses: "Cursos Profesionales",
          date: "Febrero 2024",
          location: "Remoto",
          extraTitle: "Competencias Adicionales",
          extraDataTitle: "Ciencia de Datos",
          extraDataDesc: "Analisis de desempeno empresarial y visualizacion de datos",
          extraAgileTitle: "Metodologias Agiles",
          extraAgileDesc: "Experiencia en flujos de trabajo colaborativos y Git",
          extraLangTitle: "Idiomas",
          extraLangDesc: "Espanol nativo, comprension lectora tecnica en ingles",
        }
      : {
          badge: "Education",
          title: "Academic Background",
          subtitle: "My academic training and professional certifications that support my technical experience.",
          higherEd: "Higher Education",
          certifications: "Platzi Certifications",
          courses: "Professional Courses",
          date: "February 2024",
          location: "Remote",
          extraTitle: "Additional Competencies",
          extraDataTitle: "Data Science",
          extraDataDesc: "Business performance analysis and data visualization",
          extraAgileTitle: "Agile Methodologies",
          extraAgileDesc: "Experience with collaborative workflows and Git",
          extraLangTitle: "Languages",
          extraLangDesc: "Native Spanish, technical reading comprehension in English",
        }

  return (
    <section id="education" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none overflow-hidden sm:h-48 lg:h-56">
        <EducationCap className="absolute left-6 top-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px] opacity-90" />
        <EducationCap className="absolute right-6 top-0 h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] lg:h-[260px] lg:w-[260px] opacity-90" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            {copy.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">{copy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Higher Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              {copy.higherEd}
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                      <p className="text-primary font-semibold mt-1">{edu.institution}</p>
                    </div>
                    <Badge variant="secondary">{edu.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                    {edu.honors && (
                      <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                        <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground font-medium">{edu.honors}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              {copy.certifications}
            </h3>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{copy.courses}</CardTitle>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {copy.date}
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {copy.location}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-2">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-16">
          <Card className="bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{copy.extraTitle}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{copy.extraDataTitle}</h4>
                  <p className="text-sm text-muted-foreground">{copy.extraDataDesc}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{copy.extraAgileTitle}</h4>
                  <p className="text-sm text-muted-foreground">{copy.extraAgileDesc}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{copy.extraLangTitle}</h4>
                  <p className="text-sm text-muted-foreground">{copy.extraLangDesc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
