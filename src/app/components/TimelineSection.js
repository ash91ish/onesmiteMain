'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Cpu, Brain, Globe2, Trophy } from 'lucide-react'
import dynamic from 'next/dynamic'


const TimelineCanvas = dynamic(() => import('./three/TimelineCanvas'), { ssr: false })
const Timeline3DButtons = dynamic(() => import('./three/Timeline3DButtons'), { ssr: false })

const STAGES = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Education Technology',
    timeframe: 'Now → 2026',
    status: 'active',
    description:
      'Launch, scale, and achieve product-market fit with Onesmite Educa. Build a profitable, trusted education technology platform nationwide. Establish the first proof of point that Onesmite can build products people depend on.',
    milestones: ['Onesmite Educa launch', 'Teacher monetization tools', 'AI-powered assessments', 'National student coverage'],
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Intelligent Platforms',
    timeframe: '2026 → 2028',
    status: 'planned',
    description:
      'Build the second generation of Onesmite products — intelligent, data-rich platforms that use learnings from the education vertical to operate smarter, leaner, and faster.',
    milestones: ['Platform AI layer', 'Cross-product data insights', 'Enterprise partnerships', 'New vertical launch'],
  },
  {
    number: '03',
    icon: Brain,
    title: 'AI Infrastructure',
    timeframe: '2028 → 2031',
    status: 'vision',
    description:
      'Build the AI infrastructure that Onesmite\'s products and next-generation institutions need — foundation models, inference infrastructure, and intelligent systems built for Indian contexts.',
    milestones: ['Regional LLM research', 'AI compute infrastructure', 'Enterprise AI services', 'Government partnerships'],
  },
  {
    number: '04',
    icon: Globe2,
    title: 'Digital Ecosystems',
    timeframe: '2031 → 2035',
    status: 'vision',
    description:
      'Create interconnected digital ecosystems that serve citizens globally, institutions, and enterprises — sovereign, scalable, and built for decades of operation.',
    milestones: ['National digital infrastructure', 'Cross-sector integration', 'Sovereign cloud layer', 'Civic technology platforms'],
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Global Technology Leadership',
    timeframe: '2035 and Beyond',
    status: 'vision',
    description:
      'Position Onesmite as a global technology company that competes at the highest level — products and platforms that the world uses, built in India, scaling globally.',
    milestones: ['Global product expansion', 'International partnerships', 'R&D at frontier', 'Technology export leadership'],
  },
]

