'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const ParticleFieldCanvas = dynamic(
  () => import('./three/ParticleFieldCanvas'),
  { ssr: false, loading: () => null }
)

export default function FinalStatementSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      aria-labelledby="final-statement-heading"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #010b12 0%, #020d18 50%, #010810 100%)',
      }}
    >
      {/* Particle field canvas */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      >
        <ParticleFieldCanvas />
      </div>

      {/* Radial brand glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(2,62,105,0.22) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      {/* Bottom saffron horizon line */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(232,98,26,0.5), transparent)',
        }}
      />

      {/* Content */}
      <div
        className="page-shell"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          paddingBlock: '6rem',
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <span className="eyebrow eyebrow-dark" style={{ display: 'inline-flex' }}>
            The Onesmite Commitment
          </span>
        </motion.div>

        {/* Main headline — two-line cinematic */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <h2
            id="final-statement-heading"
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2.5rem, 7vw, 6.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.04,
              maxWidth: '1000px',
              marginInline: 'auto',
            }}
          >
            <span
              style={{
                display: 'block',
                color: '#f0f4f8',
              }}
            >
              We should not only
            </span>
            <span
              style={{
                display: 'block',
                color: '#f0f4f8',
              }}
            >
              use technology.
            </span>
            <span
              className="text-gradient-saffron"
              style={{
                display: 'block',
                marginTop: '0.1em',
              }}
            >
              We should build it.
            </span>
          </h2>
        </motion.div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.28 }}
          style={{
            marginTop: '2.25rem',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            lineHeight: 1.75,
            color: '#6b8299',
            maxWidth: '600px',
            marginInline: 'auto',
          }}
        >
          Onesmite is working toward a future where world-class technology can be
          imagined, built, and led from India — for the world.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.42 }}
          style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="https://edu.onesmite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ minWidth: '180px', fontSize: '1rem', padding: '1rem 2rem' }}
          >
            Join The Journey
            <ArrowRight size={18} />
          </a>
          <a
            href="/contact"
            className="btn btn-ghost-dark"
            style={{ minWidth: '180px', fontSize: '1rem', padding: '1rem 2rem' }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            marginTop: '5rem',
            fontFamily: 'var(--font-jetbrains-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#2a3a4a',
          }}
        >
          Onesmite · Patna, Bihar, India · Built for the long term
        </motion.p>
      </div>
    </section>
  )
}
