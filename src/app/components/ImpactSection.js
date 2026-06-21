'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Layers, HeartHandshake, Wrench, ShieldCheck } from 'lucide-react'

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Start With Real Problems',
    description:
      'Onesmite Educa was built because real educators in India lacked affordable, professional-grade tools. Not a market gap from a spreadsheet — a need observed firsthand.',
  },
  {
    icon: Layers,
    title: 'Build the Full Stack',
    description:
      'From test creation to result delivery, every layer is owned by Onesmite — no stitching together foreign services for a core indigenous product.',
  },
  {
    icon: HeartHandshake,
    title: 'Designed Around Educators',
    description:
      'Teachers are not users. They are the product\'s authors. Every decision puts the educator\'s workflow, autonomy, and earnings at the center.',
  },
  {
    icon: Wrench,
    title: 'Reliability Over Features',
    description:
      'One thing working flawlessly is worth more than ten things working occasionally. Onesmite Educa is built to be dependable above all else.',
  },
  {
    icon: ShieldCheck,
    title: 'Priced For India, Not Silicon Valley',
    description:
      'Technology built for Indian educators must be priced for Indian incomes. Onesmite Educa is designed to be genuinely affordable — not aspirationally so.',
  },
]

function PrincipleCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = item.icon

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.09 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.1rem',
        padding: '1.4rem',
        border: '1px solid rgba(255,255,255,0.07)',
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '8px',
        transition: 'border-color 200ms ease',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '40px',
          height: '40px',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid rgba(232,98,26,0.2)',
          background: 'rgba(232,98,26,0.07)',
          borderRadius: '6px',
        }}
      >
        <Icon size={17} color="var(--saffron)" />
      </div>
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '1rem',
            fontWeight: 700,
            color: '#e0ecf4',
            letterSpacing: '-0.01em',
            marginBottom: '0.45rem',
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#5a7490' }}>
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function ImpactSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })

  return (
    <section
      aria-labelledby="build-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #010b12 0%, #010810 100%)',
        paddingBlock: 'clamp(5rem, 10vw, 8rem)',
      }}
    >
      {/* Ambient center glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(2,62,105,0.16) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>
        {/* Two-column layout: header left, principles right */}
        <div
          style={{
            display: 'grid',
            gap: '5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'start',
          }}
        >
          {/* Left: anchoring copy */}
          <div ref={headRef} style={{ position: 'sticky', top: '120px' }}>
            <motion.span
              className="eyebrow eyebrow-dark"
              initial={{ opacity: 0, y: 14 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '1.75rem', display: 'inline-flex' }}
            >
              How Onesmite Builds
            </motion.span>

            <motion.h2
              id="build-heading"
              className="section-headline"
              initial={{ opacity: 0, y: 22 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              style={{ color: '#f0f4f8', maxWidth: '420px' }}
            >
              Principles, not{' '}
              <span className="text-gradient-saffron">promises.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                marginTop: '1.5rem',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                color: '#4a6070',
                maxWidth: '380px',
              }}
            >
              Onesmite Educa is launching soon. We won't manufacture numbers or claim
              scale we haven't earned. What we can tell you is how we build —
              and why that matters more than any metric right now.
            </motion.p>

            {/* Launch soon badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.32 }}
              style={{
                marginTop: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.7rem 1.2rem',
                border: '1px solid rgba(232,98,26,0.3)',
                background: 'rgba(232,98,26,0.06)',
                borderRadius: '8px',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--saffron)',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: '#e0c9a0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Onesmite Educa — Launching Soon
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#5a7490',
                    marginTop: '2px',
                  }}
                >
                  First initiative · India-first
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: build principles */}
          <div ref={cardsRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PRINCIPLES.map((item, i) => (
              <PrincipleCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
