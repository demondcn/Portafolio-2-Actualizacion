"use client"

import { useEffect, useRef } from "react"

export function ProjectsCubes({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let cubes: any[] = []
    let frameId = 0

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.set(0, 0, 10)

      const ambient = new THREE.AmbientLight(0xffffff, 0.9)
      scene.add(ambient)
      const point = new THREE.PointLight(0xa855f7, 1.2, 50)
      point.position.set(5, 5, 5)
      scene.add(point)

      const colors = [0x22d3ee, 0xa855f7, 0xf472b6, 0x38bdf8, 0x5eead4, 0xc084fc]
      for (let i = 0; i < 8; i++) {
        const geom = new THREE.BoxGeometry(1.6, 1.6, 1.6)
        const mat = new THREE.MeshStandardMaterial({
          color: colors[i % colors.length],
          emissive: colors[i % colors.length],
          emissiveIntensity: 0.6,
          transparent: true,
          opacity: 0.35,
          wireframe: true,
        })
        const cube = new THREE.Mesh(geom, mat)
        cube.position.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 3, (Math.random() - 0.5) * 2)
        cube.userData = {
          vel: new THREE.Vector3(
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.03,
            (Math.random() - 0.5) * 0.02,
          ),
        }
        scene.add(cube)
        cubes.push(cube)
      }

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.2
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.filter = "drop-shadow(0 0 18px rgba(168,85,247,0.35))"
      mount.appendChild(renderer.domElement)

      const bounds = { x: 4.5, y: 2.2, z: 2.0 }

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
        cubes.forEach((cube) => {
          cube.position.add(cube.userData.vel)
          if (Math.abs(cube.position.x) > bounds.x) cube.userData.vel.x *= -1
          if (Math.abs(cube.position.y) > bounds.y) cube.userData.vel.y *= -1
          if (Math.abs(cube.position.z) > bounds.z) cube.userData.vel.z *= -1
          cube.rotation.x += 0.01
          cube.rotation.y += 0.012
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
      if (scene) {
        cubes.forEach((c) => scene.remove(c))
        cubes = []
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
