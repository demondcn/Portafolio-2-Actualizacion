import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Download, Upload, MapPin, FileText, FolderDown, Zap, Bot } from "lucide-react"
import Link from "next/link"

const projectFeatures = [
  {
    icon: FileText,
    title: "Recepción de instrucciones",
    description:
      "Los usuarios interactúan con una aplicación Python específicamente diseñada para el robot. En esta aplicación, los usuarios ingresan información como la distancia a la que desean que el robot recoja los objetos, el punto de entrega, la cantidad de peso y el peso máximo que puede llevar.",
  },
  {
    icon: FolderDown,
    title: "Procesamiento de instrucciones",
    description:
      "La aplicación procesa las instrucciones del usuario y las envía al robot a través de una conexión inalámbrica. El robot recibe y decodifica estas instrucciones.",
  },
  {
    icon: MapPin,
    title: "Movilidad y navegación",
    description:
      "El robot utiliza sensores integrados, como ultrasonidos, infrarrojos o cámaras, para detectar obstáculos en su entorno. Utiliza esta información para planificar su ruta y evitar colisiones mientras se desplaza hacia el punto de recogida.",
  },
  {
    icon: Download,
    title: "Recogida de objetos",
    description:
      "Una vez que llega al punto de recogida, el robot recoge los objetos de acuerdo con las especificaciones proporcionadas por el usuario. Puede cargar varios objetos en su compartimento de carga.",
  },
  {
    icon: MapPin,
    title: "Navegación al punto de entrega",
    description:
      "El robot calcula la ruta más eficiente para llegar al punto de entrega, nuevamente evitando obstáculos en el camino.",
  },
  {
    icon: Upload,
    title: "Entrega de objetos",
    description: "En el punto de entrega, el robot descarga los objetos de manera segura y completa la entrega.",
  },
]

const applications = [
  {
    title: "Entrega de suministros en oficinas y almacenes",
    description:
      "El robot puede llevar documentos, materiales de oficina, productos o suministros de un lugar a otro dentro de un edificio o un almacén.",
  },
  {
    title: "Servicio de habitaciones en hoteles",
    description:
      "En el sector hotelero, el robot puede entregar alimentos, bebidas u otros servicios de habitaciones a los huéspedes.",
  },
  {
    title: "Asistencia médica en hospitales",
    description:
      "En hospitales y centros de atención médica, el robot puede entregar medicamentos o suministros a pacientes o personal médico.",
  },
  {
    title: "Automatización de procesos industriales",
    description:
      "Las fábricas y almacenes pueden utilizar el robot para automatizar la distribución de componentes o productos.",
  },
]

const conclusions = [
  {
    title: "Eficiencia en la Distribución",
    description:
      "El robot de transporte ha demostrado ser una solución eficiente para la distribución de objetos en diversos entornos. Su capacidad para moverse de manera autónoma y evitar obstáculos ha mejorado significativamente la velocidad y la precisión de las entregas.",
  },
  {
    title: "Automatización de Procesos",
    description:
      "La capacidad del robot para funcionar de manera autónoma ha permitido la automatización de procesos logísticos en diversas industrias. Esto ha llevado a una reducción de los tiempos de espera y a una mayor eficiencia en la gestión de la carga y la distribución.",
  },
  {
    title: "Seguridad y Confiabilidad",
    description:
      "Se han implementado medidas de seguridad efectivas en el robot para prevenir colisiones y garantizar un funcionamiento seguro en entornos con personas. Las pruebas exhaustivas han demostrado la confiabilidad del robot en una variedad de situaciones.",
  },
  {
    title: "Versatilidad de Aplicación",
    description:
      "El robot ha encontrado aplicaciones en una amplia gama de entornos, desde oficinas y almacenes hasta hospitales y hoteles. Su versatilidad lo hace adecuado para satisfacer diversas necesidades de distribución y entrega.",
  },
]

