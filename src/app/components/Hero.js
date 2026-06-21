'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BarChart3, Brain, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const METRICS = [
  { label: 'First product', value: 'Educa' },
  { label: 'Primary market', value: 'India' },
  { label: 'Build model', value: 'Revenue-led' },
]

const CAPABILITIES = [
  { icon: Brain, title: 'AI assessment intelligence', body: 'Post-test analysis, weakness mapping, and structured improvement loops.' },
  { icon: ShieldCheck, title: 'Secure exam infrastructure', body: 'Role-aware delivery, protected sessions, and compliance-led architecture.' },
  { icon: BarChart3, title: 'Educator monetization', body: 'Tools for teachers to publish, operate, and earn from assessment products.' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent_40%)]" />

      <div className="page-shell grid min-h-[calc(100vh-68px)] grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px]"
        >
          <div className="section-kicker mb-7">Technology infrastructure for India</div>

          <h1 className="font-heading text-[clamp(2.7rem,8vw,6.25rem)] font-extrabold leading-[0.96] text-primary">
            Building software companies with a long-term spine.
          </h1>

          <p className="mt-7 max-w-[610px] text-[clamp(1rem,2vw,1.12rem)] leading-[1.8] text-muted">
            Onesmite is a technology holding company creating focused software infrastructure for India.
            Our first product, Onesmite Educa, helps students prepare for competitive exams and gives
            educators production-grade tools to create, manage, and monetize assessments.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://edu.onesmite.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Explore Onesmite Educa
              <ArrowUpRight size={16} />
            </a>
            <Link href="/products" className="btn-ghost">
              View product system
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid max-w-[660px] grid-cols-1 gap-3 sm:grid-cols-3">
            {METRICS.map((metric) => (
              <div key={metric.label} className="metric-card">
                <div className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-muted">
                  {metric.label}
                </div>
                <div className="mt-3 font-heading text-[1.18rem] font-bold text-primary">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="premium-panel scan-line float-slow p-4 sm:p-5"
        >
          <div className="relative overflow-hidden border border-white/[0.08] bg-[#071017] p-4 sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden border border-white/12 bg-white/[0.04]">
                  <Image src="/onesmite.webp" alt="Onesmite mark" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <div className="font-heading text-lg font-extrabold text-primary">Onesmite OS</div>
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">
                    Product command layer
                  </div>
                </div>
              </div>
              <Sparkles size={18} className="text-[var(--accent-2)]" />
            </div>

            <div className="grid gap-3">
              {CAPABILITIES.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.3 + index * 0.08 }}
                    className="border border-white/[0.09] bg-white/[0.04] p-4"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center border border-white/10 bg-white/[0.05]">
                        <Icon size={16} className="text-accent" />
                      </span>
                      <h2 className="font-heading text-base font-bold text-primary">{item.title}</h2>
                    </div>
                    <p className="text-sm leading-[1.65] text-muted">{item.body}</p>
                  </motion.article>
                )
              })}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="border border-white/[0.09] bg-white/[0.04] p-4">
                <div className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-muted">HQ</div>
                <div className="mt-2 text-sm font-semibold text-primary">Patna, Bihar</div>
              </div>
              <div className="border border-white/[0.09] bg-white/[0.04] p-4">
                <div className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-muted">Status</div>
                <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#a5efc1]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#62d28f]" />
                  Active build
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
