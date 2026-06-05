import SectionWrapper from './SectionWrapper'

const PRINCIPLES = [
  {
    number: '01',
    heading: 'Product-First Execution',
    body: 'Every research direction is anchored in a working product with real users.',
  },
  {
    number: '02',
    heading: 'Revenue-Funded Innovation',
    body: 'Sustainable product revenue shields and funds long-term R&D.',
  },
  {
    number: '03',
    heading: 'Long-Term Architecture',
    body: 'Systems are built for decade-scale reliability, not short-term demos.',
  },
  {
    number: '04',
    heading: 'Human-Centric Automation',
    body: 'Automation is deployed as a capability amplifier with human oversight — never as a black-box replacement.',
  },
]

// Repurposed: OperatingPrinciples section for the Home page
export default function Features() {
  return (
    <section aria-labelledby="principles-heading">
      <SectionWrapper>
        <div className="label-chip mb-5 inline-flex">
          Operating Principles
        </div>
        <h2
          id="principles-heading"
          className="font-heading text-[clamp(1.625rem,3vw,2.25rem)] font-bold tracking-[-0.025em] text-primary mb-12 max-w-[520px]"
        >
          How we build and why it matters.
        </h2>
      </SectionWrapper>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[1px] bg-border border border-border">
        {PRINCIPLES.map((p, i) => (
          <SectionWrapper key={p.number} delay={i * 70}>
            <div className="card h-full border-none rounded-none">
              <div className="font-mono text-[0.6875rem] font-medium text-accent tracking-[0.1em] mb-3.5 opacity-80">
                {p.number}
              </div>
              <h3 className="font-heading text-[1.0625rem] font-bold text-primary tracking-[-0.01em] mb-2.5">
                {p.heading}
              </h3>
              <p className="text-[0.9375rem] text-muted leading-[1.65]">
                {p.body}
              </p>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </section>
  )
}
