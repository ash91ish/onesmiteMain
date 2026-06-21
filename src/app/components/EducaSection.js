'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, GraduationCap, Users, Brain, BarChart3, IndianRupee, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'

const EducaWatchCanvas = dynamic(() => import('./three/EducaWatchCanvas'), { ssr: false })

const FEATURES = [
  {
    icon: Users,
    title: 'Teacher Empowerment',
    description: 'Give educators tools to create, manage and monetize assessments — without a development team.',
    accent: '#E8621A',
  },
  {
    icon: GraduationCap,
    title: 'Student Accessibility',
    description: 'Reliable and fast — ensuring smooth access to learning tools across varying network conditions.',
    accent: '#3a8fc4',
  },
  {
    icon: Brain,
    title: 'AI-Assisted Insights',
    description: 'Intelligent analysis to help educators identify patterns and suggest targeted improvement paths.',
    accent: '#5c6bc0',
  },
  {
    icon: BarChart3,
    title: 'Scalable Infrastructure',
    description: 'Production-grade cloud infrastructure built to grow alongside your educational institution.',
    accent: '#2e9e6b',
  },
  {
    icon: IndianRupee,
    title: 'Built for India',
    description: 'Pricing and features designed for the realities of Indian educators — genuinely accessible.',
    accent: '#E8621A',
  },
]

export default function EducaSection() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)
  const contentRef = useRef(null)

  const headInView = useInView(headRef, { once: true, margin: '-80px' })
  const contentInView = useInView(contentRef, { once: true, margin: '-60px' })

  // Parallax on the heading
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      ref={sectionRef}
      id="educa"
      className="section-container-lg"
      aria-labelledby="educa-heading"
      style={{
        background: 'linear-gradient(165deg, #00070f 0%, #011220 40%, #010a18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Ambient glows ── */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 55% at 80% 50%, rgba(232,98,26,0.07) 0%, transparent 65%)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(2,62,105,0.18) 0%, transparent 60%)',
      }} />

      {/* ── Top accent line ── */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #E8621A 30%, #023E69 70%, transparent)',
        opacity: 0.8,
      }} />

      <div className="page-shell" style={{ position: 'relative', zIndex: 1 }}>

        {/* ────── Section header ────── */}
        <motion.div
          ref={headRef}
          style={{ textAlign: 'center', marginBottom: '5rem', maxWidth: '760px', marginInline: 'auto', y: titleY }}
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(232,98,26,0.1)',
              border: '1px solid rgba(232,98,26,0.3)',
              marginBottom: '2rem',
            }}
          >
            <Zap size={12} color="#E8621A" fill="#E8621A" />
            <span style={{
              fontFamily: 'var(--font-jetbrains-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#E8621A',
            }}>
              Onesmite Educa — Launching Soon
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="educa-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-syne)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              color: '#ffffff',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            Empowering the minds{' '}
            <span style={{
              background: 'linear-gradient(120deg, #E8621A, #f5a04a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              that will build
            </span>
            {' '}the future.
          </motion.h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.85,
              color: 'rgba(180,210,240,0.75)',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Before AI can transform industries, before infrastructure can scale nations —
            the minds that will build it all must be educated, empowered, and equipped.
            Onesmite Educa is our upcoming platform dedicated to that mission.
          </motion.p>
        </motion.div>

        {/* ────── Two-column grid ────── */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gap: '3.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            alignItems: 'center',
          }}
        >
          {/* ── Left: Feature cards ── */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {FEATURES.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -28 }}
                    animate={contentInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1.1rem 1.25rem',
                      borderRadius: '10px',
                      border: `1px solid rgba(255,255,255,0.06)`,
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(12px)',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'border-color 0.2s, background 0.2s',
                    }}
                    whileHover={{
                      background: 'rgba(255,255,255,0.06)',
                      borderColor: `${feature.accent}40`,
                      transition: { duration: 0.15 }
                    }}
                  >
                    {/* Left accent bar */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px',
                      background: `linear-gradient(180deg, ${feature.accent}, transparent)`,
                      borderRadius: '10px 0 0 10px',
                    }} />

                    {/* Icon */}
                    <div style={{
                      flexShrink: 0,
                      width: '36px', height: '36px',
                      display: 'grid', placeItems: 'center',
                      borderRadius: '8px',
                      background: `${feature.accent}18`,
                      border: `1px solid ${feature.accent}30`,
                    }}>
                      <Icon size={15} color={feature.accent} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-syne)',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: '#e8f2fa',
                        marginBottom: '0.25rem',
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{ fontSize: '0.83rem', lineHeight: 1.6, color: 'rgba(160,200,230,0.7)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              href="https://edu.onesmite.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 28px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #E8621A, #d44e0a)',
                color: '#ffffff',
                fontFamily: 'var(--font-syne)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(232,98,26,0.35), 0 2px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: '0 12px 40px rgba(232,98,26,0.5), 0 4px 12px rgba(0,0,0,0.4)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Ready For Launch
              <ArrowUpRight size={15} />
            </motion.a>
          </div>

          {/* ── Right: 3D Watch Display ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={contentInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              height: 'clamp(350px, 90vw, 580px)',
              background: 'linear-gradient(145deg, #00060e 0%, #010d1c 60%, #010810 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 0 1px rgba(232,98,26,0.12), 0 40px 100px rgba(0,0,0,0.6), 0 8px 40px rgba(232,98,26,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Subtle inner glow top */}
            <div aria-hidden style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '200px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(232,98,26,0.1), transparent 65%)',
              pointerEvents: 'none',
            }} />

            {/* 3D Canvas */}
            <EducaWatchCanvas />

            {/* Bottom glass info bar */}
            <div style={{
              position: 'relative',
              zIndex: 10,
              width: '100%',
              padding: '1.5rem 2rem',
              background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              pointerEvents: 'none',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#E8621A',
                  marginBottom: '4px',
                }}>
                  Onesmite Educa
                </div>
                <div style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                }}>
                  Coming Very Soon
                </div>
              </div>

              {/* Pulsing dot indicator */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <motion.div
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#E8621A',
                    boxShadow: '0 0 10px #E8621A',
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.65rem',
                  color: 'rgba(160,200,230,0.6)',
                  letterSpacing: '0.1em',
                }}>
                  BUILDING
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
