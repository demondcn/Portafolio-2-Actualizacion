import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos en memoria
const users = [
  { id: 1, username: "admin", password: "admin123" },
  { id: 2, username: "cristian", password: "password123" },
]

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json()

    // Validar datos
    if (!username || !password) {
      return NextResponse.json({ error: "Usuario y contraseña son requeridos" }, { status: 400 })
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "La contraseña debe tener al menos 6 caracteres" }, { status: 400 })
    }

    // Verificar si el usuario ya existe
    const existingUser = users.find((u) => u.username === username)
    if (existingUser) {
      return NextResponse.json({ error: "El usuario ya existe" }, { status: 409 })
    }

    // Crear nuevo usuario
    const newUser = {
      id: users.length + 1,
      username,
      password,
    }

    users.push(newUser)

    return NextResponse.json({
      message: "Usuario registrado exitosamente",
      user: { id: newUser.id, username: newUser.username },
    })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
