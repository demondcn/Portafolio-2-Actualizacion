"use client"

import { useEffect, useRef } from "react"

export function AboutSymbols({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let group: any
    let frameId = 0

    const makeTextSprite = (THREE: any, text: string, color: string) => {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")!
      const size = 256
      canvas.width = size
      canvas.height = size
      ctx.clearRect(0, 0, size, size)
      ctx.font = "bold 96px Orbitron, monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = color
      ctx.shadowColor = color
      ctx.shadowBlur = 20
      ctx.fillText(text, size / 2, size / 2)
      const texture = new THREE.CanvasTexture(canvas)
      const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
      const sprite = new THREE.Sprite(material)
      sprite.scale.set(1.6, 1.6, 1.6)
      return sprite
    }

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
      camera.position.set(0, 0, 10)

      const ambient = new THREE.AmbientLight(0xffffff, 0.9)
      scene.add(ambient)

      group = new THREE.Group()
      scene.add(group)

      const symbols = ["<>", "//", "()", "#", "{}", ";;", "=>", "[]", "++", "--", "::", "&&", "||", "!=", "=="]
      const colors = ["#22d3ee", "#a855f7", "#f472b6", "#38bdf8", "#5eead4", "#c084fc"]
      const sprites: any[] = []
      for (let i = 0; i < 6; i++) {
        const sym = symbols[i % symbols.length]
        const sprite = makeTextSprite(THREE, sym, colors[i % colors.length])
        sprite.position.set((i - 2.5) * 1.6, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)
        sprite.userData = {
          vel: new THREE.Vector3((Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, 0),
        }
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

      const bounds = { x: 4.5, y: 2.2 }

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
        sprites.forEach((s) => {
          s.position.add(s.userData.vel)
          if (Math.abs(s.position.x) > bounds.x) s.userData.vel.x *= -1
          if (Math.abs(s.position.y) > bounds.y) s.userData.vel.y *= -1
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
