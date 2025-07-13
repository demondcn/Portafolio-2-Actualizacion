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

    // Buscar usuario
    const user = users.find((u) => u.username === username && u.password === password)

    if (!user) {
      return NextResponse.json({ error: "Credenciales inválidas" }, { status: 401 })
    }

    // Generar token simple (en producción usar JWT)
    const token = `token_${user.id}_${Date.now()}`

    return NextResponse.json({
      message: "Login exitoso",
      token,
      user: { id: user.id, username: user.username },
    })
  } catch (error) {
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
