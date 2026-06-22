'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

function BrainVines({ count = 120, maxDistance = 4.0 }) {
  const groupRef = useRef()
  const scrollYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => { scrollYRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const [positions, linePositions, lineColors] = useMemo(() => {
    // Generate random points in a sphere to look like a brain/neural network
    const pts = []
    for (let i = 0; i < count; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = Math.cbrt(Math.random()) * 14 // radius up to 14

      const sinPhi = Math.sin(phi)
      pts.push(new THREE.Vector3(
        r * sinPhi * Math.cos(theta),
        r * sinPhi * Math.sin(theta),
        r * Math.cos(phi)
      ))
    }

    const linePts = []
    const lineCols = []
    const colorA = new THREE.Color('#ff9933') // saffron
    const colorB = new THREE.Color('#023e69') // navy
    const colorC = new THREE.Color('#ffffff') // bright node

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = pts[i].distanceTo(pts[j])
        if (dist < maxDistance) {
          linePts.push(
            pts[i].x, pts[i].y, pts[i].z,
            pts[j].x, pts[j].y, pts[j].z
          )
          // Mix colors
          const mix = Math.random()
          const color1 = mix > 0.6 ? colorA : colorB
          const color2 = mix > 0.9 ? colorC : color1
          
          lineCols.push(
            color1.r, color1.g, color1.b,
            color2.r, color2.g, color2.b
          )
        }
      }
    }
    
    const positionsArray = new Float32Array(pts.length * 3)
    pts.forEach((p, i) => {
      positionsArray[i * 3] = p.x
      positionsArray[i * 3 + 1] = p.y
      positionsArray[i * 3 + 2] = p.z
    })

    return [
      positionsArray, 
      new Float32Array(linePts), 
      new Float32Array(lineCols)
    ]
  }, [count, maxDistance])

  useFrame((state) => {
    if (groupRef.current) {
      // Subtle, premium scroll interaction (slower speed)
      const scrollProgress = scrollYRef.current * 0.002
      
      // Moderate target rotation for a smoother tilt
      const targetY = state.clock.elapsedTime * 0.05 + Math.sin(scrollProgress) * 0.8
      const targetX = Math.sin(state.clock.elapsedTime * 0.2) * 0.1 + Math.cos(scrollProgress * 0.8) * 0.3
      
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08)
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08)
      
      // Add a slight floating / breathing effect
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial 
          size={0.12} 
          color="#ff9933" 
          transparent 
          opacity={0.8} 
          sizeAttenuation={true} 
          blending={THREE.AdditiveBlending} 
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial 
          vertexColors 
          transparent 
          opacity={0.35} 
          blending={THREE.AdditiveBlending} 
        />
      </lineSegments>
      
      {/* Central glowing core node to anchor the AI brain */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color="#023e69" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
      </mesh>
      
      {/* Secondary glowing nodes */}
      <mesh position={[4, 2, -3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#ff9933" transparent opacity={0.3} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh position={[-5, -3, 2]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} blending={THREE.AdditiveBlending} />
      </mesh>
    </group>
  )
}

export default function TimelineCanvas() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '200px' })

  return (
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas
        frameloop={inView ? 'always' : 'demand'}
        camera={{ position: [0, 0, 20], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <BrainVines />
      </Canvas>
      {/* Deep vignette mask to seamlessly blend the 3D canvas with the dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#010b14_80%)]" />
    </div>
  )
}
