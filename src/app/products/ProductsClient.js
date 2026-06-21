'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  ChevronDown,
  Database,
  FileText,
  Globe,
  GraduationCap,
  IndianRupee,
  Lock,
  PlayCircle,
  Server,
  Shield,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

const AUDIENCES = {
  student: {
    label: 'Students',
    icon: GraduationCap,
    heading: 'Prepare with clarity, pressure, and measurable progress.',
    body: 'Practice for Indian competitive exams through structured tests, educator-led classrooms, live rankings, and AI analysis that explains what to improve next.',
    cta: 'Start free test',
    href: 'https://edu.onesmite.com/web/test',
    features: [
      { icon: Brain, title: 'AI post-test analysis', body: 'Topic-level weakness mapping and improvement paths after every test.' },
      { icon: Target, title: 'Pressure simulation', body: 'Timed mock tests mapped to competitive exam patterns and difficulty.' },
      { icon: BarChart3, title: 'Live leaderboards', body: 'National-style rankings that show where preparation really stands.' },
      { icon: PlayCircle, title: 'Educator classrooms', body: 'Join verified teachers and structured batches for your target exam.' },
      { icon: Award, title: 'Performance proof', body: 'Certificates and reports that capture benchmarked preparation outcomes.' },
      { icon: BookOpen, title: 'Study resources', body: 'Organized notes, PYQs, and learning material in one workflow.' },
    ],
  },
  teacher: {
    label: 'Educators',
    icon: Briefcase,
    heading: 'Launch a test business without building the platform yourself.',
    body: 'Create tests manually or with AI, run private or public classrooms, monetize content, and track revenue from one operational workspace.',
    cta: 'Join as educator',
    href: 'https://teacher.onesmite.com',
    features: [
      { icon: Zap, title: 'AI test creator', body: 'Upload content and generate MCQ tests quickly with AI assistance.' },
      { icon: FileText, title: 'Manual builder', body: 'Create custom papers, options, timing, and publishing rules.' },
      { icon: Globe, title: 'Public and private classrooms', body: 'Run discovery-friendly classrooms or invite-only batches.' },
      { icon: TrendingUp, title: 'Revenue analytics', body: 'Track enrollments, earnings, attempts, and student engagement.' },
      { icon: Wallet, title: 'Pay-as-you-go cost', body: 'Avoid fixed platform bills and pay only around active usage.' },
      { icon: Shield, title: 'Secure delivery', body: 'Server-side validation, protected sessions, and controlled exam access.' },
    ],
  },
}

const STATS = [
  { value: '99.99%', label: 'Uptime target' },
  { value: 'PAYG', label: 'Pricing model' },
  { value: 'AES-256', label: 'At-rest encryption' },
  { value: 'DPDPA', label: 'Compliance posture' },
]

const PRICING = [
  { label: 'AI question generation', value: 'Rs. 4.9 / 1,000 tokens', note: 'Usage based' },
  { label: 'Manual question creation', value: 'Free', note: 'No creation limits' },
  { label: 'Exam hosting', value: 'Rs. 0.5 / student / hour', note: 'Only during live exams' },
  { label: 'Study material storage', value: 'Free', note: 'Download usage may apply' },
  { label: 'Platform commission', value: '25%', note: 'On paid test revenue' },
]

const EXAMS = ['SSC', 'BPSC', 'Banking', 'Railways', 'Defence', 'Teaching exams', 'State PSC', 'Police']

const SECURITY = [
  { icon: Lock, title: 'Encrypted data', body: 'AES-256 at rest and TLS-secured traffic in transit.' },
  { icon: Server, title: 'Validated sessions', body: 'Server-side rules protect attempts, timing, and exam access.' },
  { icon: Users, title: 'Verified educators', body: 'KYC-oriented educator workflows before financial features.' },
  { icon: Database, title: 'Zero-trust posture', body: 'Internal services authenticate requests instead of assuming trust.' },
]

const FAQS = [
  {
    q: 'Is Onesmite Educa free for students?',
    a: 'Students can access free practice tests and public classrooms. Paid test series or classrooms may be offered by educators at their own pricing.',
  },
  {
    q: 'How does educator billing work?',
    a: 'The platform uses pay-as-you-go pricing for usage such as AI generation and live exam hosting, plus a platform commission on paid test revenue.',
  },
  {
    q: 'Which exams does it support?',
    a: 'Educators can publish content for SSC, BPSC, Banking, Railways, Defence, Teaching exams, State PSC, and adjacent competitive exam categories.',
  },
  {
    q: 'How is student data protected?',
    a: 'The system is designed around encrypted data, protected sessions, role-aware access, and India-focused compliance requirements.',
  },
]

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function FeatureCard({ icon: Icon, title, body, index }) {
  return (
    <FadeUp delay={0.1 * index} className="h-full">
      <div className="card-dark group h-full rounded-2xl p-6 hover:border-accent/20 hover:bg-white/[0.02] transition-all duration-300">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/5">
          <Icon size={18} />
        </div>
        <h3 className="font-sans text-[1.1rem] font-bold text-primary mb-2.5 tracking-tight">{title}</h3>
        <p className="text-[0.92rem] leading-[1.65] text-muted">{body}</p>
      </div>
    </FadeUp>
  )
}

