'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const IndiaNetworkCanvas = dynamic(
  () => import('./three/IndiaNetworkCanvas'),
  { ssr: false, loading: () => null }
)

const HeroParticlesCanvas = dynamic(
  () => import('./three/HeroParticlesCanvas'),
  { ssr: false, loading: () => null }
)

// Optimized CSS animation shorthand for initial entry
const revealStyle = (delayMs) => ({
  animation: `reveal-up 0.85s cubic-bezier(0.16, 1, 0.3, 1) both`,
  animationDelay: `${delayMs}ms`,
})

export default function HeroSection() {
  const containerRef = useRef(null)
  const scrollProgress = useRef(0)
  const [showCanvas, setShowCanvas] = useState(false)
  const [activeStage, setActiveStage] = useState(0)
  const [renderParticles, setRenderParticles] = useState(true)

  useEffect(() => {
    if (activeStage > 0) {
      const timeout = setTimeout(() => setRenderParticles(false), 1500)
      return () => clearTimeout(timeout)
    } else {
      setRenderParticles(true)
    }
  }, [activeStage])

  useEffect(() => {
    // Delay canvas mount for performance
    const timer = setTimeout(() => setShowCanvas(true), 50)

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()

      // Calculate scroll progress from 0 to 1 over the 500vh container
      const scrollY = -rect.top
      const maxScroll = rect.height - window.innerHeight
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1)

      scrollProgress.current = progress

      // Determine active stage for text highlighting (5 stages total)
      const stage = Math.min(Math.floor(progress * 5), 4)
      if (stage !== activeStage) {
        setActiveStage(stage)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeStage])

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      aria-label="Hero — The India Network"
      style={{
        height: '500vh',
        background: '#010b14',
      }}
    >
      {/* Sticky 3D Background */}
      <div
        className="sticky top-0 w-full h-screen overflow-hidden"
        style={{ zIndex: 0 }}
      >
        {/* Ambient radial glows */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            transform: 'translateZ(0)',
            background: `
              radial-gradient(ellipse 55% 45% at 20% 30%, rgba(2,62,105,0.22) 0%, transparent 70%),
              radial-gradient(ellipse 40% 35% at 80% 70%, rgba(232,98,26,0.06) 0%, transparent 65%)
            `,
          }}
        />

        {/* 3D Canvas */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: showCanvas ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        >
          {showCanvas && <IndiaNetworkCanvas scrollProgress={scrollProgress} />}
        </div>

        {/* 3D Canvas - Hero Particles (First Stage Only) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: showCanvas && activeStage === 0 ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 1,
          }}
        >
          {showCanvas && renderParticles && <HeroParticlesCanvas />}
        </div>
      </div>

      {/* Scrolling Text Sections (Z-index above background) */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">

        {/* Stage 1: The Origin */}
        <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl pointer-events-auto" style={revealStyle(100)}>
            <span className="eyebrow eyebrow-dark mb-6 inline-flex">
              The Origin · Bihar · India
            </span>
            <h1 className="display-headline text-[#f0f4f8] mt-6">
              A Spark of <span className="text-gradient-brand">Innovation</span>.
            </h1>
            <p className="mt-7 text-[clamp(1rem,2vw,1.2rem)] leading-relaxed text-[#8fa3b8] max-w-2xl">
              Every great transformation begins with a single idea. Onesmite was founded on a fundamental belief: world-class technology can be imagined, built, and led from India. What begins as a spark today has the potential to shape the digital landscape of tomorrow.
            </p>
          </div>
        </div>

        {/* Stage 2: Connecting India */}
        <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f0f4f8] font-syne tracking-tight">
              Connecting the <span className="text-[#00f0ff]">Nation</span>.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-[#8fa3b8] max-w-2xl">
              Technology possesses the power to bridge people, ideas, and opportunities. Our vision is to support India's digital evolution through scalable platforms, robust infrastructure, and meaningful innovation designed to empower millions.
            </p>
          </div>
        </div>

        {/* Stage 3: A Sovereign Network */}
        <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f0f4f8] font-syne tracking-tight">
              Building the <span className="text-[#E8621A]">Foundation</span>.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-[#8fa3b8] max-w-2xl">
              Resilient digital ecosystems require strong, reliable foundations. We believe the future will be built on secure infrastructure, intelligent systems, and technologies architected to scale alongside India's growing ambitions.
            </p>
          </div>
        </div>

        {/* Stage 4: Looking Beyond Today */}
        <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-[#f0f4f8] font-syne tracking-tight">
              The Future Takes <span className="text-gradient-brand">Shape</span>.
            </h2>
            <p className="mt-7 text-xl leading-relaxed text-[#8fa3b8] max-w-2xl">
              The technologies that will define tomorrow are being engineered today. Through continuous research, purposeful innovation, and long-term strategic thinking, we are building toward a future powered by intelligence, seamless connectivity, and digital independence.
            </p>
          </div>
        </div>

        {/* Stage 5: Welcome to Onesmite */}
        <div className="h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
          <div className="max-w-3xl pointer-events-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-[#f0f4f8] font-syne tracking-tight">
              Welcome to <span className="text-[#00f0ff]">Onesmite</span>.
            </h2>
            <p className='text-sm lg:text-base text-[#8fa3b8]'>Born in Patna. Built for India. Designed for the World.</p>
            <div className="mt-7 text-base leading-relaxed text-[#8fa3b8] max-w-2xl">
              We are an emerging technology company building scalable platforms and intelligent infrastructure. Our mission starts with strengthening India's digital ecosystem today, driven by a vision to deliver world-class solutions globally tomorrow.
              <br /><br />
              <span className="text-[#f0f4f8] font-medium">This is where the journey begins.</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row mt-10">
              <Link href="#vision" className="btn btn-primary min-w-[200px]">
                Explore Our Vision
                <ArrowRight size={16} />
              </Link>
              <a href="https://edu.onesmite.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark min-w-[200px]">
                Discover Onesmite Educa
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
