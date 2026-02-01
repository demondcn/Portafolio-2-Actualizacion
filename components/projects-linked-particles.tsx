"use client"

import { useEffect, useRef } from "react"

export function ProjectsLinkedParticles({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let points: any
    let lines: any
    let frameId = 0

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000)
      camera.position.set(0, 0, 10)

      const count = 80
      const positions = new Float32Array(count * 3)
      const velocities = new Float32Array(count * 3)
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 0] = (Math.random() - 0.5) * 10
        positions[i * 3 + 1] = (Math.random() - 0.5) * 6
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6
        velocities[i * 3 + 0] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
      const material = new THREE.PointsMaterial({
        color: 0x22d3ee,
        size: 0.08,
        transparent: true,
        opacity: 0.9,
      })
      points = new THREE.Points(geometry, material)
      scene.add(points)

      const lineGeom = new THREE.BufferGeometry()
      const lineMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.35 })
      lines = new THREE.LineSegments(lineGeom, lineMat)
      scene.add(lines)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.filter = "drop-shadow(0 0 20px rgba(168,85,247,0.35))"
      mount.appendChild(renderer.domElement)

      const bounds = { x: 5, y: 3, z: 3 }

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
        const pos = geometry.attributes.position.array as Float32Array
        for (let i = 0; i < count; i++) {
          const ix = i * 3
          pos[ix + 0] += velocities[ix + 0]
          pos[ix + 1] += velocities[ix + 1]
          pos[ix + 2] += velocities[ix + 2]
          if (Math.abs(pos[ix + 0]) > bounds.x) velocities[ix + 0] *= -1
          if (Math.abs(pos[ix + 1]) > bounds.y) velocities[ix + 1] *= -1
          if (Math.abs(pos[ix + 2]) > bounds.z) velocities[ix + 2] *= -1
        }
        geometry.attributes.position.needsUpdate = true

        const links: number[] = []
        const maxDist = 1.6
        for (let i = 0; i < count; i++) {
          for (let j = i + 1; j < count; j++) {
            const ia = i * 3
            const ib = j * 3
            const dx = pos[ia] - pos[ib]
            const dy = pos[ia + 1] - pos[ib + 1]
            const dz = pos[ia + 2] - pos[ib + 2]
            const d = Math.sqrt(dx * dx + dy * dy + dz * dz)
            if (d < maxDist) {
              links.push(pos[ia], pos[ia + 1], pos[ia + 2])
              links.push(pos[ib], pos[ib + 1], pos[ib + 2])
            }
          }
        }
        lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(links, 3))
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
      if (scene) {
        if (points) scene.remove(points)
        if (lines) scene.remove(lines)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