function SecurityCard({ icon: Icon, title, body, index }) {
  return (
    <FadeUp delay={0.1 * index} className="h-full">
      <div className="card-dark group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.02]">
        <div className="absolute top-0 right-0 h-[80px] w-[80px] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,98,26,0.02),transparent_70%)] blur-[20px]" />

        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-accent transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 group-hover:scale-110">
          <Icon size={22} />
        </div>

        <h3 className="font-sans text-[1.1rem] font-bold text-primary mb-2.5 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-[0.92rem] leading-[1.65] text-muted">{body}</p>
      </div>
    </FadeUp>
  )
}

export default function ProductsPageClient() {
  const [activeTab, setActiveTab] = useState('student')
  const [expandedFaq, setExpandedFaq] = useState(0)
  const active = AUDIENCES[activeTab]
  const ActiveIcon = active.icon

  return (
    <main className="relative overflow-hidden selection:bg-brand selection:text-white">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 mix-blend-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,98,26,0.06),transparent_70%)] blur-[80px]" />
      <div className="pointer-events-none absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(2,62,105,0.1),transparent_60%)] blur-[100px]" />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="page-shell">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <FadeUp delay={0.1}>
                <div className="eyebrow eyebrow-dark mb-8">
                  Products & Infrastructure
                </div>
              </FadeUp>
              <FadeUp delay={0.2}>
                <h1 className="max-w-[760px] font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.2] tracking-tight text-primary">
                  Onesmite Educa: <span className="text-gradient-brand">Our First Unified</span> <span className="text-gradient-saffron">Ecosystem.</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-8 max-w-[640px] text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.8] text-muted">
                  A high-scale, AI-powered assessment infrastructure designed for students preparing for high-stakes exams and educators building modern test businesses.
                </p>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <a href="https://edu.onesmite.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary group px-8 py-4 text-[0.95rem] font-semibold tracking-wide rounded-xl shadow-[0_8px_24px_rgba(232,98,26,0.25)]">
                    Explore Educa Platform
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href="#workspace" className="btn btn-ghost-dark px-8 py-4 text-[0.95rem] font-semibold tracking-wide rounded-xl">
                    Choose Workspace
                  </a>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.4} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="card-dark p-6 rounded-2xl flex flex-col justify-between min-h-[125px] transition-all duration-300 hover:border-brand/30 hover:bg-white/[0.02]">
                    <div className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-primary text-gradient-brand">
                      {stat.value}
                    </div>
                    <div className="mt-4 font-mono text-[0.68rem] uppercase tracking-widest text-accent font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="page-shell"><hr className="divider-dark" /></div>

      {/* PLATFORM AUDIENCES SECTION */}
      <section id="workspace" className="relative z-10 py-12 md:py-16">
        <div className="page-shell">
          <FadeUp delay={0.1}>
            <div className="mb-16 flex flex-col items-center justify-center gap-6 text-center">
              <h2 className="section-headline text-primary">Choose your workspace.</h2>

              <div className="mt-4 inline-flex shrink-0 rounded-xl border border-white/10 bg-black/30 p-1.5 backdrop-blur-md">
                {Object.entries(AUDIENCES).map(([key, audience]) => {
                  const Icon = audience.icon
                  const isActive = key === activeTab
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`relative flex items-center gap-2.5 rounded-lg px-8 py-3 text-[0.95rem] font-semibold transition-all duration-300 ${isActive ? 'text-primary' : 'text-muted hover:text-silver'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 rounded-lg bg-white/10 shadow-sm border border-white/5"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                      <Icon size={18} className={`relative z-10 ${isActive ? 'text-accent' : ''}`} />
                      <span className="relative z-10 tracking-wide">{audience.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </FadeUp>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="card-dark rounded-3xl p-8 md:p-14 backdrop-blur-xl">
                <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-[720px]">
                    <div className="eyebrow eyebrow-dark mb-6">
                      <ActiveIcon size={14} className="text-accent" />
                      Active Platform
                    </div>
                    <h3 className="font-heading text-[clamp(1.85rem,3vw,2.75rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
                      {active.heading}
                    </h3>
                    <p className="mt-5 text-[1.1rem] leading-[1.75] text-muted">{active.body}</p>

                    <div className="mt-10">
                      <a href={active.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary group rounded-xl px-8 py-4 text-sm font-semibold tracking-wide">
                        {active.cta}
                        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {active.features.map((feature, i) => (
                    <FeatureCard key={feature.title} index={i} {...feature} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="page-shell"><hr className="divider-dark" /></div>

      {/* ECONOMICS SECTION */}
      <section className="relative z-10 py-12 md:py-16">
        <div className="page-shell">
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <FadeUp delay={0.1}>
                <div className="eyebrow eyebrow-dark mb-6">Coverage and Economics</div>
                <h2 className="section-headline text-primary">
                  Built for scale and viable unit economics.
                </h2>
                <p className="mt-6 text-[1.1rem] leading-[1.8] text-muted">
                  Our marketplace expands as educators publish diverse content, while our zero-fixed-cost model keeps creators and institutes financially agile from day one.
                </p>
              </FadeUp>
            </div>

            <div className="flex flex-col gap-8">
              <FadeUp delay={0.2}>
                <div className="card-dark rounded-2xl p-8 lg:p-10">
                  <div className="mb-6 flex items-center gap-3 font-mono text-[0.8rem] font-semibold uppercase tracking-wider text-silver">
                    <Target size={18} className="text-accent" />
                    Supported Exam Categories
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {EXAMS.map((exam) => (
                      <span key={exam} className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-primary hover:border-accent/40 hover:bg-accent/[0.02] transition-colors duration-300">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="card-dark overflow-hidden rounded-2xl">
                  <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-8 py-6">
                    <IndianRupee size={18} className="text-accent" />
                    <span className="font-mono text-[0.8rem] font-semibold uppercase tracking-widest text-silver">
                      Pay-as-you-go Pricing
                    </span>
                  </div>
                  <div className="divide-y divide-white/[0.06]">
                    {PRICING.map((item) => (
                      <div key={item.label} className="grid gap-2 px-8 py-6 transition-colors hover:bg-white/[0.01] sm:grid-cols-[1fr_auto] sm:items-center">
                        <div>
                          <div className="font-sans font-bold text-primary text-[1.05rem]">{item.label}</div>
                          <div className="mt-1 text-[0.88rem] text-muted">{item.note}</div>
                        </div>
                        <div className="font-sans text-[1.1rem] font-extrabold text-accent text-right whitespace-nowrap self-start sm:self-auto">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="page-shell"><hr className="divider-dark" /></div>

      {/* SECURITY SECTION */}
      <section className="relative z-10 py-12 md:py-16 bg-[#020a11]">
        <div className="page-shell">
          <div className="mb-16 lg:flex lg:items-end lg:justify-between lg:gap-16">
            <FadeUp delay={0.1} className="max-w-[700px]">
              <div className="eyebrow eyebrow-dark mb-6">Security Architecture</div>
              <h2 className="section-headline text-primary">
                Designed for trust before scale.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2} className="mt-8 lg:mt-0 max-w-[500px]">
              <p className="text-[1.1rem] leading-[1.8] text-muted">
                Exam delivery, financial workflows, and academic data require explicit security choices that are visible in the foundation, not bolted on later.
              </p>
            </FadeUp>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {SECURITY.map((item, index) => (
              <SecurityCard key={item.title} index={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="page-shell"><hr className="divider-dark" /></div>

      {/* FAQ SECTION */}
      <section className="relative z-10 py-12 md:py-16">
        <div className="page-shell">
          <div className="grid gap-12 lg:gap-20 lg:grid-cols-[1fr_1.3fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <FadeUp delay={0.1}>
                <div className="eyebrow eyebrow-dark mb-6">FAQ</div>
                <h2 className="section-headline text-primary">
                  Practical questions, direct answers.
                </h2>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <div className="card-dark overflow-hidden rounded-2xl">
                {FAQS.map((faq, index) => (
                  <div key={faq.q} className="border-b border-white/[0.06] last:border-b-0">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="group flex w-full items-center justify-between gap-6 px-8 py-7 text-left transition-colors hover:bg-white/[0.01]"
                      aria-expanded={expandedFaq === index}
                    >
                      <span className="font-sans text-[1.1rem] font-bold text-primary group-hover:text-accent transition-colors">
                        {faq.q}
                      </span>
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${expandedFaq === index
                        ? 'rotate-180 bg-accent/10 border-accent/30 text-accent'
                        : 'border-white/10 bg-white/[0.02] text-muted group-hover:border-white/20'
                        }`}>
                        <ChevronDown size={16} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {expandedFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/[0.06] bg-black/20 px-8 py-6 text-[0.95rem] leading-[1.7] text-muted border-l-2 border-l-accent">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 pb-16 md:pb-24 pt-0">
        <div className="page-shell">
          <FadeUp delay={0.1}>
            <div className="shimmer-card rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 md:p-16 lg:p-20 backdrop-blur-xl relative overflow-hidden">
              <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-30 mix-blend-overlay" />
              <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />

              <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-[640px]">
                  <div className="eyebrow eyebrow-dark mb-6">
                    Live Vertical
                  </div>
                  <h2 className="section-headline text-primary tracking-tight">
                    Start building with <span className="text-gradient-saffron">Onesmite Educa.</span>
                  </h2>
                  <p className="mt-6 text-[1.1rem] leading-[1.75] text-muted">
                    Join the infrastructure that empowers students to succeed and helps educators scale their operations seamlessly.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center shrink-0">
                  <a href="https://edu.onesmite.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary group py-4 px-8 text-sm font-semibold tracking-wide rounded-xl shadow-[0_12px_36px_rgba(232,98,26,0.3)]">
                    Student Platform
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a href="https://teacher.onesmite.com" target="_blank" rel="noopener noreferrer" className="btn btn-ghost-dark group py-4 px-8 text-sm font-semibold tracking-wide rounded-xl">
                    Educator Portal
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  )
}
