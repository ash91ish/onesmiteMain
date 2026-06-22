'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import worldData from '../../../../public/world-nodes.json'
import indiaData from '../../../../public/india-nodes.json'

// Colors
const baseColor = new THREE.Color("#00f0ff")
const hubColor = new THREE.Color("#E8621A")
const blackColor = new THREE.Color("#000000") // invisible in additive blending

function NetworkMesh({ scrollProgress, nodes, precalcLines, isGlobe }) {
  const pointsRef = useRef()
  const linesRef = useRef()
  const hubsRef = useRef()
  const groupRef = useRef()
  const { viewport } = useThree()

  // Calculate base scale
  let scaleFactor = Math.min(2.5, viewport.width / 18, viewport.height / 18)
  if (isGlobe) {
    // Reduce the scale specifically on landscape (PC) screens so the full globe fits in view
    scaleFactor = Math.min(2.5, viewport.width / 18, viewport.height / 26)
  }

  // Prepare geometries
  const { positions, linePositions, hubPositions, lineDistances } = useMemo(() => {
    const pts = new Float32Array(nodes.length * 3)
    const hPts = []
    
    nodes.forEach((node, i) => {
      let x, y, z
      if (isGlobe) {
        x = node.x
        y = node.y
        z = node.z
      } else {
        x = node.x * 12
        y = node.y * 12
        z = (Math.random() - 0.5) * 0.4
      }

      pts[i * 3] = x
      pts[i * 3 + 1] = y
      pts[i * 3 + 2] = z

      if (node.isEpicenter || Math.random() > 0.95) {
        hPts.push(x, y, isGlobe ? z * 1.01 : z + 0.1)
        node.isHub = true
      }
    })

    const lPts = new Float32Array(precalcLines.length * 6)
    const lDists = new Float32Array(precalcLines.length * 2)
    precalcLines.forEach(([idxA, idxB], i) => {
      lPts[i * 6] = pts[idxA * 3]
      lPts[i * 6 + 1] = pts[idxA * 3 + 1]
      lPts[i * 6 + 2] = pts[idxA * 3 + 2]

      lPts[i * 6 + 3] = pts[idxB * 3]
      lPts[i * 6 + 4] = pts[idxB * 3 + 1]
      lPts[i * 6 + 5] = pts[idxB * 3 + 2]

      lDists[i * 2] = nodes[idxA].dist
      lDists[i * 2 + 1] = nodes[idxB].dist
    })

    return {
      positions: pts,
      linePositions: lPts,
      hubPositions: new Float32Array(hPts),
      lineDistances: lDists
    }
  }, [nodes, precalcLines, isGlobe])

  const { colors, lineColors } = useMemo(() => {
    return {
      colors: new Float32Array(nodes.length * 3),
      lineColors: new Float32Array(precalcLines.length * 6)
    }
  }, [nodes, precalcLines])

  useFrame((state) => {
    const p = scrollProgress.current
    const t = state.clock.elapsedTime

    if (pointsRef.current && linesRef.current) {
      // Rotation logic
      let targetRotX = 0
      let targetRotY = 0
      let targetRotZ = 0

      if (isGlobe) {
        targetRotY = (p * Math.PI) + (t * 0.05)
        if (p > 0.2) {
          targetRotX = (p - 0.2) * Math.PI * 0.1
        }
      } else {
        if (p > 0.8) {
          targetRotX = -Math.PI * 0.15 
          targetRotY = Math.PI * 0.05 
          targetRotZ = t * 0.015 
        } else if (p > 0.2) {
          targetRotX = (p - 0.2) * Math.PI * 0.08
          targetRotZ = (p - 0.2) * Math.PI * 0.05
        }
      }

      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotX, 0.05)
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotY, 0.05)
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, targetRotZ, 0.05)
      
      linesRef.current.rotation.copy(pointsRef.current.rotation)
      if (hubsRef.current) hubsRef.current.rotation.copy(pointsRef.current.rotation)

      // Spreading Logic
      let revealRadius = 0.5
      if (isGlobe) {
        if (p > 0.5) {
          revealRadius = 0.5 + ((p - 0.5) * 60.0) 
        } else {
          revealRadius = 0.5
        }
      } else {
        revealRadius = 0.08
        if (p > 0.15) {
          revealRadius = 0.08 + ((p - 0.15) * 6.0)
        }
      }

      // OPTIMIZATION: Skip heavy loops if entirely invisible (early stage)
      const isEarlyStage = (!isGlobe && p < 0.1) || (isGlobe && p < 0.5);
      
      if (!isEarlyStage) {
        // Pre-extract colors to avoid object property lookups inside loop
        const hr = hubColor.r, hg = hubColor.g, hb = hubColor.b;
        const br = baseColor.r, bg = baseColor.g, bb = baseColor.b;
        const bkR = blackColor.r, bkG = blackColor.g, bkB = blackColor.b;
        
        let pointsNeedsUpdate = false;
        const ptsColorAttr = pointsRef.current.geometry.attributes.color
        const ptsArray = ptsColorAttr.array;
        
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i]
          
          let tr = bkR, tg = bkG, tb = bkB;
          if (node.dist < revealRadius) {
            if (node.isHub) {
              tr = hr; tg = hg; tb = hb;
            } else {
              tr = br; tg = bg; tb = bb;
            }
          }
          
          const rIdx = i * 3
          const cr = ptsArray[rIdx]
          const cg = ptsArray[rIdx+1]
          const cb = ptsArray[rIdx+2]

          if (Math.abs(cr - tr) > 0.001 || Math.abs(cg - tg) > 0.001 || Math.abs(cb - tb) > 0.001) {
            ptsArray[rIdx] = cr + (tr - cr) * 0.1
            ptsArray[rIdx+1] = cg + (tg - cg) * 0.1
            ptsArray[rIdx+2] = cb + (tb - cb) * 0.1
            pointsNeedsUpdate = true
          }
        }
        if (pointsNeedsUpdate) ptsColorAttr.needsUpdate = true

        // Update Line Colors
        const maxLineIntensity = p > 0.4 ? 0.6 : 0.2 
        let linesNeedsUpdate = false;
        const linesColorAttr = linesRef.current.geometry.attributes.color
        const linesArray = linesColorAttr.array;
        
        for (let i = 0; i < precalcLines.length; i++) {
          const distA = lineDistances[i * 2]
          const distB = lineDistances[i * 2 + 1]
          
          let targetIntensity = 0
          if (distA < revealRadius && distB < revealRadius && (isGlobe ? p > 0.5 : p > 0.2)) {
            targetIntensity = maxLineIntensity
          }

          const tr = hr * targetIntensity
          const tg = hg * targetIntensity
          const tb = hb * targetIntensity

          const rIdx = i * 6
          const cr = linesArray[rIdx]
          const cg = linesArray[rIdx+1]
          const cb = linesArray[rIdx+2]

          if (Math.abs(cr - tr) > 0.001 || Math.abs(cg - tg) > 0.001 || Math.abs(cb - tb) > 0.001) {
            const nr = cr + (tr - cr) * 0.1
            const ng = cg + (tg - cg) * 0.1
            const nb = cb + (tb - cb) * 0.1
            
            linesArray[rIdx] = nr
            linesArray[rIdx+1] = ng
            linesArray[rIdx+2] = nb
            linesArray[rIdx+3] = nr
            linesArray[rIdx+4] = ng
            linesArray[rIdx+5] = nb
            linesNeedsUpdate = true
          }
        }
        if (linesNeedsUpdate) linesColorAttr.needsUpdate = true
      }

      // Master Opacity Logic
      let targetOpacity = 1
      if (isGlobe) {
        if (p < 0.6) targetOpacity = 0
        else if (p > 0.8) targetOpacity = 1
        else targetOpacity = (p - 0.6) / 0.2
      } else {
        if (p < 0.6) targetOpacity = 1
        else if (p > 0.8) targetOpacity = 0
        else targetOpacity = 1 - ((p - 0.6) / 0.2)
      }

      pointsRef.current.material.opacity = THREE.MathUtils.lerp(pointsRef.current.material.opacity, targetOpacity, 0.1)
      linesRef.current.material.opacity = THREE.MathUtils.lerp(linesRef.current.material.opacity, targetOpacity, 0.1)
      
      if (groupRef.current) {
        groupRef.current.visible = pointsRef.current.material.opacity > 0.01
      }

      // Stage 3 Z-Displacement
      if (!isGlobe) {
        const targetScaleZ = p > 0.4 ? 1 + (p - 0.4) * 4 : 1
        pointsRef.current.scale.z = THREE.MathUtils.lerp(pointsRef.current.scale.z, targetScaleZ, 0.05)
        linesRef.current.scale.z = pointsRef.current.scale.z
        if (hubsRef.current) hubsRef.current.scale.z = pointsRef.current.scale.z
      } else {
        const targetScale = p > 0.4 ? 1 + (p - 0.4) * 0.1 : 1
        pointsRef.current.scale.set(targetScale, targetScale, targetScale)
        linesRef.current.scale.set(targetScale, targetScale, targetScale)
        if (hubsRef.current) hubsRef.current.scale.set(targetScale, targetScale, targetScale)
      }

      // Hubs Pulse
      if (hubsRef.current) {
        const hubMat = hubsRef.current.material
        if (p > 0.6 && (isGlobe || targetOpacity > 0.5)) {
          hubMat.opacity = (0.5 + Math.sin(t * 5) * 0.5) * targetOpacity
          hubMat.size = 0.5 + Math.sin(t * 3) * 0.2
        } else {
          hubMat.opacity = THREE.MathUtils.lerp(hubMat.opacity, (p > 0.1 ? 0.8 : 0) * targetOpacity, 0.1)
          hubMat.size = THREE.MathUtils.lerp(hubMat.size, 0.3, 0.1)
        }
      }
    }
  })

  return (
    <group ref={groupRef} scale={scaleFactor} visible={isGlobe ? false : true}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.06} vertexColors={true} transparent opacity={isGlobe ? 0 : 1} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation={true} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={lineColors.length / 3} array={lineColors} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial vertexColors={true} transparent opacity={isGlobe ? 0 : 1} blending={THREE.AdditiveBlending} depthWrite={false} />
      </lineSegments>

      <points ref={hubsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={hubPositions.length / 3} array={hubPositions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.3} color="#E8621A" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} sizeAttenuation={true} />
      </points>
    </group>
  )
}

export default function IndiaNetworkCanvas({ scrollProgress }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#010b14] -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'high-performance', antialias: false }}
      >
        <ambientLight intensity={0.5} />
        {indiaData.points && (
          <NetworkMesh key={`india-${indiaData.points.length}`} nodes={indiaData.points} precalcLines={indiaData.lines || []} scrollProgress={scrollProgress} isGlobe={false} />
        )}
        {worldData.points && (
          <NetworkMesh key={`globe-${worldData.points.length}`} nodes={worldData.points} precalcLines={worldData.lines || []} scrollProgress={scrollProgress} isGlobe={true} />
        )}
      </Canvas>
    </div>
  )
}
