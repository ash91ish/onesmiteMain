import SectionWrapper from './SectionWrapper'
import { Cpu, Coins, Layers3 } from 'lucide-react'

const REASONS = [
  {
    icon: Layers3,
    heading: 'Fragmented preparation',
    body: 'Students move between scattered tests, notes, rankings, and classrooms. Educators lose time stitching together workflows that should be infrastructure.',
  },
  {
    icon: Coins,
    heading: 'Weak educator economics',
    body: 'Individual teachers and small institutes need direct monetization, lower operating cost, and trustworthy distribution without building software teams.',
  },
  {
    icon: Cpu,
    heading: 'Shallow AI adoption',
    body: 'Most AI features stop at novelty. Onesmite focuses on decision support, post-test intelligence, automation, and measurable learning workflows.',
  },
]

export default function IndiaVision() {
  return (
    <section className="section-band" aria-labelledby="why-this-matters-heading">
      <SectionWrapper>
        <div className="section-kicker mb-5">Why this matters</div>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2
            id="why-this-matters-heading"
            className="max-w-[700px] font-heading text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-[1.05] text-primary"
          >
            The world does not need louder software. It needs better operating rails.
          </h2>
          <p className="max-w-[390px] text-[0.95rem] leading-[1.75] text-muted">
            The first vertical starts with competitive exam preparation because the pain is daily,
            measurable, and large enough to demand real infrastructure.
          </p>
        </div>
      </SectionWrapper>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {REASONS.map((item, i) => {
          const Icon = item.icon
          return (
            <SectionWrapper key={item.heading} delay={i * 90}>
              <article className="card h-full">
                <div className="relative z-10">
                  <div className="mb-7 grid h-12 w-12 place-items-center border border-white/10 bg-white/[0.045]">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary">{item.heading}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.75] text-muted">{item.body}</p>
                </div>
              </article>
            </SectionWrapper>
          )
        })}
      </div>
    </section>
  )
}
