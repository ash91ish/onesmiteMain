'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function StageButton({ active, index, onClick, position }) {
  const meshRef = useRef()
  const materialRef = useRef()
  
  // Target values for animation
  const targetScale = useMemo(() => new THREE.Vector3(), [])
  const targetColor = useMemo(() => new THREE.Color(), [])
  
  useFrame((state, delta) => {
    if (meshRef.current && materialRef.current) {
      // Gentle floating animation combined with base position
      const floatY = Math.sin(state.clock.elapsedTime * 2 + index) * 0.1
      meshRef.current.position.y = position[1] + floatY
      
      // Slow rotation
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.2

      // Lerp scale
      targetScale.set(active ? 1.6 : 0.8, active ? 1.6 : 0.8, active ? 1.6 : 0.8)
      meshRef.current.scale.lerp(targetScale, delta * 8)

      // Lerp color and emissive intensity
      targetColor.set(active ? '#ff9933' : '#3a5060')
      materialRef.current.color.lerp(targetColor, delta * 8)
      materialRef.current.emissive.lerp(targetColor, delta * 8)
      
      const targetIntensity = active ? 1.2 : 0
      materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
        materialRef.current.emissiveIntensity,
        targetIntensity,
        delta * 8
      )
    }
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        onClick(index)
      }}
      onPointerOver={() => (document.body.style.cursor = 'pointer')}
      onPointerOut={() => (document.body.style.cursor = 'auto')}
    >
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#3a5060"
        emissive="#3a5060"
        emissiveIntensity={0}
        toneMapped={false}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

export default function Timeline3DButtons({ activeStage, setActiveStage, stageCount }) {
  // Calculate positions so they are centered
  const spacing = 1.8
  const totalWidth = (stageCount - 1) * spacing
  const startX = -totalWidth / 2

  return (
    <div style={{ height: '80px', width: '100%', marginTop: '1rem', position: 'relative', zIndex: 10 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        {Array.from({ length: stageCount }).map((_, i) => (
          <StageButton
            key={i}
            index={i}
            active={activeStage === i}
            onClick={setActiveStage}
            position={[startX + i * spacing, 0, 0]}
          />
        ))}
      </Canvas>
    </div>
  )
}
