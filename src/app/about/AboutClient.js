'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Building2, Code2, MapPin, UserRound } from 'lucide-react'

const PRINCIPLES = [
  {
    number: '01',
    heading: 'Indigenous Engineering',
    body: 'Every system is designed for regional contexts, languages, and workflows—not adapted from elsewhere. Market contact keeps us grounded in outcomes, not speculation.',
  },
  {
    number: '02',
    heading: 'Sovereign Independence',
    body: 'Product revenue funds our infrastructure, compute, and R&D. Financial independence is treated as a critical engineering asset to ensure we never compromise our mission.',
  },
  {
    number: '03',
    heading: 'Durable Infrastructure',
    body: 'Technical decisions are evaluated against maintainability, security, and massive scale. We build core systems that compound in value over decades.',
  },
  {
    number: '04',
    heading: 'Context-Aware AI',
    body: 'Artificial intelligence systems must be trained on local contexts. We design automation to amplify human capability with visible accountability and responsible oversight.',
  },
]

const DETAILS = [
  { icon: UserRound, label: 'Founder', value: 'Ashish Kumar' },
  { icon: Code2, label: 'Background', value: 'Software engineer & product builder' },
  { icon: Building2, label: 'Company', value: 'Onesmite' },
  { icon: MapPin, label: 'Location', value: 'Patna, Bihar, India' },
]

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function PrincipleCard({ principle, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        borderLeft: '2px solid rgba(232,98,26,0.3)',
        background: 'rgba(255,255,255,0.025)',
        borderRadius: '0 8px 8px 0',
        transition: 'all 300ms ease',
      }}
      whileHover={{
        borderLeftColor: 'rgba(232,98,26,0.8)',
        background: 'rgba(255,255,255,0.04)',
        y: -4
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-jetbrains-mono)',
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: 'var(--saffron)',
          marginBottom: '1rem'
        }}
      >
        {principle.number}
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-syne)',
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#f0f4f8',
          marginBottom: '0.75rem',
        }}
      >
        {principle.heading}
      </h3>
      <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#8fa3b8' }}>
        {principle.body}
      </p>
    </motion.div>
  )
}

export default function AboutClient() {
  return (
    <main style={{ background: '#010b14', minHeight: '100vh', paddingBottom: '6rem' }}>

      {/* ── HERO SECTION ── */}
      <section
        className="relative overflow-hidden"
        style={{
          paddingTop: 'clamp(8rem, 15vw, 12rem)',
          paddingBottom: 'clamp(5rem, 10vw, 8rem)',
          background: 'linear-gradient(180deg, #010b14 0%, #021220 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}
      >
        {/* Subtle radial glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(2,62,105,0.2) 0%, transparent 80%)',
          }}
        />

        <div className="page-shell relative z-10">
          <FadeUp delay={0.1}>
            <span className="eyebrow eyebrow-dark mb-6 inline-flex">
              About Onesmite
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="max-w-[900px] font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold leading-[1.05] text-[#f0f4f8]">
              Engineering the Future of Digital Independence.
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="mt-8 max-w-[680px] text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.8] text-[#8fa3b8]">
              Onesmite exists to build indigenous software, intelligent systems, and sovereign digital infrastructure. We are moving the industry from an IT services economy to a global product and innovation powerhouse.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── FOUNDER & STORY SECTION ── */}
      <section className="section-container-lg relative">
        <div className="page-shell">
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">

            {/* Sticky Left Sidebar (Founder) */}
            <div className="lg:sticky lg:top-[120px]">
              <FadeUp delay={0}>
                <div
                  className="premium-panel"
                  style={{
                    padding: '2.5rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px'
                  }}
                >
                  <span className="eyebrow eyebrow-dark mb-6 inline-flex">Founder</span>
                  <h2 className="font-heading text-[clamp(2rem,4vw,2.5rem)] font-bold text-[#f0f4f8]">
                    Ashish Kumar
                  </h2>
                  <div className="mt-2 font-mono text-[0.75rem] font-semibold uppercase tracking-0.1em text-accent">
                    Founder & CEO
                  </div>

                  <div className="mt-8 flex flex-col gap-5">
                    {DETAILS.map((detail, i) => {
                      const Icon = detail.icon
                      return (
                        <div key={i} className="flex items-center gap-4">
                          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[rgba(232,98,26,0.08)] text-accent border border-[rgba(232,98,26,0.2)]">
                            <Icon size={16} />
                          </div>
                          <div>
                            <div className="text-[0.7rem] uppercase tracking-widest text-[#5a7490] font-mono">
                              {detail.label}
                            </div>
                            <div className="text-[0.95rem] font-medium text-[#c8d6e0]">
                              {detail.value}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.06)]">
                    <a
                      href="mailto:contact@onesmite.com"
                      className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-[#ff9557]"
                    >
                      contact@onesmite.com <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Scrollable Column (Our Story) */}
            <div className="flex flex-col gap-10">
              <FadeUp delay={0.1}>
                <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] text-[#f0f4f8] mb-2">
                  Why Onesmite exists.
                </h2>
                <div className="w-12 h-1 bg-accent rounded-full mt-6 mb-8" />
              </FadeUp>

              <div className="flex flex-col gap-8 text-[1.05rem] leading-[1.9] text-[#8fa3b8]">
                <FadeUp delay={0.2}>
                  <p>
                    Onesmite was founded in 2024 with a clear and uncompromising focus: to build world-class technology infrastructure that solves real problems for real users, designed and developed from the ground up.
                  </p>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <p>
                    For too long, a nation of over a billion people has relied heavily on technologies, AI models, and infrastructure built elsewhere. We believe true digital sovereignty requires companies willing to do the hard engineering locally. Ashish Kumar started Onesmite in Patna, Bihar to answer this exact challenge.
                  </p>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <div className="p-6 border-l-2 border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] rounded-r-lg my-2">
                    <p className="text-[#c8d6e0] font-medium">
                      Our journey begins with critical sectors like education. Onesmite Educa, our first major vertical, provides students and teachers with an AI-powered assessment infrastructure that proves our capability to deploy high-scale, intelligent systems.
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.5}>
                  <p>
                    Our long-term vision is a unified technology ecosystem. By funding our own research and development through shipped products, we remain financially independent and architecturally honest—building the digital future, one system at a time.
                  </p>
                </FadeUp>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OPERATING PRINCIPLES ── */}
      <section className="section-container-lg relative border-t border-[rgba(255,255,255,0.05)] bg-[#02101b]">
        <div className="page-shell">
          <FadeUp delay={0}>
            <span className="eyebrow eyebrow-dark mb-5 inline-flex">
              Operating principles
            </span>
            <h2 className="max-w-[720px] font-heading text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold leading-[1.05] text-[#f0f4f8]">
              The principles that decide how we build.
            </h2>
          </FadeUp>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
            {PRINCIPLES.map((principle, index) => (
              <PrincipleCard key={principle.number} principle={principle} index={index} />
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
