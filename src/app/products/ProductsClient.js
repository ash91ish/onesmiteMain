'use client'

import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import {
  ArrowUpRight, Check, Zap, Shield, Users, BookOpen,
  BarChart2, Brain, Layers, Lock, Globe, TrendingUp,
  Award, Clock, FileText, PlayCircle, Star, ChevronDown,
  ChevronRight, Wallet, Server, GraduationCap, Briefcase,
  Target, Sparkles, Database, Code
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────
const STUDENT_FEATURES = [
  { icon: Brain, label: 'AI Post-Test Analysis', desc: 'Precision-target weaknesses with deep performance analytics, topic-level reports, and personalised improvement roadmaps.' },
  { icon: Target, label: 'Pressure-Simulation Tests', desc: 'Full-length mock tests matching the exact pattern, timing, and difficulty of real competitive exams.' },
  { icon: BarChart2, label: 'National Leaderboards', desc: 'Compete with peers in real time. Live rankings show exactly where you stand among thousands of students.' },
  { icon: PlayCircle, label: 'Educator-Led Classrooms', desc: 'Join structured classrooms taught by verified subject specialists — with curated content mapped to your exam.' },
  { icon: Award, label: 'Verified Certificates', desc: 'Earn performance-verified digital certificates that demonstrate your preparation benchmark to institutions.' },
  { icon: BookOpen, label: 'Curated Study Resources', desc: 'Access systematically organised notes, PYQs, and reference materials reviewed for exam-pattern accuracy.' },
]

const TEACHER_FEATURES = [
  { icon: Zap, label: 'AI Test Creator', desc: 'Upload any PDF booklet and auto-generate complete MCQ tests in seconds using our AI question engine.' },
  { icon: FileText, label: 'Manual Test Builder', desc: 'Full control — build custom tests from scratch with multi-language support and instant publishing.' },
  { icon: Globe, label: 'Public & Private Classrooms', desc: 'Create open-platform classrooms for student discovery, or private batches with invite-only access.' },
  { icon: TrendingUp, label: 'Revenue Analytics Dashboard', desc: 'Track earnings, student enrollments, and engagement trends in real time from one clean workspace.' },
  { icon: Wallet, label: 'Pay-As-You-Go Billing', desc: 'No lock-in, no monthly fees. Pay ₹0.5/student/hour for hosting — only when exams are actively running.' },
  { icon: Shield, label: 'Secure Exam Delivery', desc: 'Randomised questions, time-bound access, server-side validation, and session tracking protect integrity.' },
]

const PRICING_ITEMS = [
  { label: 'AI Question Generation', value: '₹4.9 / 1,000 tokens', note: '~10 tokens per question' },
  { label: 'Manual Question Creation', value: 'Free', note: 'Always free, no limits' },
  { label: 'Exam Hosting Cost', value: '₹0.5 / student / hour', note: 'Only during active test windows' },
  { label: 'Study Material Storage', value: 'Free', note: '₹3/GB only on student downloads' },
  { label: 'Platform Commission', value: '25%', note: 'On paid test revenue only' },
  { label: 'Free Test Hosting', value: '₹0.20 / attempt', note: 'Deducted from main wallet' },
]

const EXAM_CATEGORIES = [
  { label: 'Staff Selection', example: 'SSC CGL, CHSL, MTS' },
  { label: 'State Civil Services', example: 'BPSC, JPSC & more' },
  { label: 'Banking & Finance', example: 'IBPS PO, SBI Clerk & more' },
  { label: 'Railways', example: 'RRB NTPC, Group D & more' },
  { label: 'Defence & Police', example: 'NDA, CDS, SSP & more' },
  { label: 'Teaching Exams', example: 'CTET, STET & more' },
]

const SECURITY_ITEMS = [
  { icon: Lock, title: 'AES-256 Encryption at Rest', desc: 'Same standard used by banks and government institutions for sensitive data.' },
  { icon: Server, title: 'TLS 1.3 in Transit', desc: 'All browser-to-server data is encrypted — unreadable to any third party.' },
  { icon: Shield, title: 'KYC Verified Educators', desc: 'Mandatory KYC verification before any financial feature is unlocked.' },
  { icon: Code, title: 'JWT + RBAC Auth', desc: 'Server-validated sessions with strict role-privilege separation and no cross-role leakage.' },
  { icon: Database, title: 'Zero-Trust Architecture', desc: 'Internal services authenticate every single request — nothing is assumed trusted.' },
  { icon: Globe, title: 'IT Act & DPDPA Compliant', desc: 'Full compliance with Indian data protection regulations and GST/TDS requirements.' },
]

const STATS = [
  { value: '99.99%', label: 'Platform Uptime SLA' },
  { value: 'PAYG', label: 'Zero Lock-in Pricing' },
  { value: 'AES-256', label: 'Encryption Standard' },
  { value: 'DPDPA', label: '2023 Compliant' },
]

// ─── Sub-components ───────────────────────────────────────────
function PerspectiveTab({ active, onClick, icon: Icon, label, sublabel }) {
  return (
    <button
      onClick={onClick}
      className={`group flex-1 flex flex-col items-start gap-1 p-5 border transition-all duration-300 text-left cursor-pointer rounded-lg
        ${active
          ? 'border-border-strong border-gray-600 bg-surface-2'
          : 'border-border bg-surface hover:border-border-strong hover:bg-surface-2'
        }`}
    >
      <div className={`flex items-center gap-2.5 mb-1 ${active ? 'text-accent' : 'text-muted group-hover:text-accent'} transition-colors`}>
        <Icon size={16} />
        <span className="font-mono text-[0.6875rem] tracking-[0.08em] uppercase font-medium">{label}</span>
      </div>
      <p className={`text-[0.875rem] leading-[1.5] ${active ? 'text-primary' : 'text-muted'}`}>{sublabel}</p>
    </button>
  )
}

function FeatureCard({ icon: Icon, label, desc }) {
  return (
    <div className="card rounded-lg group">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-md bg-surface-2 border border-border flex items-center justify-center shrink-0 group-hover:border-border-strong transition-colors">
          <Icon size={15} className="text-accent" />
        </div>
        <span className="text-[0.9375rem] font-semibold text-primary">{label}</span>
      </div>
      <p className="text-[0.875rem] text-muted leading-[1.6]">{desc}</p>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────
export default function ProductsPageClient() {
  const [activeTab, setActiveTab] = useState('student')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const faqs = [
    { q: 'Is Onesmite Educa free for students?', a: 'Students can access free practice tests and public classrooms at no cost. Premium test series and paid classrooms are offered by educators at their own pricing — typically much lower than traditional coaching due to our PAYG model for teachers.' },
    { q: 'How does the educator billing model work?', a: 'Onesmite uses a Pay-As-You-Go model with no monthly fees. You pay only for AI token usage (₹4.9/1,000 tokens), exam hosting (₹0.5/student/hour during active tests), and a 25% platform commission on paid test revenue. Manual question creation and study material storage are always free.' },
    { q: 'Which competitive exams does Onesmite Educa cover?', a: 'The platform covers SSC (CGL, CHSL, MTS), BPSC, Banking (IBPS PO/Clerk, SBI PO/Clerk), Railways (RRB NTPC, Group D), and State PSC exams. Educators can build content for any exam category — coverage grows as educators join.' },
    { q: 'How is student data protected?', a: 'All data is AES-256 encrypted at rest and TLS 1.3 encrypted in transit. Onesmite is fully compliant with the IT Act 2000, SPDI Rules 2011, and DPDPA 2023. Student academic data is never sold or shared with any unauthorized third parties.' },
    { q: 'Can teachers monetize their content on the platform?', a: 'Yes. Educators can publish paid test series (₹30–₹60 per test), offer paid classrooms, and receive direct bank payouts. Onesmite auto-deducts a transparent 25% platform fee and handles TDS/GST compliance automatically based on your registration status.' },
    { q: 'What makes Onesmite Educa different from other EdTech platforms?', a: 'Unlike platforms with rigid pricing tiers, Onesmite charges educators only for actual usage — making it viable for individual tutors and large institutes alike. Our DUCA AI provides genuine insight into student performance gaps, not just surface analytics. The platform is purpose-built for Indian competitive exams, not repurposed from global templates.' },
  ]

  return (
    <main>
      {/* ── Hero Section ── */}
      <div className="max-w-[1200px] mx-auto pt-20 pb-8 px-6">
        <SectionWrapper>
          <div className="label-chip mb-5 inline-flex">Products</div>
          <h1 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-extrabold tracking-[-0.03em] text-primary mb-5 max-w-[700px] leading-[1.1]">
            One Platform. <span className="text-gradient-accent">Two Powerful Sides.</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.0625rem)] text-muted leading-[1.75] max-w-[580px] mb-10">
            Onesmite Educa connects India's most ambitious students with verified educators through an AI-powered assessment and learning infrastructure. Built for real outcomes — not just engagement metrics.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-heading text-[1.625rem] font-bold text-primary leading-none">{s.value}</div>
                <div className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <hr className="section-divider" />

      {/* ── Dual Perspective Tabs ── */}
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        <SectionWrapper>
          {/* Tab Switcher */}
          <div className="flex gap-3 mb-10 flex-col sm:flex-row">
            <PerspectiveTab
              active={activeTab === 'student'}
              onClick={() => setActiveTab('student')}
              icon={GraduationCap}
              label="For Students"
              sublabel="Prep smarter for any competitive exam — discover content from verified educators in your domain."
            />
            <PerspectiveTab
              active={activeTab === 'teacher'}
              onClick={() => setActiveTab('teacher')}
              icon={Briefcase}
              label="For Educators"
              sublabel="Build, monetize, and scale your teaching with zero upfront cost."
            />
          </div>

          {/* ── Student View ── */}
          {activeTab === 'student' && (
            <div>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                <div>
                  <div className="label-chip active inline-flex mb-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shrink-0" />
                    Live Platform · Early Access
                  </div>
                  <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary tracking-[-0.02em] mb-2 max-w-[540px]">
                    Every Student Deserves a Real Shot at Success.
                  </h2>
                  <p className="text-[0.9375rem] text-muted leading-[1.7] max-w-[580px]">
                    Onesmite Educa was built on a simple belief — where you come from should never decide how far you can go. We give you the tools, the data, and the clarity to compete at the highest level.
                  </p>
                </div>
                <a
                  href="https://edu.onesmite.com/web/test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0"
                  aria-label="Start a free practice test on Onesmite Educa"
                >
                  Start Free Test <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Student Features Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-3 mb-8">
                {STUDENT_FEATURES.map((f) => (
                  <FeatureCard key={f.label} {...f} />
                ))}
              </div>

              {/* Exam Categories — Marketplace */}
              <div className="border border-border rounded-lg bg-surface p-6 mb-6">
                <div className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-1">Exam Categories on the Platform</div>
                <p className="text-[0.8125rem] text-muted mb-5 leading-[1.6]">
                  Onesmite Educa is a marketplace — the exams covered and the depth of content depend entirely on the educators who join. Find and follow teachers in your domain.
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-2">
                  {EXAM_CATEGORIES.map((cat) => (
                    <div
                      key={cat.label}
                      className="border border-border rounded-md bg-surface-2 px-4 py-3"
                    >
                      <div className="text-[0.875rem] font-semibold text-primary mb-0.5">{cat.label}</div>
                      <div className="font-mono text-[0.75rem] text-muted">{cat.example}</div>
                    </div>
                  ))}
                </div>
              </div>


              {/* Mission Quote + CTAs */}
              <div className="border border-border rounded-lg p-6 bg-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                <blockquote className="font-heading text-[1.0625rem] text-primary italic leading-[1.65] mb-4">
                  "The most prepared student wins — and we're here to make that student <span className="text-accent not-italic">you</span>."
                </blockquote>
                <div className="flex flex-wrap gap-3">
                  <a href="https://edu.onesmite.com/web/test" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm" aria-label="Take a free competitive exam practice test">
                    Start Free Test <ArrowUpRight size={14} />
                  </a>
                  <a href="https://edu.onesmite.com/classrooms" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm" aria-label="Browse educator classrooms on Onesmite Educa">
                    Explore Classrooms <ChevronRight size={14} />
                  </a>
                  <a href="https://edu.onesmite.com/plans" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm" aria-label="View Onesmite Educa pricing plans">
                    View Plans <ChevronRight size={14} />
                  </a>
                  <a href="https://edu.onesmite.com/about-us" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm" aria-label="Learn more about Onesmite Educa mission and vision">
                    Our Mission <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ── Teacher View ── */}
          {activeTab === 'teacher' && (
            <div>
              <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
                <div>
                  <div className="label-chip active inline-flex mb-3">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shrink-0" />
                    Open for Educators
                  </div>
                  <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary tracking-[-0.02em] mb-2 max-w-[560px]">
                    Launch Your Own Branded Test Platform. Zero Lock-in.
                  </h2>
                  <p className="text-[0.9375rem] text-muted leading-[1.7] max-w-[580px]">
                    Enterprise-grade infrastructure at micro-scale pricing. Build AI-powered tests, host live classrooms, and earn direct payouts — without writing a single line of code or paying any upfront setup cost.
                  </p>
                </div>
                <a
                  href="https://teacher.onesmite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0"
                  aria-label="Join Onesmite Educa as an educator or teaching institute"
                >
                  Join as Educator <ArrowUpRight size={15} />
                </a>
              </div>

              {/* Teacher Features Grid */}
              <div className="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-3 mb-8">
                {TEACHER_FEATURES.map((f) => (
                  <FeatureCard key={f.label} {...f} />
                ))}
              </div>

              {/* PAYG Pricing Table */}
              <div className="border border-border rounded-lg overflow-hidden mb-6">
                <div className="px-6 py-4 border-b border-border bg-surface-2 flex items-center gap-2 flex-wrap">
                  <Wallet size={15} className="text-accent" />
                  <span className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase">Pay-As-You-Go Pricing</span>
                  <span className="ml-auto font-mono text-[0.6875rem] text-accent tracking-[0.06em]">No monthly fees. No lock-in.</span>
                </div>
                <div className="divide-y divide-border">
                  {PRICING_ITEMS.map((item) => (
                    <div key={item.label} className="px-6 py-4 flex items-center justify-between gap-4 bg-surface hover:bg-surface-2 transition-colors">
                      <div>
                        <div className="text-[0.9375rem] text-primary font-medium">{item.label}</div>
                        <div className="text-[0.8125rem] text-muted">{item.note}</div>
                      </div>
                      <div className="font-mono text-[0.9375rem] font-semibold text-primary shrink-0">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Educator Advantage CTA */}
              <div className="border border-border rounded-lg p-6 bg-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                <blockquote className="font-heading text-[1.0625rem] text-primary italic leading-[1.65] mb-3">
                  "An enterprise-grade EdTech platform typically costs ₹2–7 Lakhs/year to build. We handle all of it — <span className="text-accent not-italic">for free</span>."
                </blockquote>
                <p className="text-[0.875rem] text-muted leading-[1.6] mb-5">
                  Servers, security, analytics, billing compliance, and infrastructure — all managed automatically. Focus entirely on teaching.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://teacher.onesmite.com" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm" aria-label="Create a free educator account on Onesmite Educa">
                    Create Educator Account <ArrowUpRight size={14} />
                  </a>
                  <a href="https://teacher.onesmite.com/docs" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm" aria-label="Read the full Onesmite Educa educator documentation">
                    Full Documentation <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </SectionWrapper>
      </div>

      <hr className="section-divider" />

      {/* ── Security & Compliance ── */}
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        <SectionWrapper>
          <div className="label-chip mb-5 inline-flex">Platform Architecture</div>
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary tracking-[-0.02em] mb-3 max-w-[540px]">
            Built Secure. Engineered to Scale.
          </h2>
          <p className="text-[0.9375rem] text-muted leading-[1.7] max-w-[580px] mb-10">
            Every layer of Onesmite Educa is designed with a security-first architecture, Indian regulatory compliance, and 99.99% uptime SLA — protecting both educators and students at any scale.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 mb-6">
            {SECURITY_ITEMS.map((item) => (
              <div key={item.title} className="card rounded-lg group">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-surface-2 border border-border flex items-center justify-center shrink-0 group-hover:border-border-strong transition-colors">
                    <item.icon size={14} className="text-accent" />
                  </div>
                  <span className="text-[0.9375rem] font-semibold text-primary">{item.title}</span>
                </div>
                <p className="text-[0.875rem] text-muted leading-[1.6] pl-11">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Compliance Tags */}
          <div className="border border-border rounded-lg p-5 bg-surface flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2 items-center">
              {['IT Act 2000', 'SPDI Rules 2011', 'DPDPA 2023', 'GST Compliant', 'TDS Automated', 'KYC Required'].map((tag) => (
                <span key={tag} className="font-mono text-[0.75rem] text-muted border border-border rounded px-2.5 py-1">
                  {tag}
                </span>
              ))}
            </div>
            <div className="font-mono text-[0.6875rem] text-muted tracking-[0.06em]">
              Security disclosures: contact@onesmite.com
            </div>
          </div>
        </SectionWrapper>
      </div>

      <hr className="section-divider" />

      {/* ── FAQ ── */}
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        <SectionWrapper>
          <div className="label-chip mb-5 inline-flex">FAQ</div>
          <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary tracking-[-0.02em] mb-3">
            Common Questions
          </h2>
          <p className="text-[0.9375rem] text-muted leading-[1.7] max-w-[480px] mb-10">
            Everything you need to know about Onesmite Educa, pricing, and how the platform works for students and educators.
          </p>

          <div className="divide-y divide-border border border-border rounded-lg overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-surface">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface-2 transition-colors cursor-pointer"
                  aria-expanded={expandedFaq === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="text-[0.9375rem] font-medium text-primary">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-muted shrink-0 transition-transform duration-200 ${expandedFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                {expandedFaq === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="px-6 pb-5 text-[0.9375rem] text-muted leading-[1.7] border-t border-border pt-4 bg-surface-2"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <hr className="section-divider" />

      {/* ── Product Cards + Future Verticals ── */}
      <div className="max-w-[1200px] mx-auto py-16 px-6">
        <SectionWrapper delay={100}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {/* Onesmite Educa */}
            <article className="border border-border rounded-lg bg-surface p-6">
              <div className="mb-3">
                <span className="label-chip active">Live · Early Access</span>
              </div>
              <h2 className="font-heading text-[1.25rem] font-bold text-primary tracking-[-0.02em] mb-2.5">
                Onesmite Educa
              </h2>
              <p className="text-[0.9375rem] text-muted leading-[1.65] mb-5">
                AI-powered competitive exam preparation — connecting students across India with verified educators in a production-grade learning ecosystem.
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://edu.onesmite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  aria-label="Visit Onesmite Educa student platform"
                >
                  Student Platform <ArrowUpRight size={13} />
                </a>
                <a
                  href="https://teacher.onesmite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                  aria-label="Join Onesmite Educa educator portal"
                >
                  Educator Portal <ArrowUpRight size={13} />
                </a>
              </div>
            </article>

            {/* Future Verticals */}
            <article className="border border-border rounded-lg bg-surface p-6">
              <div className="mb-3">
                <span className="label-chip research">Research Phase</span>
              </div>
              <h2 className="font-heading text-[1.25rem] font-bold text-primary tracking-[-0.02em] mb-2.5">
                Additional Verticals
              </h2>
              <p className="text-[0.9375rem] text-muted leading-[1.65]">
                We are actively researching additional product verticals in adjacent infrastructure categories. Each future product will follow the same production-grade, long-horizon build philosophy as Onesmite Educa. Details will be shared publicly when development formally begins.
              </p>
            </article>
          </div>
        </SectionWrapper>
      </div>
    </main>
  )
}
