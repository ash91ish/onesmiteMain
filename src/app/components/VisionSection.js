'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Shield, Cpu, Users } from 'lucide-react'

const PILLARS = [
  {
    icon: Globe,
    headline: 'Technology is the Backbone of Modern Nations',
    body: 'The nations that lead the world are those that build the technology the world depends on. Infrastructure is not optional — it is sovereignty.',
  },
  {
    icon: Shield,
    headline: 'Digital Sovereignty Matters',
    body: 'When critical systems run on external platforms, strategic independence is limited. Societies must own the infrastructure they run on.',
  },
  {
    icon: Cpu,
    headline: 'Innovation Should Be Built Locally',
    body: 'Importing technology is not innovation — it is dependence. Real innovation is the act of creating what did not exist before, from where you are.',
  },
  {
    icon: Users,
    headline: 'We Must Be Creators, Not Just Consumers',
    body: 'With immense global talent and unmet challenges worldwide, we have every reason to build — and every capability to lead on a global scale.',
  },
]

function PillarCard({ pillar, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = pillar.icon

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="card-light"
      style={{ padding: '2rem', borderRadius: '6px' }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid rgba(2,62,105,0.15)',
          background: 'rgba(2,62,105,0.06)',
          borderRadius: '6px',
          marginBottom: '1.5rem',
        }}
      >
        <Icon size={20} color="var(--brand)" />
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--brand-deep)',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
          marginBottom: '0.75rem',
        }}
      >
        {pillar.headline}
      </h3>
      <p style={{ fontSize: '0.925rem', lineHeight: 1.75, color: '#4a6070' }}>
        {pillar.body}
      </p>
    </motion.article>
  )
}

export default function VisionSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section
      id="vision"
      className="section-cream section-container-lg"
      aria-labelledby="vision-heading"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Very subtle bg grid */}
      <div
        aria-hidden="true"
        className="bg-grid-light"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          pointerEvents: 'none',
          maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
        }}
      />

      <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <div ref={headRef} style={{ maxWidth: '800px', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow eyebrow-light" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              A Vision Beyond Software
            </span>
          </motion.div>

          <motion.h2
            id="vision-heading"
            className="section-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ color: 'var(--brand-deep)' }}
          >
            Technology defines what nations{' '}
            <span className="text-gradient-light">can become.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            style={{
              marginTop: '1.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#3a5470',
              maxWidth: '640px',
            }}
          >
            Onesmite exists because we believe that the trajectory of our digital future
            depends on whether we choose to build sovereign infrastructure — or simply consume what others have built.
          </motion.p>
        </div>

        {/* Large pull quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          style={{
            maxWidth: '820px',
            margin: '0 auto 4.5rem auto',
            padding: '2.5rem 2rem 2.5rem 2.5rem',
            borderLeft: '3px solid var(--saffron)',
            background: 'rgba(2,62,105,0.04)',
            borderRadius: '0 8px 8px 0',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(1.35rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--brand)',
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              fontStyle: 'italic',
            }}
          >
            "The measure of technological maturity is not how well we
            adopt third-party platforms — but how well we build our own sovereign infrastructure."
          </p>
          <footer style={{ marginTop: '1rem', fontSize: '0.82rem', color: '#7a90a5', fontStyle: 'normal' }}>
            — The Onesmite Founding Principle
          </footer>
        </motion.blockquote>

        {/* 4-pillar grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.headline} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
