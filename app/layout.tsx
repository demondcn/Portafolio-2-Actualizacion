import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "CSGA - Desarrollador de Software | Arcade Portfolio",
  description:
    "Desarrollador de Software con mas de 3 anos de experiencia en desarrollo web y movil, especializado en React, Next.js, React Native y soluciones E-Commerce.",
  keywords: "desarrollador, software, react, nextjs, react native, ecommerce, fullstack, arcade, gaming",
  authors: [{ name: "Cristian Stiven Guerrero Andrade" }],
  icons: {
    icon: "/icon.svg",
  },
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
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}

