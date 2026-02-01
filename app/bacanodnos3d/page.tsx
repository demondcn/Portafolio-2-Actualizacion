"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Bacanodnos3dPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.25),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.12)_1px,transparent_1px)] bg-[size:60px_60px] opacity-60"></div>

        <div className="relative z-10 container mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-12">
            <div className="text-xl font-orbitron text-cyan-300">BACANODNOS3D</div>
            <Button variant="outline" asChild className="border-cyan-500/50 text-cyan-300 bg-transparent">
              <Link href="/">Volver al portafolio</Link>
            </Button>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text">
              Bacanodnos3D
            </h1>
            <p className="mt-4 text-lg text-cyan-200/90">
              Pagina independiente para experimentar con ideas 3D, visuales y experiencias interactivas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Three.js", "WebGL", "Shaders", "UX", "Motion"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-sm text-purple-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-6">
              <h2 className="font-orbitron text-cyan-300 text-xl mb-2">Experimentos</h2>
              <p className="text-cyan-200/80">
                Espacio para demos, escenas y prototipos con enfoque en performance y estilo visual.
              </p>
            </div>
            <div className="rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6">
              <h2 className="font-orbitron text-purple-300 text-xl mb-2">Laboratorio</h2>
              <p className="text-cyan-200/80">
                Pruebas de materiales, iluminacion, animaciones y UI tridimensional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
