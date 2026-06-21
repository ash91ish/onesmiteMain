'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Cpu, Network, MessageSquare, Languages, Cloud, FlaskConical } from 'lucide-react'

const DOMAINS = [
  {
    icon: Bot,
    title: 'Artificial Intelligence',
    description: 'Foundation models, applied AI, and decision systems built with diverse global data and enterprise institutional needs at the center.',
  },
  {
    icon: Cpu,
    title: 'Advanced Computing',
    description: 'High-performance computing systems designed for research, enterprise workloads, and national-scale data processing.',
  },
  {
    icon: Network,
    title: 'Digital Infrastructure',
    description: 'The physical and virtual rails that connect billions — reliable, sovereign, and built for unprecedented scale.',
  },
  {
    icon: MessageSquare,
    title: 'Large Language Models',
    description: 'Language AI that understands regional nuance — dialects, cultural context, bureaucracy, and everyday needs.',
  },
  {
    icon: Languages,
    title: 'Global Native Languages',
    description: 'Making technology truly accessible by building deeply localized language models that serve regional dialects worldwide.',
  },
  {
    icon: Cloud,
    title: 'Cloud Ecosystems',
    description: 'Sovereign cloud services purpose-built for stringent regulatory environments, complex data residency requirements, and enterprise demands.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Long-horizon investment in computing science, materials research, and breakthrough technologies with decade-long timelines.',
  },
]

function DomainCard({ domain, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = domain.icon

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      className="card-light"
      style={{ padding: '1.75rem', borderRadius: '8px' }}
    >
      <div
        style={{
          width: '42px',
          height: '42px',
          display: 'grid',
          placeItems: 'center',
          border: '1px solid rgba(2,62,105,0.12)',
          background: 'rgba(2,62,105,0.05)',
          borderRadius: '8px',
          marginBottom: '1.25rem',
        }}
      >
        <Icon size={18} color="var(--brand)" />
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--brand-deep)',
          letterSpacing: '-0.01em',
          marginBottom: '0.65rem',
        }}
      >
        {domain.title}
      </h3>
      <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#4a6070' }}>
        {domain.description}
      </p>

      {/* Future tag */}
      <div
        style={{
          marginTop: '1.25rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.25rem 0.65rem',
          border: '1px solid rgba(2,62,105,0.1)',
          background: 'rgba(2,62,105,0.04)',
          borderRadius: '999px',
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '0.58rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#7a90a5',
        }}
      >
        Long-term Vision
      </div>
    </motion.article>
  )
}

export default function TechnologyFutureSection() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  return (
    <section
      className="section-light section-container-lg"
      aria-labelledby="tech-future-heading"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Bottom fade-out for transition */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, rgba(248,249,250,0.9))',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="page-shell" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div ref={headRef} style={{ maxWidth: '760px', marginBottom: '4rem' }}>
          <motion.span
            className="eyebrow eyebrow-light"
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.25rem', display: 'inline-flex' }}
          >
            Looking Beyond Today
          </motion.span>
          <motion.h2
            id="tech-future-heading"
            className="section-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            style={{ color: 'var(--brand-deep)' }}
          >
            The full scope of what{' '}
            <span className="text-gradient-light">Onesmite is building toward.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ marginTop: '1.25rem', fontSize: '1rem', lineHeight: 1.8, color: '#4a6070', maxWidth: '620px' }}
          >
            None of these exist yet as standalone products. They are the long-horizon
            ambitions that shape every early decision. The foundation we build today
            is designed to support every layer above it.
          </motion.p>
        </div>

        {/* Domain grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {DOMAINS.map((domain, i) => (
            <DomainCard key={domain.title} domain={domain} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
