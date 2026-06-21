import SectionWrapper from './SectionWrapper'

const PRINCIPLES = [
  {
    number: '01',
    heading: 'Product-first execution',
    body: 'Every research direction is validated through a working product with real users, not a presentation deck.',
  },
  {
    number: '02',
    heading: 'Revenue-funded innovation',
    body: 'Sustainable product revenue funds the next layer of R&D and keeps strategy independent.',
  },
  {
    number: '03',
    heading: 'Long-term architecture',
    body: 'Systems are designed for maintainability, scale, and trust before visual novelty or speed theater.',
  },
  {
    number: '04',
    heading: 'Human-centric automation',
    body: 'AI and automation amplify students, teachers, and operators while keeping accountability visible.',
  },
]

export default function Features() {
  return (
    <section className="section-band" aria-labelledby="principles-heading">
      <SectionWrapper>
        <div className="section-kicker mb-5">Operating principles</div>
        <h2
          id="principles-heading"
          className="max-w-[670px] font-heading text-[clamp(2rem,5vw,3.3rem)] font-extrabold leading-[1.05] text-primary"
        >
          A company architecture for products that compound.
        </h2>
      </SectionWrapper>

      <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-4">
        {PRINCIPLES.map((p, i) => (
          <SectionWrapper key={p.number} delay={i * 70}>
            <article className="min-h-[280px] bg-[#0d131b] p-6 transition hover:bg-[#111a24]">
              <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-accent">
                {p.number}
              </div>
              <h3 className="mt-16 font-heading text-xl font-bold text-primary lg:mt-20">
                {p.heading}
              </h3>
              <p className="mt-3 text-[0.92rem] leading-[1.75] text-muted">{p.body}</p>
            </article>
          </SectionWrapper>
        ))}
      </div>
    </section>
  )
}
