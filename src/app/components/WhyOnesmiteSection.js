'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Lightbulb, Server, Brain } from 'lucide-react'

const NEEDS = [
  {
    icon: Code2,
    title: 'Purpose-Built Technology',
    description: 'Software designed specifically for complex enterprise contexts, robust regulations, and high-scale workflows — not adapted from generic platforms.',
  },
  {
    icon: Lightbulb,
    title: 'A Culture of Innovation',
    description: 'The industry must move from being an IT services economy to a product and innovation economy. That shift requires companies willing to build from scratch.',
  },
  {
    icon: Server,
    title: 'Sovereign Infrastructure',
    description: 'Data, compute, and connectivity that are scalable, secure, and built with the reliability that modern global institutions demand.',
  },
  {
    icon: Brain,
    title: 'Context-Aware AI',
    description: 'Artificial intelligence systems trained on localized contexts, specific industry needs, and diverse languages — maximizing relevance for actual users.',
  },
]

function NeedRow({ need, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = need.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1.5rem',
        padding: '1.75rem 1.5rem',
        borderLeft: '2px solid rgba(232,98,26,0.3)',
        background: 'rgba(255,255,255,0.025)',
        borderRadius: '0 6px 6px 0',
        transition: 'border-color 250ms ease, background 250ms ease',
        cursor: 'default',
      }}
      whileHover={{ borderLeftColor: 'rgba(232,98,26,0.8)', background: 'rgba(255,255,255,0.04)' }}
    >
      <div
        style={{
          flexShrink: 0,
          width: '42px',
          height: '42px',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid rgba(232,98,26,0.2)',
          background: 'rgba(232,98,26,0.07)',
          borderRadius: '6px',
        }}
      >
        <Icon size={18} color="var(--saffron)" />
      </div>
      <div>
        <h3
          style={{
            fontFamily: 'var(--font-syne)',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#f0f4f8',
            marginBottom: '0.5rem',
            letterSpacing: '-0.01em',
          }}
        >
          {need.title}
        </h3>
        <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#8fa3b8' }}>
          {need.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyOnesmiteSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section
      className="section-navy section-container-lg"
      aria-labelledby="why-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, var(--bg-navy) 0%, #01192e 100%)',
      }}
    >
      {/* Radial ambient */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 50% at 100% 50%, rgba(2,62,105,0.18) 0%, transparent 70%)',
        }}
      />

      <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gap: '5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'start',
          }}
        >
          {/* Left: headline + quote */}
          <div ref={headRef} style={{ position: 'sticky', top: '120px' }}>
            <motion.span
              className="eyebrow eyebrow-dark"
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '1.75rem', display: 'inline-flex' }}
            >
              Why Onesmite Was Created
            </motion.span>

            <motion.h2
              id="why-heading"
              className="section-headline"
              initial={{ opacity: 0, y: 22 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 }}
              style={{ color: '#f0f4f8', maxWidth: '440px' }}
            >
              A question that demanded{' '}
              <span className="text-gradient-saffron">an answer.</span>
            </motion.h2>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22 }}
              style={{
                marginTop: '2rem',
                padding: '1.75rem',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '6px',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.15rem',
                  fontWeight: 600,
                  color: '#c8d6e0',
                  lineHeight: 1.55,
                  fontStyle: 'italic',
                }}
              >
                "Why should a nation of more than a billion people depend entirely
                on technologies built elsewhere?"
              </p>
              <footer
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '2px',
                    background: 'var(--saffron)',
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#5a7490',
                  }}
                >
                  Ashish Kumar · Founder
                </span>
              </footer>
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32 }}
              style={{ marginTop: '1.5rem', fontSize: '0.92rem', lineHeight: 1.75, color: '#6b8299' }}
            >
              This question is not rhetorical. It is the founding imperative
              behind every decision Onesmite makes.
            </motion.p>
          </div>

          {/* Right: need pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {NEEDS.map((need, i) => (
              <NeedRow key={need.title} need={need} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
