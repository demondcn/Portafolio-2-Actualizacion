import { type NextRequest, NextResponse } from "next/server"

// Simulación de base de datos en memoria
const products = [
  {
    id: 1,
    nombreproducto: "Laptop Dell XPS 13",
    cantidad: 15,
    precio: 1200,
    categoria: "Tecnología",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    nombreproducto: "Mouse Logitech MX Master",
    cantidad: 25,
    precio: 80,
    categoria: "Accesorios",
    createdAt: "2024-01-02",
  },
  {
    id: 3,
    nombreproducto: 'Monitor Samsung 27"',
    cantidad: 8,
    precio: 300,
    categoria: "Tecnología",
    createdAt: "2024-01-03",
  },
]

export async function GET() {
  try {
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener productos" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nombreproducto, cantidad, precio, categoria } = await request.json()

    if (!nombreproducto || !cantidad) {
      return NextResponse.json({ error: "Nombre del producto y cantidad son requeridos" }, { status: 400 })
    }

    const newProduct = {
      id: products.length + 1,
      nombreproducto,
      cantidad: Number.parseInt(cantidad),
      precio: precio ? Number.parseFloat(precio) : 0,
      categoria: categoria || "General",
      createdAt: new Date().toISOString().split("T")[0],
    }

    products.push(newProduct)

    return NextResponse.json({
      message: "Producto registrado exitosamente",
      product: newProduct,
    })
  } catch (error) {
    return NextResponse.json({ error: "Error al registrar producto" }, { status: 500 })
  }
}
