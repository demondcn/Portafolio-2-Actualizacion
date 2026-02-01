"use client"

import { useEffect, useRef } from "react"

export function ContactBot({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let bot: any
    let frameId = 0
    let targetRot = { x: 0, y: 0 }

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.set(0, 0, 8)

      const ambient = new THREE.AmbientLight(0xffffff, 1.0)
      scene.add(ambient)
      const point = new THREE.PointLight(0x22d3ee, 1.4, 50)
      point.position.set(5, 5, 5)
      scene.add(point)

      bot = new THREE.Group()
      scene.add(bot)

      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x1f2937,
        emissive: 0x22d3ee,
        emissiveIntensity: 0.35,
        transparent: true,
        opacity: 0.9,
      })
      const accentMat = new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0xa855f7,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.9,
      })

      const body = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.0, 1.6), bodyMat)
      body.position.y = -0.5
      bot.add(body)

      const head = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.4, 1.4), bodyMat)
      head.position.y = 1.2
      bot.add(head)

      const eyeGeo = new THREE.SphereGeometry(0.18, 16, 16)
      const eyeLeft = new THREE.Mesh(eyeGeo, accentMat)
      eyeLeft.position.set(-0.45, 1.2, 0.75)
      const eyeRight = eyeLeft.clone()
      eyeRight.position.set(0.45, 1.2, 0.75)
      bot.add(eyeLeft, eyeRight)

      const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.6, 12), accentMat)
      antenna.position.set(0, 2.2, 0)
      bot.add(antenna)
      const antennaTip = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), accentMat)
      antennaTip.position.set(0, 2.55, 0)
      bot.add(antennaTip)

      if (mount.firstChild) {
        mount.innerHTML = ""
      }
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      renderer.setClearColor(0x000000, 0)
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.background = "transparent"
      renderer.domElement.style.filter = "drop-shadow(0 0 18px rgba(34,211,238,0.4))"
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

      const onMove = (e: MouseEvent) => {
        const rect = mount.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        targetRot.y = x * 0.8
        targetRot.x = -y * 0.6
      }
      mount.addEventListener("mousemove", onMove)

      const animate = () => {
        frameId = requestAnimationFrame(animate)
        const t = performance.now() * 0.001
        bot.rotation.y += (targetRot.y - bot.rotation.y) * 0.08
        bot.rotation.x += (targetRot.x - bot.rotation.x) * 0.08
        bot.position.y = Math.sin(t * 1.2) * 0.15
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        window.removeEventListener("resize", onResize)
        mount.removeEventListener("mousemove", onMove)
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
      if (scene && bot) {
        scene.remove(bot)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
