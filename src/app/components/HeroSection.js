'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const IndiaNetworkCanvas = dynamic(
  () => import('./three/IndiaNetworkCanvas'),
  { ssr: false, loading: () => null }
)

import { useState, useEffect } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export default function HeroSection() {
  const [showCanvas, setShowCanvas] = useState(false)

  useEffect(() => {
    // Delay mounting the heavy WebGL Canvas by 800ms. 
    // This allows the critical Framer Motion text animations to finish 
    // completely smoothly without main-thread freezing or "fluctuation/stutter".
    const timer = setTimeout(() => setShowCanvas(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Hero — Building the Digital Future of India"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #010b14 0%, #020d18 40%, #021420 70%, #030f1b 100%)',
      }}
    >
      {/* Ambient radial glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(ellipse 55% 45% at 20% 30%, rgba(2,62,105,0.22) 0%, transparent 70%),
            radial-gradient(ellipse 40% 35% at 80% 70%, rgba(232,98,26,0.06) 0%, transparent 65%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        aria-hidden="true"
        className="bg-grid-dark"
        style={{
          position: 'absolute',
          inset: 0,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* 3D Canvas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showCanvas ? 0.65 : 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        {showCanvas && <IndiaNetworkCanvas />}
      </motion.div>

      {/* Content */}
      <div
        className="page-shell relative z-10 flex flex-col justify-center"
        style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div style={{ maxWidth: '900px' }}>
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="eyebrow eyebrow-dark" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
              India · Technology · Future
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={0.12}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="display-headline"
            style={{
              color: '#f0f4f8',
              marginTop: '1.5rem',
              maxWidth: '820px',
            }}
          >
            Building the{' '}
            <span className="text-gradient-brand">Digital Future</span>
            <br />of India.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={0.24}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              marginTop: '1.75rem',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.75,
              color: '#8fa3b8',
              maxWidth: '640px',
            }}
          >
            Creating indigenous technology, intelligent systems, and digital
            infrastructure for the next generation. Technology designed,
            developed, and operated from Patna, Bihar.
          </motion.p>

          {/* Mission line */}
          <motion.div
            custom={0.35}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              marginTop: '1.25rem',
              paddingLeft: '1rem',
              borderLeft: '2px solid rgba(232,98,26,0.5)',
              maxWidth: '560px',
            }}
          >
            <p style={{ fontSize: '0.95rem', color: '#6b8299', fontStyle: 'italic', lineHeight: 1.65 }}>
              Empowering businesses, institutions, educators, creators, and citizens
              through sovereign technology built for the world.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={0.44}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row"
            style={{ marginTop: '2.75rem' }}
          >
            <Link
              href="#vision"
              className="btn btn-primary"
              style={{ minWidth: '200px' }}
            >
              Explore Our Vision
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://edu.onesmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-dark"
              style={{ minWidth: '200px' }}
            >
              Discover Onesmite Educa
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            custom={0.55}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ marginTop: '4rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}
          >
            {[
              { value: 'Educa', label: 'First Initiative' },
              { value: 'India', label: 'Primary Market' },
              { value: 'Long-term', label: 'Build Philosophy' },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    color: '#f0f4f8',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#5a7490',
                    marginTop: '4px',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#5a7490',
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} color="#5a7490" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
