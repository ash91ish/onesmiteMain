import SectionWrapper from './SectionWrapper'
import { Layers, DollarSign, Cpu } from 'lucide-react'

const REASONS = [
  {
    icon: Layers,
    heading: 'Fragmented Preparation',
    body: 'Competitive exam preparation remains fragmented across tools and platforms, creating friction for both students and educators.',
  },
  {
    icon: DollarSign,
    heading: 'Limited Monetization for Educators',
    body: 'Many educators lack simple, reliable ways to create, manage, and monetize their assessments and teaching materials.',
  },
  {
    icon: Cpu,
    heading: 'Surface-Level AI Adoption',
    body: 'AI adoption in Indian education often focuses on surface-level features rather than meaningful, outcome-driven infrastructure.',
  },
]

// Repurposed: WhyIndia section for the Home page
export default function IndiaVision() {
  return (
    <section aria-labelledby="why-india-heading">
      <SectionWrapper>
        <div className="label-chip mb-5 inline-flex">
          Why India Needs Better Infrastructure
        </div>
        <h2
          id="why-india-heading"
          className="font-heading text-[clamp(1.625rem,3vw,2.25rem)] font-bold tracking-[-0.025em] text-primary mb-12 max-w-[560px]"
        >
          The gaps we're building to close.
        </h2>
      </SectionWrapper>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
        {REASONS.map((item, i) => {
          const Icon = item.icon
          return (
            <SectionWrapper key={item.heading} delay={i * 80}>
              <article className="p-7 border border-border bg-surface h-full transition-colors duration-200 ease-out hover:border-white/20">
                <div className="flex items-center justify-center w-10 h-10 border border-white/10 mb-5 bg-white/[0.02]">
                  <Icon size={18} className="text-accent" />
                </div>
                <h3 className="font-heading text-[1.0625rem] font-bold text-primary mb-2.5 tracking-[-0.01em]">
                  {item.heading}
                </h3>
                <p className="text-[0.9375rem] text-muted leading-[1.65]">
                  {item.body}
                </p>
              </article>
            </SectionWrapper>
          )
        })}
      </div>
    </section>
  )
}
