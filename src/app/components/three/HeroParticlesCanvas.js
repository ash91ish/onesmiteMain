'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function DigitalGlobe() {
  const pointsRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const scrollY = useRef(0)

  const count = 5000 // High density but lightweight because it's just points
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    
    const colorBrand = new THREE.Color('#E8621A')
    const colorCyan = new THREE.Color('#00f0ff')
    const colorDark = new THREE.Color('#023e69')

    for (let i = 0; i < count; i++) {
      // Fibonacci sphere distribution for even spread
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      
      // Radius with slight random fuzziness
      const r = 4.2 + Math.random() * 0.8 
      
      const x = r * Math.cos(theta) * Math.sin(phi)
      const y = r * Math.sin(theta) * Math.sin(phi)
      const z = r * Math.cos(phi)

      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      // Coloring logic
      const mix = Math.random()
      let c = colorDark.clone()
      
      if (mix > 0.85) {
        c.lerp(colorCyan, Math.random()) // 15% chance to be cyan-ish
      }
      if (mix > 0.98) {
        c = colorBrand.clone() // 2% chance to be bright orange
      }
      
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    
    return [pos, col]
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial calls
    handleMouseMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 })
    handleScroll()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useFrame((state, delta) => {
    if (!pointsRef.current) return
    const t = state.clock.elapsedTime

    // Fade in smoothly when mounted
    if (pointsRef.current.material.opacity < 0.8) {
      pointsRef.current.material.opacity = Math.min(0.8, pointsRef.current.material.opacity + delta * 0.6)
    }

    // 1. Base gentle rotation
    pointsRef.current.rotation.y = t * 0.05
    pointsRef.current.rotation.x = t * 0.02

    // 2. Smooth mouse parallax
    const targetX = mouse.current.x * 0.5
    const targetY = mouse.current.y * 0.5
    
    // Interpolate position for silky smooth movement
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * delta * 2
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * delta * 2

    // 3. Scroll interaction
    // Rotate faster as you scroll down, and bring the globe closer to the camera
    const scrollFactor = scrollY.current * 0.002
    pointsRef.current.rotation.z = scrollFactor
    
    // Move from Z=-2 to Z=2 as you scroll down (brings it closer)
    const targetZ = -2 + (scrollY.current * 0.005)
    pointsRef.current.position.z += (targetZ - pointsRef.current.position.z) * delta * 3
  })

  return (
    <points ref={pointsRef} position={[0, 0, -2]}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={colors.length / 3} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0} // Start invisible, fade in via useFrame
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default function HeroParticlesCanvas() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // A tiny delay ensures the main thread is completely free for initial CSS/Framer paint
    const timer = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null

  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        inset: 0, 
        pointerEvents: 'none',
        zIndex: 1 // Keep it behind text
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        // Limit pixel ratio to max 1.5 to guarantee 60fps even on retina displays
        dpr={[1, 1.5]} 
        gl={{ 
          antialias: false, // Not needed for points, saves GPU
          alpha: true, 
          powerPreference: 'high-performance' 
        }}
      >
        {/* No lights needed! PointsMaterial is unlit, making it ultra-fast */}
        <DigitalGlobe />
      </Canvas>
    </div>
  )
}
