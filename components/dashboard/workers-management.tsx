"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Trash2, Edit, Plus, Briefcase } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Worker {
  id: number
  username: string
  cargo: string
  areatrabajo: string
  añostrabajando: number
  createdAt: string
}

export function WorkersManagement() {
  const [workers, setWorkers] = useState<Worker[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    cargo: "",
    areatrabajo: "",
    añostrabajando: "",
  })

  useEffect(() => {
    fetchWorkers()
  }, [])

  const fetchWorkers = async () => {
    try {
      const response = await fetch("/api/workers")
      const data = await response.json()
      setWorkers(data)
    } catch (error) {
      setError("Error al cargar trabajadores")
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch("/api/workers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormData({ username: "", password: "", cargo: "", areatrabajo: "", añostrabajando: "" })
        setIsDialogOpen(false)
        fetchWorkers()
      } else {
        setError(data.error)
      }
    } catch (error) {
      setError("Error al crear trabajador")
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm("¿Estás seguro de eliminar este trabajador?")) return

    try {
      const response = await fetch(`/api/workers/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        fetchWorkers()
      } else {
        setError("Error al eliminar trabajador")
      }
    } catch (error) {
      setError("Error al eliminar trabajador")
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Trabajadores</h2>
          <p className="text-muted-foreground">Administra los trabajadores del sistema</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Trabajador
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Trabajador</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username">Nombre de Usuario</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cargo">Cargo</Label>
                <Input
                  id="cargo"
                  value={formData.cargo}
                  onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="areatrabajo">Área de Trabajo</Label>
                <Input
                  id="areatrabajo"
                  value={formData.areatrabajo}
                  onChange={(e) => setFormData({ ...formData, areatrabajo: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="añostrabajando">Años Trabajando</Label>
                <Input
                  id="añostrabajando"
                  type="number"
                  value={formData.añostrabajando}
                  onChange={(e) => setFormData({ ...formData, añostrabajando: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Registrar Trabajador
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workers.map((worker) => (
          <Card key={worker.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <CardTitle className="text-sm font-medium">{worker.username}</CardTitle>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm">
                  <Edit className="w-3 h-3" />
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDelete(worker.id)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Cargo:</span> {worker.cargo}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Área:</span> {worker.areatrabajo}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Experiencia:</span> {worker.añostrabajando} años
                </div>
                <div className="text-xs text-muted-foreground">Registrado: {worker.createdAt}</div>
              </div>
              <Badge variant="secondary" className="mt-2">
                Trabajador
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {workers.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No hay trabajadores registrados</h3>
            <p className="text-muted-foreground mb-4">Registra el primer trabajador para comenzar</p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Registrar Trabajador
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
