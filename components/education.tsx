import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"

const education = [
  {
    institution: "Universidad de Cundinamarca",
    degree: "Tecnólogo en Desarrollo de Software",
    location: "Soacha, Colombia",
    period: "Marzo 2025",
    honors: "Mención de honor en Desarrollo de Software con énfasis en Ciencia de Datos",
    type: "Educación Superior",
  },
]

const certifications = [
  "Curso Profesional de Git y GitHub",
  "Curso de Fundamentos de Bases de Datos",
  "Curso de Introducción a la Terminal y Línea de Comandos",
  "Curso de Java SE Orientado a Objetos",
  "Curso de JavaScript Desde Cero",
  "Curso de Python: Comprehensions, Funciones y Manejo de Errores",
  "Curso de Frontend Developer",
  "Curso de Fundamentos de Python",
  "Curso de Introducción a Java SE",
]

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Educación
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Formación Académica</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mi formación académica y certificaciones profesionales que respaldan mi experiencia técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Educación Superior */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Educación Superior
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

          {/* Certificaciones */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Certificaciones Platzi
            </h3>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Cursos Profesionales</CardTitle>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Febrero 2024
                </div>
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remoto
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

        {/* Habilidades Adicionales */}
        <div className="mt-16">
          <Card className="bg-background">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Competencias Adicionales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Ciencia de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Análisis de desempeño empresarial y visualización de datos
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Metodologías Ágiles</h4>
                  <p className="text-sm text-muted-foreground">Experiencia en flujos de trabajo colaborativos y Git</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Idiomas</h4>
                  <p className="text-sm text-muted-foreground">Español nativo, comprensión lectora técnica en inglés</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
