"use client"

import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useLoader, useThree } from "@react-three/fiber"
import { OrbitControls, Environment, Html } from "@react-three/drei"
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js"
import * as THREE from "three"
import { Loader2 } from "lucide-react"

interface STLModelProps {
  url: string
  color: string
  scale: number
  onFit?: (size: number) => void
}

function STLModel({ url, color, scale, onFit }: STLModelProps) {
  const geometry = useLoader(STLLoader, url)
  const groupRef = useRef<THREE.Group>(null)
  const [dragging, setDragging] = useState(false)
  const [fit, setFit] = useState<{
    maxDim: number
    center: THREE.Vector3
    minY: number
  } | null>(null)
  const dragStart = useRef<{ y: number; z: number }>({ y: 0, z: 0 })
  const { gl } = useThree()

  useEffect(() => {
    if (geometry) {
      geometry.computeBoundingBox()
      const bbox = geometry.boundingBox
      if (bbox) {
        const size = new THREE.Vector3()
        bbox.getSize(size)
        if (size.y < size.z) {
          geometry.rotateX(-Math.PI / 2)
          geometry.computeBoundingBox()
        }
      }
      geometry.computeVertexNormals()
      geometry.computeBoundingBox()
      const finalBox = geometry.boundingBox
      if (finalBox) {
        const size = new THREE.Vector3()
        const center = new THREE.Vector3()
        finalBox.getSize(size)
        finalBox.getCenter(center)
        setFit({ maxDim: Math.max(size.x, size.y, size.z), center, minY: finalBox.min.y })
      }
    }
  }, [geometry])

  const maxDim = fit?.maxDim || 1
  const normalizedScale = (3 / maxDim) * scale
  const positionOffset = fit
    ? new THREE.Vector3(-fit.center.x, -fit.minY, -fit.center.z).multiplyScalar(normalizedScale)
    : new THREE.Vector3()

  useEffect(() => {
    if (fit && onFit) {
      onFit(maxDim * normalizedScale)
    }
  }, [fit, maxDim, normalizedScale, onFit])

  const onPointerDown = (e: any) => {
    e.stopPropagation()
    setDragging(true)
    dragStart.current = { y: e.clientY, z: groupRef.current?.position.z || 0 }
    gl.domElement.style.cursor = "grabbing"
  }

  const onPointerUp = () => {
    setDragging(false)
    gl.domElement.style.cursor = "grab"
  }

  const onPointerMove = (e: any) => {
    if (!dragging || !groupRef.current) return
    const deltaY = (e.clientY - dragStart.current.y) * 0.01
    groupRef.current.position.z = dragStart.current.z + deltaY
  }

  return (
    <group
      ref={groupRef}
      position={positionOffset}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerOut={onPointerUp}
      onPointerMove={onPointerMove}
    >
      <mesh geometry={geometry} scale={normalizedScale} castShadow receiveShadow>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.2} envMapIntensity={0.8} />
      </mesh>
    </group>
  )
}

function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 text-muted-foreground">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <span className="text-sm font-medium">Cargando modelo...</span>
      </div>
    </Html>
  )
}

interface STLViewerProps {
  fileUrl: string | null
  color: string
  scale: number
}

export function STLViewer({ fileUrl, color, scale }: STLViewerProps) {
  const [gridSize, setGridSize] = useState(10)
  const controlsRef = useRef<any>(null)

  if (!fileUrl) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted rounded-2xl">
        <div className="text-center p-6">
          <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <p className="text-muted-foreground font-medium">Sube un archivo STL para ver la vista previa</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 relative">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 10, 0]} intensity={0.5} />

        <Suspense fallback={<LoadingFallback />}>
          <STLModel url={fileUrl} color={color} scale={scale} onFit={(size) => setGridSize(Math.max(10, size * 1.6))} />
          <Environment preset="studio" />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={25}
          autoRotate={false}
          enableRotate={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />

        <gridHelper
          args={[gridSize, Math.min(60, Math.max(20, Math.round(gridSize))), "#374151", "#1f2937"]}
          position={[0, 0, 0]}
        />
      </Canvas>
      <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => controlsRef.current?.dollyOut(1.1)}
          className="h-11 w-11 sm:h-10 sm:w-10 rounded-xl bg-slate-900/70 border border-white/10 text-white text-lg font-bold hover:bg-slate-800/80 transition-colors"
        >
          -
        </button>
        <button
          type="button"
          onClick={() => controlsRef.current?.dollyIn(1.25)}
          className="h-11 w-11 sm:h-10 sm:w-10 rounded-xl bg-slate-900/70 border border-white/10 text-white text-lg font-bold hover:bg-slate-800/80 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  )
}
