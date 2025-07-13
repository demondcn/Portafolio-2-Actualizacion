import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos en memoria
const workers = [
  {
    id: 1,
    username: "juan_perez",
    password: "worker123",
    cargo: "Desarrollador Frontend",
    areatrabajo: "Tecnología",
    añostrabajando: 3,
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    username: "maria_garcia",
    password: "worker456",
    cargo: "Diseñadora UX/UI",
    areatrabajo: "Diseño",
    añostrabajando: 2,
    createdAt: "2024-01-02",
  },
]

export async function GET() {
  try {
    // Retornar trabajadores sin contraseñas
    const safeWorkers = workers.map(({ password, ...worker }) => worker)
    return NextResponse.json(safeWorkers)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener trabajadores" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { username, password, cargo, areatrabajo, añostrabajando } = await request.json()

    if (!username || !password || !cargo || !areatrabajo || !añostrabajando) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    const existingWorker = workers.find((w) => w.username === username)
    if (existingWorker) {
      return NextResponse.json({ error: "El trabajador ya existe" }, { status: 409 })
    }

    const newWorker = {
      id: workers.length + 1,
      username,
      password,
      cargo,
      areatrabajo,
      añostrabajando: Number.parseInt(añostrabajando),
      createdAt: new Date().toISOString().split("T")[0],
    }

    workers.push(newWorker)

    const { password: _, ...safeWorker } = newWorker
    return NextResponse.json({
      message: "Trabajador registrado exitosamente",
      worker: safeWorker,
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al registrar trabajador" }, { status: 500 })
  }
}
