import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos en memoria
const users = [
  { id: 1, username: "admin", password: "admin123", createdAt: "2024-01-01" },
  { id: 2, username: "cristian", password: "password123", createdAt: "2024-01-02" },
  { id: 3, username: "usuario1", password: "123456", createdAt: "2024-01-03" },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const user = users.find((u) => u.id === id)

    if (!user) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    const { password, ...safeUser } = user
    return NextResponse.json(safeUser)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener usuario" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const { username, password } = await request.json()

    const userIndex = users.findIndex((u) => u.id === id)
    if (userIndex === -1) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    if (username) users[userIndex].username = username
    if (password) users[userIndex].password = password

    const { password: _, ...safeUser } = users[userIndex]
    return NextResponse.json({
      message: "Usuario actualizado exitosamente",
      user: safeUser,
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar usuario" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const userIndex = users.findIndex((u) => u.id === id)

    if (userIndex === -1) {
      return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
    }

    users.splice(userIndex, 1)

    return NextResponse.json({
      message: "Usuario eliminado exitosamente",
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar usuario" }, { status: 500 })
  }
}
