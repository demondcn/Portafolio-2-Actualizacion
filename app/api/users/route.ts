import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos en memoria
const users = [
  { id: 1, username: "admin", password: "admin123", createdAt: "2024-01-01" },
  { id: 2, username: "cristian", password: "password123", createdAt: "2024-01-02" },
  { id: 3, username: "usuario1", password: "123456", createdAt: "2024-01-03" },
]

export async function GET() {
  try {
    // Retornar usuarios sin contraseñas
    const safeUsers = users.map(({ password, ...user }) => user)
    return NextResponse.json(safeUsers)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener usuarios" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    if (!username || !password) {
      return NextResponse.json({ error: "Usuario y contraseña son requeridos" }, { status: 400 })
    }

    const existingUser = users.find((u) => u.username === username)
    if (existingUser) {
      return NextResponse.json({ error: "El usuario ya existe" }, { status: 409 })
    }

    const newUser = {
      id: users.length + 1,
      username,
      password,
      createdAt: new Date().toISOString().split("T")[0],
    }

    users.push(newUser)

    return NextResponse.json({
      message: "Usuario creado exitosamente",
      user: { id: newUser.id, username: newUser.username, createdAt: newUser.createdAt },
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al crear usuario" }, { status: 500 })
  }
}
