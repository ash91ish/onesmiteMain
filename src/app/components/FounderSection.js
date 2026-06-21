'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Quote } from 'lucide-react'

const MISSION_POINTS = [
  'Technology without borders, built by people who understand this land.',
  'From the heart of Bihar — proof that ambition and talent exist everywhere in India.',
  'Long-horizon thinking. Not chasing trends, but building infrastructure that endures.',
  'A commitment to make world-class technology a product of India, not just a service to it.',
]

export default function FounderSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-light section-container-lg"
      aria-labelledby="founder-heading"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Top border accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, var(--saffron), transparent)',
          opacity: 0.5,
        }}
      />

      <div
        ref={ref}
        className="page-shell"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            A Message From The Founder
          </span>
          <h2
            id="founder-heading"
            className="section-headline"
            style={{ color: 'var(--brand-deep)', maxWidth: '600px' }}
          >
            Leadership rooted in{' '}
            <span className="text-gradient-light">mission.</span>
          </h2>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: 'grid',
            gap: '4rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'start',
          }}
        >
          {/* Founder profile */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: '380px' }}
          >
            {/* Monogram avatar — placeholder until photo is added */}
            <div
              style={{
                width: '180px',
                height: '220px',
                background: 'linear-gradient(145deg, var(--brand-deep) 0%, var(--brand) 100%)',
                border: '2px solid rgba(2,62,105,0.25)',
                borderRadius: '8px',
                display: 'grid',
                placeItems: 'center',
                marginBottom: '1.75rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(2,62,105,0.2)',
              }}
            >
              {/* Decorative pattern */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
              {/* Monogram */}
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '4rem',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.9)',
                  letterSpacing: '-0.04em',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                AK
              </span>
              {/* Saffron corner accent */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '48px',
                  height: '48px',
                  background: 'var(--saffron)',
                  clipPath: 'polygon(100% 0, 0 100%, 100% 100%)',
                  opacity: 0.85,
                }}
              />
            </div>

            {/* Name & title */}
            <h3
              style={{
                fontFamily: 'var(--font-syne)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--brand-deep)',
                letterSpacing: '-0.02em',
                marginBottom: '4px',
              }}
            >
              Ashish Kumar
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--saffron)',
                marginBottom: '1rem',
              }}
            >
              Founder & CEO
            </p>

            {/* Location badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.8rem',
                border: '1px solid rgba(2,62,105,0.15)',
                background: 'rgba(2,62,105,0.05)',
                borderRadius: '999px',
              }}
            >
              <MapPin size={12} color="var(--brand)" />
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--brand)',
                }}
              >
                Patna, Bihar, India
              </span>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Opening quote */}
            <div style={{ position: 'relative', marginBottom: '2.5rem' }}>
              <Quote
                size={48}
                color="rgba(2,62,105,0.08)"
                style={{ position: 'absolute', top: '-8px', left: '-8px' }}
              />
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                  lineHeight: 1.8,
                  color: '#2a4060',
                  fontStyle: 'italic',
                  paddingLeft: '0.5rem',
                  position: 'relative',
                  zIndex: 1,
                  fontFamily: 'var(--font-syne)',
                  fontWeight: 500,
                }}
              >
                Onesmite is not a startup chasing a market. It is a long-term commitment
                to building technology that we can call our own — from the ground up,
                with the seriousness this mission demands.
              </p>
            </div>

            {/* Mission points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {MISSION_POINTS.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--saffron)',
                      flexShrink: 0,
                      marginTop: '8px',
                    }}
                  />
                  <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: '#3a5470' }}>{point}</p>
                </motion.div>
              ))}
            </div>

            {/* Bihar callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{
                padding: '1.5rem',
                background: 'linear-gradient(135deg, rgba(2,62,105,0.06), rgba(2,62,105,0.03))',
                border: '1px solid rgba(2,62,105,0.12)',
                borderLeft: '3px solid var(--saffron)',
                borderRadius: '0 6px 6px 0',
              }}
            >
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#2a4060', fontStyle: 'italic' }}>
                From Bihar — a state that gave India some of its greatest minds throughout history —
                Onesmite demonstrates that world-class technology can emerge from
                <strong style={{ color: 'var(--brand)', fontStyle: 'normal' }}> anywhere in India.</strong>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
