"use client"

import { useEffect, useRef } from "react"

export function ExperienceOrbs({
  className,
  count = 4,
}: {
  className?: string
  count?: number
}) {
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
      point.position.set(6, 6, 6)
      scene.add(point)

      group = new THREE.Group()
      scene.add(group)

      const colors = [0x22d3ee, 0xa855f7, 0xf472b6, 0x38bdf8, 0x5eead4]
      const spheres: any[] = []
      const sprites: any[] = []
      const makeBinaryTexture = () => {
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")!
        const size = 256
        canvas.width = size
        canvas.height = size
        ctx.clearRect(0, 0, size, size)
        ctx.font = "bold 24px monospace"
        ctx.fillStyle = "rgba(140, 255, 255, 0.85)"
        const lines = 12
        for (let i = 0; i < lines; i++) {
          const row = Array.from({ length: 20 })
            .map(() => (Math.random() > 0.5 ? "1" : "0"))
            .join("")
          ctx.fillText(row, 8, 20 + i * 20)
        }
        const texture = new THREE.CanvasTexture(canvas)
        texture.wrapS = THREE.RepeatWrapping
        texture.wrapT = THREE.RepeatWrapping
        texture.repeat.set(2, 2)
        return texture
      }

      for (let i = 0; i < count; i++) {
        const geo = new THREE.SphereGeometry(0.35, 32, 32)
        const binTex = makeBinaryTexture()
        const mat = new THREE.MeshStandardMaterial({
          color: colors[i % colors.length],
          emissive: colors[i % colors.length],
          emissiveIntensity: 0.6,
          transparent: true,
          opacity: 0.7,
          map: binTex,
        })
        const mesh = new THREE.Mesh(geo, mat)
        mesh.position.set(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 6,
        )
        group.add(mesh)
        spheres.push(mesh)
      }

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.filter = "blur(0.1px) drop-shadow(0 0 18px rgba(168,85,247,0.35))"
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
        const t = performance.now() * 0.0005
        spheres.forEach((s, i) => {
          s.position.y += Math.sin(t + i) * 0.002
          s.position.x += Math.cos(t + i * 0.7) * 0.002
        })
        group.rotation.y += 0.0015
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
