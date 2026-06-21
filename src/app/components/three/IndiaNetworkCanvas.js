'use client'

import { useRef, useEffect, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { MeshReflectorMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// ── 1. The Infinite Datacenter Racks ──
function ServerRows() {
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useEffect(() => {
    if (!meshRef.current) return
    let i = 0
    // Generate 2 rows of 25 servers each
    for (let row = 0; row < 2; row++) {
      for (let z = 0; z < 25; z++) {
        const xPos = row === 0 ? -3.0 : 3.0
        const zPos = (z - 15) * 2.0 // Spaced by 2.0 units, going back to z = -30
        dummy.position.set(xPos, 2.5, zPos) // Y is 2.5 because height is 5
        dummy.updateMatrix()
        meshRef.current.setMatrixAt(i++, dummy.matrix)
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  }, [dummy])

  return (
    <instancedMesh ref={meshRef} args={[null, null, 50]}>
      <boxGeometry args={[1.5, 5.0, 1.2]} />
      {/* Sleek, dark metal server chassis */}
      <meshStandardMaterial color="#020d18" metalness={0.9} roughness={0.2} />
    </instancedMesh>
  )
}

function ServerLEDs() {
  const meshRef = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const count = 50 * 15 // 50 racks, 15 LEDs each

  useEffect(() => {
    if (!meshRef.current) return
    let i = 0
    for (let row = 0; row < 2; row++) {
      for (let z = 0; z < 25; z++) {
        // The inner face of the rack facing the aisle
        const xFace = row === 0 ? -2.2 : 2.2
        const zBase = (z - 15) * 2.0

        for (let led = 0; led < 15; led++) {
          const xPos = xFace
          const yPos = 0.5 + Math.random() * 4.0 // Random height on the 5-unit tall rack
          const zPos = zBase + (Math.random() * 1.0 - 0.5) // Spread along the Z depth of the rack

          dummy.position.set(xPos, yPos, zPos)
          dummy.scale.set(0.015, 0.025, 0.04) // Thinner, smaller LEDs so they aren't too bright on PC
          dummy.updateMatrix()
          meshRef.current.setMatrixAt(i, dummy.matrix)

          // Mix of brand colors: mostly cyan, some saffron orange
          const color = new THREE.Color(Math.random() > 0.8 ? '#E8621A' : '#00f0ff')
          meshRef.current.setColorAt(i, color)
          i++
        }
      }
    }
    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true
  }, [dummy])

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial transparent opacity={0.65} />
    </instancedMesh>
  )
}

function InfiniteDatacenter() {
  const groupRef = useRef()

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Move the entire datacenter towards the camera to simulate flying forward
      // Reduced speed from 2.5 to 0.8 for a much calmer, premium feel
      groupRef.current.position.z += delta * 0.8
      // Rack spacing is 2.0. Once we move 2.0 units, snap back seamlessly.
      if (groupRef.current.position.z > 2.0) {
        groupRef.current.position.z -= 2.0
      }
    }
  })

  return (
    <group ref={groupRef}>
      <ServerRows />
      <ServerLEDs />
    </group>
  )
}

// ── 2. The AI Brain / Core ──
function AICore() {
  const coreRef = useRef()
  const outerRingRef = useRef()
  const innerRingRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (coreRef.current) {
      // Smoother, slower floating and rotation
      coreRef.current.position.y = 2.5 + Math.sin(t * 1.0) * 0.2
      coreRef.current.rotation.y = t * 0.2
      coreRef.current.rotation.x = Math.sin(t * 0.3) * 0.1
    }
    if (outerRingRef.current) outerRingRef.current.rotation.x = t * -0.25
    if (innerRingRef.current) innerRingRef.current.rotation.y = t * 0.4
  })

  return (
    <group position={[0, 2.5, -14]}>
      {/* Powerful light emitting from the AI Core */}
      <pointLight intensity={6} color="#E8621A" distance={20} />

      <group ref={coreRef}>
        {/* The CPU / Brain Geometry */}
        <mesh>
          <octahedronGeometry args={[2.5, 0]} />
          <meshPhysicalMaterial
            color="#010b14"
            metalness={1.0}
            roughness={0.1}
            wireframe={true}
          />
        </mesh>

        {/* Inner neural glowing mass */}
        <mesh>
          <icosahedronGeometry args={[1.5, 2]} />
          <meshBasicMaterial color="#E8621A" wireframe transparent opacity={0.5} />
        </mesh>

        {/* Floating analytical rings */}
        <mesh ref={outerRingRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3.5, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
        </mesh>
        <mesh ref={innerRingRef} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[2.8, 0.04, 16, 100]} />
          <meshBasicMaterial color="#E8621A" transparent opacity={0.8} />
        </mesh>
      </group>
    </group>
  )
}

// ── 3. High-End Polished Floor ──
function DatacenterFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      {/* A dark, highly reflective surface to mirror the servers and AI core */}
      <MeshReflectorMaterial
        blur={[400, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={15}
        roughness={0.4}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#010b14"
        metalness={0.8}
      />
    </mesh>
  )
}

// ── 4. Cinematic Camera Controller ──
function CameraController() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 1.5
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 1.0
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  useFrame(() => {
    // Smooth dampening for mouse look
    target.current.x += (mouse.current.x - target.current.x) * 0.05
    target.current.y += (mouse.current.y - target.current.y) * 0.05

    camera.position.x = target.current.x
    camera.position.y = 1.5 + target.current.y // Eye level down the aisle
    camera.lookAt(0, 2.0, -14) // Always look at the AI Core
  })

  return null
}

// ── 5. Responsive Wrapper ──
function ResponsiveGroup({ children }) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      if (w < 640) setScale(0.6)       // mobile
      else if (w < 1024) setScale(0.8) // tablet
      else setScale(1)                 // desktop
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <group scale={scale}>{children}</group>
}

// ── MAIN SCENE ASSEMBLY ──
function Scene() {
  return (
    <>
      <CameraController />

      {/* Heavy fog blends the infinite corridor seamlessly into the dark background */}
      <fog attach="fog" args={['#010b14', 12, 30]} />

      {/* Base Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 10, 5]} intensity={1.5} color="#00f0ff" />

      <ResponsiveGroup>
        <InfiniteDatacenter />
        <AICore />
      </ResponsiveGroup>

      <DatacenterFloor />
    </>
  )
}

export default function IndiaNetworkCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 4], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  )
}
