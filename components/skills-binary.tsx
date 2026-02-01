"use client"

import { useEffect, useRef } from "react"

export function SkillsBinary({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let group: any
    let frameId = 0

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
      camera.position.set(0, 0, 10)

      group = new THREE.Group()
      scene.add(group)

      const makeBinarySprite = (color: string) => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")!
        const size = 256
        canvas.width = size
        canvas.height = size
        ctx.clearRect(0, 0, size, size)
        ctx.font = "bold 16px monospace"
        ctx.fillStyle = color
        const lines = 8
        for (let i = 0; i < lines; i++) {
          const row = Array.from({ length: 20 })
            .map(() => (Math.random() > 0.5 ? "1" : "0"))
            .join("")
          ctx.fillText(row, 10, 18 + i * 20)
        }
        const texture = new THREE.CanvasTexture(canvas)
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.85 })
        const sprite = new THREE.Sprite(material)
        sprite.scale.set(2.6, 1.6, 1)
        return sprite
      }

      const colors = ["#22d3ee", "#a855f7", "#f472b6", "#38bdf8"]
      const sprites: any[] = []
      for (let i = 0; i < 5; i++) {
        const sprite = makeBinarySprite(colors[i % colors.length])
        sprite.position.set(-4.5 + i * 2.2, (Math.random() - 0.5) * 2.0, (Math.random() - 0.5) * 1.2)
        sprite.userData = { dir: i % 2 === 0 ? 1 : -1 }
        group.add(sprite)
        sprites.push(sprite)
      }

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.filter = "drop-shadow(0 0 16px rgba(34,211,238,0.35))"
      mount.appendChild(renderer.domElement)

      const onResize = () => {
        if (!mount || !renderer || !camera) return
        const w = mount.clientWidth
        const h = mount.clientHeight
        renderer.setSize(w, h)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      window.addEventListener("resize", onResize)

      const animate = () => {
        frameId = requestAnimationFrame(animate)
        sprites.forEach((s, i) => {
          s.position.x += s.userData.dir * 0.01
          if (s.position.x > 5 || s.position.x < -5) s.userData.dir *= -1
          s.position.y = Math.sin(performance.now() * 0.001 + i) * 0.9
        })
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        window.removeEventListener("resize", onResize)
      }
    }

    let cleanup: (() => void) | undefined
    init().then((fn) => {
      cleanup = fn
    })

    return () => {
      if (cleanup) cleanup()
      if (frameId) cancelAnimationFrame(frameId)
      if (renderer) {
        renderer.dispose()
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement)
        }
      }
      if (scene && group) {
        scene.remove(group)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
