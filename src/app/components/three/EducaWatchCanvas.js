'use client'

import { useRef, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useInView } from 'framer-motion'
import * as THREE from 'three'

// ─── Orbital glow rings ───────────────────────────────────────────
function GlowRing({ radius, tubeRadius, color, speed, axis = 'z', initialRotation = 0 }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation[axis] += delta * speed
  })
  return (
    <mesh ref={ref} rotation={[initialRotation, 0, 0]}>
      <torusGeometry args={[radius, tubeRadius, 48, 200]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.8}
        toneMapped={false}
      />
    </mesh>
  )
}

// ─── Dial tick markers ────────────────────────────────────────────
function DialTicks() {
  const ticks = useMemo(() => {
    const arr = []
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * Math.PI * 2 - Math.PI / 2
      const isHour = i % 5 === 0
      const r = 1.52
      arr.push({
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        rot: angle + Math.PI / 2,
        w: isHour ? 0.055 : 0.025,
        h: isHour ? 0.2 : 0.09,
        color: isHour ? '#f0a060' : '#6090b0',
        emissive: isHour ? '#E8621A' : '#000',
        emissiveIntensity: isHour ? 0.9 : 0,
      })
    }
    return arr
  }, [])

  return (
    <>
      {ticks.map((t, i) => (
        <mesh key={i} position={[t.x, t.y, 0.09]} rotation={[0, 0, t.rot]}>
          <boxGeometry args={[t.w, t.h, 0.04]} />
          <meshStandardMaterial
            color={t.color}
            emissive={t.emissive}
            emissiveIntensity={t.emissiveIntensity}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </>
  )
}

// ─── Watch hand ───────────────────────────────────────────────────
function Hand({ handRef, length, width, depth = 0.06, color, glowColor, tailRatio = 0.25 }) {
  return (
    <group ref={handRef}>
      {/* shaft */}
      <mesh position={[0, length * (0.5 - tailRatio * 0.5), depth]}>
        <boxGeometry args={[width, length * (1 - tailRatio), 0.04]} />
        <meshStandardMaterial color={color} emissive={glowColor} emissiveIntensity={1} toneMapped={false} />
      </mesh>
      {/* tail counterweight */}
      <mesh position={[0, -length * tailRatio * 0.5, depth]}>
        <boxGeometry args={[width * 1.8, length * tailRatio, 0.04]} />
        <meshStandardMaterial color={color} emissive={glowColor} emissiveIntensity={0.5} toneMapped={false} />
      </mesh>
    </group>
  )
}

// ─── Particle field ───────────────────────────────────────────────
function Stars() {
  const ref = useRef(null)
  const { positions, colors } = useMemo(() => {
    const count = 220
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const palette = [
      new THREE.Color('#E8621A'),
      new THREE.Color('#4a9fd4'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#f0c060'),
    ]
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = (Math.random() - 0.5) * Math.PI
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.cos(phi)
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    return { positions: pos, colors: col }
  }, [])

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.03
      ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.015) * 0.15
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors sizeAttenuation transparent opacity={0.85} />
    </points>
  )
}

// ─── Full watch ───────────────────────────────────────────────────
function LuxuryWatch() {
  const groupRef        = useRef(null)
  const hourHandRef     = useRef(null)
  const minuteHandRef   = useRef(null)
  const secondHandRef   = useRef(null)
  const outerBezelRef   = useRef(null)
  const saffronRingRef  = useRef(null)
  const scrollYRef = useRef(0)

  useEffect(() => {
    const onScroll = () => { scrollYRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime

    // ── Bounded Scroll Parallax + Gentle Float ──
    if (groupRef.current) {
      // Use scrollY to drive rotation, but wrap it in sin/cos so it never spins out of bounds.
      // We also add a tiny bit of elapsed time `t` so it still gently floats even when not scrolling.
      // Increased multiplier to 0.008 for faster scroll response, and amplitude to 0.45 for more tilt.
      const scrollProgress = scrollYRef.current * 0.008
      
      const tx = 1.15 + Math.sin(scrollProgress + t * 0.2) * 0.45
      const ty = 0.1 + Math.cos(scrollProgress + t * 0.1) * 0.45
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, tx, 0.1)
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, ty, 0.1)
    }

    // ── Bezel slow rotation ──
    if (outerBezelRef.current)  outerBezelRef.current.rotation.z  -= delta * 0.08
    if (saffronRingRef.current) saffronRingRef.current.rotation.z += delta * 0.3

    // ── Clock hands from real time ──
    const now = new Date()
    const sec = now.getSeconds() + now.getMilliseconds() / 1000
    const min = now.getMinutes() + sec / 60
    const hr  = (now.getHours() % 12) + min / 60

    if (secondHandRef.current) secondHandRef.current.rotation.z = -(sec / 60)  * Math.PI * 2
    if (minuteHandRef.current) minuteHandRef.current.rotation.z = -(min / 60)  * Math.PI * 2
    if (hourHandRef.current)   hourHandRef.current.rotation.z   = -(hr  / 12)  * Math.PI * 2
  })

  return (
    <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.6}>
      <group ref={groupRef} rotation={[1.15, 0.1, 0]}>

        {/* ── CASE BODY – visible steel/gunmetal ── */}
        <mesh>
          <cylinderGeometry args={[1.72, 1.72, 0.38, 64]} />
          <meshPhysicalMaterial
            color="#2a3a4a"
            metalness={1}
            roughness={0.12}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        </mesh>

        {/* ── DIAL FACE – dark navy with subtle sheen ── */}
        <mesh position={[0, 0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.68, 64]} />
          <meshPhysicalMaterial
            color="#0b1e30"
            metalness={0.3}
            roughness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>

        {/* ── OUTER BEZEL – thick polished gold/steel ── */}
        <mesh ref={outerBezelRef} position={[0, 0.19, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.78, 0.22, 32, 64]} />
          <meshPhysicalMaterial
            color="#c8a84a"
            metalness={1}
            roughness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.04}
          />
        </mesh>

        {/* ── SAFFRON GLOW RING ── */}
        <mesh ref={saffronRingRef} position={[0, 0.191, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.56, 0.028, 16, 64]} />
          <meshStandardMaterial
            color="#E8621A"
            emissive="#E8621A"
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>

        {/* ── OUTER GLOW RING – blue accent ── */}
        <GlowRing radius={2.08} tubeRadius={0.012} color="#3a8fc4" speed={-0.18} axis="z" initialRotation={Math.PI / 2} />

        {/* ── TICK MARKERS ── */}
        <group position={[0, 0.21, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <DialTicks />
        </group>

        {/* ── CROWN ── */}
        <mesh position={[1.96, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.1, 0.08, 0.42, 32]} />
          <meshPhysicalMaterial color="#c8a84a" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[2.22, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.13, 0.1, 0.12, 32]} />
          <meshPhysicalMaterial color="#c8a84a" metalness={1} roughness={0.1} />
        </mesh>

        {/* ── HANDS ── */}
        <group position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          {/* Hour */}
          <Hand handRef={hourHandRef}   length={0.85} width={0.085} color="#e8f0f8" glowColor="#8ab8d8" tailRatio={0.22} />
          {/* Minute */}
          <Hand handRef={minuteHandRef} length={1.3}  width={0.055} color="#e8f0f8" glowColor="#8ab8d8" tailRatio={0.2} />
          {/* Second – saffron */}
          <Hand handRef={secondHandRef} length={1.5}  width={0.028} color="#ff7028" glowColor="#E8621A" tailRatio={0.3} depth={0.1} />

          {/* Centre jewel */}
          <mesh position={[0, 0, 0.13]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.085, 0.085, 0.06, 32]} />
            <meshPhysicalMaterial
              color="#E8621A"
              emissive="#E8621A"
              emissiveIntensity={2}
              toneMapped={false}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </group>

      </group>
    </Float>
  )
}

// ─── Canvas ───────────────────────────────────────────────────────
export default function EducaWatchCanvas() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '200px' })

  return (
    <div ref={ref} style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <Canvas
        frameloop={inView ? 'always' : 'demand'}
        camera={{ position: [0, 0, 8.2], fov: 37 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.4 }}
      >
        {/* Low ambient so lights drive the drama */}
        <ambientLight intensity={0.25} />

        {/* KEY – warm white, top-right front */}
        <directionalLight position={[5, 8, 7]} intensity={4} color="#fff5e8" />

        {/* RIM – cool blue from top-left */}
        <directionalLight position={[-6, 5, 4]} intensity={2.5} color="#a0c8f0" />

        {/* SAFFRON FILL – warm from bottom-left */}
        <pointLight position={[-5, -4, 6]} intensity={3} color="#E8621A" distance={20} />

        {/* BACK BOUNCE – subtle blue */}
        <pointLight position={[0, 0, -8]} intensity={1.5} color="#2060a0" distance={20} />

        {/* FRONT SPARKLE – tiny white for clearcoat glint */}
        <pointLight position={[3, 3, 10]} intensity={1} color="#ffffff" distance={18} />

        <LuxuryWatch />
        <Stars />
      </Canvas>
    </div>
  )
}