export default function TimelineSection() {
  const [activeStage, setActiveStage] = useState(0)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px' })

  const stage = STAGES[activeStage]
  const Icon = stage.icon

  return (
    <section
      className="section-container-lg"
      aria-labelledby="timeline-heading"
      style={{
        background: 'linear-gradient(180deg, #010810 0%, #010b14 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <TimelineCanvas />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(2,62,105,0.14) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '660px', marginInline: 'auto' }}>
          <motion.span
            className="eyebrow eyebrow-dark"
            initial={{ opacity: 0, y: 14 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.25rem', display: 'inline-flex' }}
          >
            The Journey Ahead
          </motion.span>
          <motion.h2
            id="timeline-heading"
            className="section-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            style={{ color: '#f0f4f8' }}
          >
            A roadmap built for{' '}
            <span className="text-gradient-brand">the long term.</span>
          </motion.h2>
        </div>

        {/* Stage selector — horizontal tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.22 }}
          style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            marginBottom: '3rem',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: '12px',
            padding: '8px 8px 16px 8px', // Extra bottom padding for 3D shadows
            background: 'rgba(255,255,255,0.025)',
            scrollbarWidth: 'none',
          }}
        >
          {STAGES.map((s, i) => {
            const SIcon = s.icon
            const isActive = activeStage === i
            return (
              <button
                key={s.number}
                onClick={() => setActiveStage(i)}
                style={{
                  flex: '1 0 auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.9rem 1.2rem',
                  border: 'none',
                  background: isActive
                    ? s.status === 'active'
                      ? 'linear-gradient(145deg, rgba(232,98,26,0.25) 0%, rgba(232,98,26,0.05) 100%)'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 100%)'
                    : 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.0) 100%)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  outline: 'none',
                  boxShadow: isActive
                    ? s.status === 'active'
                      ? 'inset 0px 1px 1px rgba(255,255,255,0.4), 0px 4px 0px #8a3a0d, 0px 6px 15px rgba(232,98,26,0.4)'
                      : 'inset 0px 1px 1px rgba(255,255,255,0.3), 0px 4px 0px rgba(255,255,255,0.05), 0px 6px 15px rgba(0,0,0,0.6)'
                    : 'inset 0px 1px 1px rgba(255,255,255,0.05), 0px 4px 0px rgba(0,0,0,0.3), 0px 6px 10px rgba(0,0,0,0.4)',
                  transform: isActive ? 'translateY(2px)' : 'translateY(0px)',
                  position: 'relative',
                  marginTop: isActive ? '2px' : '0px', // Compensate for physical press
                  marginBottom: isActive ? '0px' : '2px', // Compensate for depth
                }}
                onMouseOver={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(1px)'
                    e.currentTarget.style.boxShadow = 'inset 0px 1px 1px rgba(255,255,255,0.1), 0px 3px 0px rgba(0,0,0,0.3), 0px 4px 8px rgba(0,0,0,0.4)'
                    e.currentTarget.style.marginTop = '1px'
                    e.currentTarget.style.marginBottom = '1px'
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(0px)'
                    e.currentTarget.style.boxShadow = 'inset 0px 1px 1px rgba(255,255,255,0.05), 0px 4px 0px rgba(0,0,0,0.3), 0px 6px 10px rgba(0,0,0,0.4)'
                    e.currentTarget.style.marginTop = '0px'
                    e.currentTarget.style.marginBottom = '2px'
                  }
                }}
              >
                <SIcon
                  size={18}
                  color={
                    isActive
                      ? s.status === 'active'
                        ? 'var(--saffron)'
                        : '#ffffff'
                      : '#6b8299'
                  }
                  style={{
                    filter: isActive && s.status === 'active' ? 'drop-shadow(0 0 8px rgba(232,98,26,0.6))' : 'none'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive ? (s.status === 'active' ? 'var(--saffron)' : '#ffffff') : '#6b8299',
                    whiteSpace: 'nowrap',
                    fontWeight: isActive ? '600' : '400',
                    textShadow: isActive && s.status === 'active' ? '0 0 10px rgba(232,98,26,0.4)' : 'none'
                  }}
                >
                  Stage {s.number}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Stage detail panel */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gap: '3rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            padding: '2.5rem',
            border: `1px solid ${stage.status === 'active' ? 'rgba(232,98,26,0.2)' : 'rgba(255,255,255,0.07)'}`,
            background: stage.status === 'active'
              ? 'linear-gradient(145deg, rgba(232,98,26,0.05), rgba(2,62,105,0.05))'
              : 'rgba(255,255,255,0.025)',
            borderRadius: '10px',
          }}
        >
          {/* Left: Stage info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'grid',
                  placeItems: 'center',
                  border: `1px solid ${stage.status === 'active' ? 'rgba(232,98,26,0.3)' : 'rgba(255,255,255,0.1)'}`,
                  background: stage.status === 'active' ? 'rgba(232,98,26,0.08)' : 'rgba(255,255,255,0.04)',
                  borderRadius: '8px',
                }}
              >
                <Icon size={22} color={stage.status === 'active' ? 'var(--saffron)' : '#6b8299'} />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-jetbrains-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: stage.status === 'active' ? 'var(--saffron)' : '#5a7490',
                    marginBottom: '3px',
                  }}
                >
                  {stage.status === 'active' ? '● Active' : '○ Planned'} · {stage.timeframe}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    color: '#f0f4f8',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stage.title}
                </h3>
              </div>
            </div>
            <p style={{ fontSize: '0.925rem', lineHeight: 1.75, color: '#8fa3b8' }}>
              {stage.description}
            </p>
          </div>

          {/* Right: Milestones */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#3a5060',
                marginBottom: '1rem',
              }}
            >
              Key Milestones
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {stage.milestones.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.75rem 1rem',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(255,255,255,0.025)',
                    borderRadius: '6px',
                  }}
                >
                  <div
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      flexShrink: 0,
                      background: stage.status === 'active' ? 'var(--saffron)' : '#2a3a4a',
                    }}
                  />
                  <span style={{ fontSize: '0.875rem', color: '#8fa3b8' }}>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stage dots indicator */}
        <Timeline3DButtons
          activeStage={activeStage}
          setActiveStage={setActiveStage}
          stageCount={STAGES.length}
        />
      </div>
    </section>
  )
}
