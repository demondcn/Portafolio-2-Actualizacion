import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Package, Briefcase, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"

const stats = [
  {
    title: "Usuarios Registrados",
    value: "3",
    icon: Users,
    description: "Usuarios activos en el sistema",
  },
  {
    title: "Trabajadores",
    value: "2",
    icon: Briefcase,
    description: "Empleados registrados",
  },
  {
    title: "Productos",
    value: "3",
    icon: Package,
    description: "Items en inventario",
  },
  {
    title: "Proyectos Activos",
    value: "6",
    icon: BarChart3,
    description: "Proyectos en desarrollo",
  },
]

const recentProjects = [
  {
    name: "Emprex360",
    status: "Activo",
    type: "Web App",
    link: "https://emprex360.vercel.app",
  },
  {
    name: "Transportador de Objetos",
    status: "Completado",
    type: "IoT Project",
    detailPage: "/projects/transportador",
  },
  {
    name: "Chocontano Restaurante",
    status: "Completado",
    type: "Mobile App",
  },
  {
    name: "Charles Barber",
    status: "Completado",
    type: "Android App",
  },
]

export function ProjectsOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Resumen del Sistema</h2>
        <p className="text-muted-foreground">Vista general de la actividad y estadísticas</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Proyectos Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={project.status === "Activo" ? "default" : "secondary"}>{project.status}</Badge>
                  {project.link && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {project.detailPage && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.detailPage}>
                        <Eye className="w-3 h-3" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col bg-transparent" asChild>
              <Link href="/projects/transportador">
                <Eye className="w-6 h-6 mb-2" />
                Ver Proyecto IoT
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col bg-transparent" asChild>
              <a href="https://emprex360.vercel.app" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-6 h-6 mb-2" />
                Visitar Emprex360
              </a>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col bg-transparent" asChild>
              <Link href="/">
                <BarChart3 className="w-6 h-6 mb-2" />
                Ver Portafolio
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
