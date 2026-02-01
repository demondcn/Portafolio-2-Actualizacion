"use client"

import { useEffect, useRef } from "react"

export function EducationCap({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let cap: any
    let frameId = 0

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.set(0, 0, 6)

      const ambient = new THREE.AmbientLight(0xffffff, 1.0)
      scene.add(ambient)
      const point = new THREE.PointLight(0xa855f7, 1.2, 50)
      point.position.set(4, 4, 4)
      scene.add(point)

      cap = new THREE.Group()
      scene.add(cap)

      const mat = new THREE.MeshStandardMaterial({
        color: 0x1f2937,
        emissive: 0xa855f7,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.9,
      })
      const top = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.25, 2.6), mat)
      top.position.y = 0.6
      cap.add(top)

      const crown = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.6, 1.2), mat)
      crown.position.y = 0.2
      cap.add(crown)

      const tassel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 12), mat)
      tassel.position.set(0.9, 0.2, 0.9)
      tassel.rotation.z = Math.PI / 4
      cap.add(tassel)

      const tasselTip = new THREE.Mesh(new THREE.SphereGeometry(0.08, 16, 16), mat)
      tasselTip.position.set(1.2, -0.2, 1.2)
      cap.add(tasselTip)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.filter = "drop-shadow(0 0 16px rgba(168,85,247,0.35))"
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
        cap.rotation.y += 0.01
        cap.rotation.x = Math.sin(performance.now() * 0.001) * 0.1
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
      if (scene && cap) {
        scene.remove(cap)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
