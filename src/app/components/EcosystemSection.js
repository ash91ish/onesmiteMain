'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, BookOpen, Brain, Cloud, Layers, Building, FlaskConical, Lock } from 'lucide-react'

const INITIATIVES = [
  {
    id: 'educa',
    status: 'active',
    label: 'Active Initiative',
    icon: BookOpen,
    title: 'Onesmite Educa',
    description:
      'AI-powered educational technology platform empowering teachers and students through intelligent assessment, classroom management, and digital learning tools.',
    tags: ['AI Assessment', 'Teacher Tools', 'Student Analytics'],
    href: 'https://edu.onesmite.com',
  },
  {
    id: 'ai',
    status: 'future',
    label: 'Future Vision',
    icon: Brain,
    title: 'Artificial Intelligence',
    description:
      'Foundational AI research and applied systems built for regional languages, contexts, and institutional needs.',
    tags: ['LLMs', 'Regional Languages', 'Applied AI'],
  },
  {
    id: 'cloud',
    status: 'future',
    label: 'Future Vision',
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'Sovereign cloud services and computing infrastructure designed for scalable enterprises, institutions, and government.',
    tags: ['Sovereign Cloud', 'Enterprise', 'Data Centers'],
  },
  {
    id: 'platforms',
    status: 'future',
    label: 'Future Vision',
    icon: Layers,
    title: 'Digital Platforms',
    description:
      'Public and enterprise digital platforms that power commerce, governance, education, and civic services at scale.',
    tags: ['Digital India', 'Enterprise SaaS', 'Civic Tech'],
  },
  {
    id: 'enterprise',
    status: 'future',
    label: 'Future Vision',
    icon: Building,
    title: 'Enterprise Technology',
    description:
      'Mission-critical software for large organizations, government agencies, and public institutions that demand reliability and trust.',
    tags: ['Enterprise', 'Government Tech', 'Reliability'],
  },
  {
    id: 'research',
    status: 'future',
    label: 'Future Vision',
    icon: FlaskConical,
    title: 'Research & Innovation',
    description:
      'A dedicated R&D function investing in long-horizon computing research, emerging technologies, and breakthrough innovations.',
    tags: ['R&D', 'Computing', 'Innovation Labs'],
  },
]

function InitiativeCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hovered, setHovered] = useState(false)
  const Icon = item.icon
  const isActive = item.status === 'active'

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '1.75rem',
        border: isActive
          ? '1px solid rgba(232,98,26,0.35)'
          : '1px solid rgba(255,255,255,0.07)',
        background: isActive
          ? 'linear-gradient(145deg, rgba(232,98,26,0.06), rgba(2,62,105,0.08))'
          : 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
        borderRadius: '8px',
        transition: 'border-color 250ms ease, background 250ms ease, transform 250ms ease, box-shadow 250ms ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? isActive
            ? '0 20px 60px rgba(232,98,26,0.12)'
            : '0 20px 60px rgba(0,0,0,0.3)'
          : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, var(--saffron), transparent)',
          }}
        />
      )}

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            display: 'grid',
            placeItems: 'center',
            border: isActive ? '1px solid rgba(232,98,26,0.25)' : '1px solid rgba(255,255,255,0.08)',
            background: isActive ? 'rgba(232,98,26,0.08)' : 'rgba(255,255,255,0.04)',
            borderRadius: '6px',
          }}
        >
          <Icon size={18} color={isActive ? 'var(--saffron)' : '#6b8299'} />
        </div>

        {isActive ? (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.65rem',
              border: '1px solid rgba(232,98,26,0.3)',
              background: 'rgba(232,98,26,0.08)',
              borderRadius: '999px',
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--saffron)',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--saffron)',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            />
            {item.label}
          </span>
        ) : (
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.3rem 0.65rem',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '999px',
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#5a7490',
            }}
          >
            <Lock size={9} />
            {item.label}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '1.15rem',
          fontWeight: 700,
          color: isActive ? '#f0f4f8' : '#8fa3b8',
          letterSpacing: '-0.015em',
          marginBottom: '0.75rem',
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.7,
          color: isActive ? '#8fa3b8' : '#4a6070',
          marginBottom: '1.25rem',
        }}
      >
        {item.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: isActive ? '1.25rem' : 0 }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.25rem 0.55rem',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: '4px',
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.05em',
              color: '#5a7490',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA for active only */}
      {isActive && item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--saffron)',
            textDecoration: 'none',
          }}
        >
          Explore Onesmite Educa
          <ArrowUpRight size={14} />
        </a>
      )}
    </motion.article>
  )
}

export default function EcosystemSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section
      className="section-deep section-container-lg"
      aria-labelledby="ecosystem-heading"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #010b12 0%, #020f18 100%)',
      }}
    >
      {/* Dot grid bg */}
      <div
        aria-hidden="true"
        className="bg-dot-dark"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.7,
          pointerEvents: 'none',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)',
        }}
      />

      <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section head */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '700px', marginInline: 'auto' }}>
          <motion.span
            className="eyebrow eyebrow-dark"
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem', display: 'inline-flex' }}
          >
            The Onesmite Ecosystem
          </motion.span>
          <motion.h2
            id="ecosystem-heading"
            className="section-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            style={{ color: '#f0f4f8' }}
          >
            One ecosystem.{' '}
            <span className="text-gradient-brand">Multiple futures.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.75, color: '#6b8299' }}
          >
            Onesmite is building a family of technology initiatives — beginning with
            education and expanding outward as each layer achieves scale and sustainability.
          </motion.p>
        </div>

        {/* Card grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {INITIATIVES.map((item, i) => (
            <InitiativeCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
