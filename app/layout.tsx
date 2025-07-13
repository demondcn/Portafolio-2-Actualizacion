import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "CSGA - Desarrollador de Software | Arcade Portfolio",
  description:
    "Desarrollador de Software con más de 3 años de experiencia en desarrollo web y móvil, especializado en React, Next.js, React Native y soluciones E-Commerce.",
  keywords: "desarrollador, software, react, nextjs, react native, ecommerce, fullstack, arcade, gaming",
  authors: [{ name: "Cristian Stiven Guerrero Andrade" }],
  openGraph: {
    title: "CSGA - Desarrollador de Software | Arcade Portfolio",
    description: "Portafolio profesional de desarrollador de software con estilo arcade gaming.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`scroll-smooth ${orbitron.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
