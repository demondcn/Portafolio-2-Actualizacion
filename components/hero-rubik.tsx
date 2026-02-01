"use client"

import { useEffect, useRef } from "react"

export function HeroRubik({ className }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let renderer: any
    let scene: any
    let camera: any
    let cubeGroup: any
    let cubies: any[] = []
    let frameId = 0
    let currentMove: any = null
    let lastMoveTime = 0

    const init = async () => {
      const THREE = await import("three")
      const mount = mountRef.current
      if (!mount) return

      const width = mount.clientWidth
      const height = mount.clientHeight

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
      camera.position.set(0, 0, 7)

      const ambient = new THREE.AmbientLight(0xffffff, 1.1)
      scene.add(ambient)

      const dir = new THREE.DirectionalLight(0xffffff, 1.4)
      dir.position.set(5, 5, 5)
      scene.add(dir)

      const colors = {
        cyan: 0x22d3ee,
        purple: 0xa855f7,
        pink: 0xf472b6,
        blue: 0x38bdf8,
        violet: 0x8b5cf6,
        mint: 0x5eead4,
        dark: 0x0b0f1a,
      }

      const size = 0.6
      const gap = 0.04
      const spacing = size + gap

      const darkMat = new THREE.MeshStandardMaterial({
        color: colors.dark,
        emissive: 0x0b1220,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.7,
      })

      const faceMaterialsFor = (x: number, y: number, z: number) => {
        const mats = [
          darkMat.clone(),
          darkMat.clone(),
          darkMat.clone(),
          darkMat.clone(),
          darkMat.clone(),
          darkMat.clone(),
        ]
        if (x === 1)
          mats[0] = new THREE.MeshStandardMaterial({
            color: colors.cyan,
            emissive: colors.cyan,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.75,
          }) // +X
        if (x === -1)
          mats[1] = new THREE.MeshStandardMaterial({
            color: colors.purple,
            emissive: colors.purple,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.75,
          }) // -X
        if (y === 1)
          mats[2] = new THREE.MeshStandardMaterial({
            color: colors.mint,
            emissive: colors.mint,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.75,
          }) // +Y
        if (y === -1)
          mats[3] = new THREE.MeshStandardMaterial({
            color: colors.pink,
            emissive: colors.pink,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.75,
          }) // -Y
        if (z === 1)
          mats[4] = new THREE.MeshStandardMaterial({
            color: colors.blue,
            emissive: colors.blue,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.75,
          }) // +Z
        if (z === -1)
          mats[5] = new THREE.MeshStandardMaterial({
            color: colors.violet,
            emissive: colors.violet,
            emissiveIntensity: 0.7,
            transparent: true,
            opacity: 0.75,
          }) // -Z
        return mats
      }

      cubeGroup = new THREE.Group()
      scene.add(cubeGroup)

      const geom = new THREE.BoxGeometry(size, size, size)
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            const materials = faceMaterialsFor(x, y, z)
            const cubie = new THREE.Mesh(geom, materials)
            cubie.position.set(x * spacing, y * spacing, z * spacing)
            cubie.userData = { grid: { x, y, z } }
            cubeGroup.add(cubie)
            cubies.push(cubie)
          }
        }
      }

      if (mount.firstChild) {
        mount.innerHTML = ""
      }
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(width, height)
      renderer.setPixelRatio(window.devicePixelRatio || 1)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.25
      renderer.setClearColor(0x000000, 0)
      renderer.domElement.style.width = "100%"
      renderer.domElement.style.height = "100%"
      renderer.domElement.style.background = "transparent"
      renderer.domElement.style.opacity = "0.95"
      renderer.domElement.style.filter = "drop-shadow(0 0 22px rgba(6, 182, 212, 0.45))"
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

      const startMove = () => {
        if (currentMove) return
        const moves = [
          { axis: "x", layer: 1, dir: 1 },
          { axis: "y", layer: 1, dir: 1 },
          { axis: "z", layer: 1, dir: 1 },
          { axis: "x", layer: -1, dir: -1 },
          { axis: "y", layer: -1, dir: -1 },
          { axis: "z", layer: -1, dir: -1 },
        ]
        const pick = moves[Math.floor(Math.random() * moves.length)]
        const group = new THREE.Group()
        cubeGroup.add(group)
        const toRotate = cubies.filter((c) => c.userData.grid[pick.axis] === pick.layer)
        toRotate.forEach((c) => group.attach(c))
        currentMove = {
          axis: pick.axis,
          dir: pick.dir,
          group,
          progress: 0,
          speed: Math.PI / 2 / 60,
        }
      }

      const finalizeMove = () => {
        if (!currentMove) return
        const { axis, dir, group } = currentMove
        group.updateMatrixWorld()
        const children = [...group.children]
        children.forEach((c: any) => {
          cubeGroup.attach(c)
          const x = Math.round(c.position.x / spacing)
          const y = Math.round(c.position.y / spacing)
          const z = Math.round(c.position.z / spacing)
          c.position.set(x * spacing, y * spacing, z * spacing)
          c.userData.grid = { x, y, z }
        })
        cubeGroup.remove(group)
        currentMove = null
      }

      const animate = () => {
        frameId = requestAnimationFrame(animate)
        if (!currentMove && performance.now() - lastMoveTime > 500) {
          startMove()
          lastMoveTime = performance.now()
        }
        if (currentMove) {
          const { axis, dir, group, speed } = currentMove
          const step = speed * dir
          group.rotation[axis] += step
          currentMove.progress += Math.abs(step)
          if (currentMove.progress >= Math.PI / 2) {
            group.rotation[axis] = dir * Math.PI / 2
            finalizeMove()
          }
        }
        cubeGroup.rotation.y += 0.002
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
      if (scene && cubeGroup) {
        scene.remove(cubeGroup)
        cubies.forEach((c) => {
          if (c.geometry) c.geometry.dispose()
          if (Array.isArray(c.material)) {
            c.material.forEach((m: any) => m.dispose && m.dispose())
          } else if (c.material) {
            c.material.dispose && c.material.dispose()
          }
        })
        cubies = []
      }
    }
  }, [])

  return <div ref={mountRef} className={className} />
}
