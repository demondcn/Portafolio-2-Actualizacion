"use client"

import { useEffect, useRef } from "react"

export function SkillsOrbit({ className }: { className?: string }) {
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

      const ambient = new THREE.AmbientLight(0xffffff, 0.9)
      scene.add(ambient)
      const point = new THREE.PointLight(0x22d3ee, 1.2, 50)
      point.position.set(5, 5, 5)
      scene.add(point)

      group = new THREE.Group()
      scene.add(group)

      const items = [
        { name: "Python", color: "#22c55e" },
        { name: "C#", color: "#8b5cf6" },
        { name: "Java", color: "#f97316" },
        { name: "Node.js", color: "#10b981" },
      ]

      const makeTextSprite = (text: string, color: string) => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")!
        const size = 256
        canvas.width = size
        canvas.height = size
        ctx.clearRect(0, 0, size, size)
        ctx.font = "bold 40px Orbitron, monospace"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = color
        ctx.shadowColor = color
        ctx.shadowBlur = 18
        ctx.fillText(text, size / 2, size / 2)
        const texture = new THREE.CanvasTexture(canvas)
        const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
        const sprite = new THREE.Sprite(material)
        sprite.scale.set(2.4, 1.2, 1)
        return sprite
      }

      const sprites: any[] = []
      items.forEach((item, i) => {
        const sprite = makeTextSprite(item.name, item.color)
        sprite.position.set(-4 + i * 2.6, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 1.5)
        sprite.userData = { dir: i % 2 === 0 ? 1 : -1 }
        group.add(sprite)
        sprites.push(sprite)
      })

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.filter = "drop-shadow(0 0 18px rgba(34,211,238,0.35))"
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
        const t = performance.now() * 0.001
        sprites.forEach((s, i) => {
          s.position.x += s.userData.dir * 0.01
          if (s.position.x > 5 || s.position.x < -5) s.userData.dir *= -1
          s.position.y = Math.sin(t + i) * 0.7
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