export default function TransportadorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="arcade-grid"></div>

      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-orbitron"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              VOLVER AL PORTAFOLIO
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="w-8 h-8 text-cyan-400 animate-pulse" />
              <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-orbitron">
                PROYECTO IoT
              </Badge>
              <Zap className="w-8 h-8 text-purple-400 animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text mb-4">
              TRANSPORTADOR DE OBJETOS
            </h1>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
              Robot autónomo diseñado para facilitar la transportación de objetos de un lugar a otro de manera eficiente
              y segura.
            </p>
          </div>
        </div>
      </header>

      {/* Video Hero Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto arcade-card">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-purple-900 rounded-lg flex items-center justify-center mb-6 border border-cyan-500/30">
                <div className="text-center">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
                  <p className="text-cyan-300 font-orbitron">VIDEO DEMOSTRATIVO DEL ROBOT</p>
                  <p className="text-sm text-purple-300 mt-2 font-orbitron">(PLACEHOLDER PARA EL VIDEO ORIGINAL)</p>
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500">
                  <Play className="w-4 h-4 mr-2" />
                  VER DEMOSTRACIÓN
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              ¿DE QUÉ TRATA?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="arcade-card">
                <CardContent className="p-6">
                  <p className="text-cyan-300 leading-relaxed mb-6">
                    El robot de transporte es un dispositivo autónomo diseñado para facilitar la transportación de
                    objetos de un lugar a otro de manera eficiente y segura. Este robot está equipado con una serie de
                    sensores, motores y un sistema de comunicación que le permite recibir instrucciones desde una
                    aplicación Python.
                  </p>
                  <p className="text-cyan-300 leading-relaxed">
                    Su estructura y movilidad están diseñadas para adaptarse a una variedad de entornos, desde
                    interiores hasta exteriores. El robot cuenta con un compartimento de carga que puede acomodar una
                    variedad de objetos, y su capacidad de carga es ajustable según las necesidades de los usuarios.
                  </p>
                </CardContent>
              </Card>
              <Card className="arcade-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 font-orbitron text-purple-400">PROPÓSITO DEL ROBOT</h3>
                  <p className="text-cyan-300 leading-relaxed mb-4">
                    El propósito principal del robot de transporte es ofrecer una solución eficiente y conveniente para
                    la distribución de objetos en diferentes entornos.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm text-cyan-300">Entregas a corta distancia</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm text-cyan-300">Automatización de la logística</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm text-cyan-300">Asistencia personalizada</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                      <span className="text-sm text-cyan-300">Minimizar la interacción humana</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionamiento Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                FUNCIONAMIENTO DEL ROBOT
              </h2>
              <p className="text-cyan-300 max-w-3xl mx-auto">
                El robot de transporte es un dispositivo autónomo que se basa en una combinación de hardware y software
                para llevar a cabo sus tareas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectFeatures.map((feature, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-2 border border-cyan-500/30">
                      <feature.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg font-orbitron text-purple-400">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-cyan-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              APLICACIONES DEL ROBOT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-orbitron text-purple-400">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-300">{app.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conclusions Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
              CONCLUSIONES DEL PROYECTO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {conclusions.map((conclusion, index) => (
                <Card key={index} className="arcade-card hover:glow-card transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-orbitron text-purple-400">{conclusion.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-cyan-300">{conclusion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center arcade-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 font-orbitron text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
                ¿INTERESADO EN ESTE PROYECTO?
              </h3>
              <p className="text-cyan-300 mb-6">
                Si quieres conocer más detalles técnicos o discutir proyectos similares, no dudes en contactarme.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="arcade-button bg-gradient-to-r from-cyan-500 to-purple-500">
                  <Link href="/#contact">CONTACTAR</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="arcade-button-outline border-cyan-500 text-cyan-400 bg-transparent"
                >
                  <Link href="/">VER MÁS PROYECTOS</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
