import SectionWrapper from '../components/SectionWrapper'

const PRINCIPLES_EXPANDED = [
  {
    number: '01',
    heading: 'Product-First Execution',
    body: 'Every research direction at Onesmite is anchored in a working product with real users. We believe that market contact is the only honest validation signal — it keeps the team grounded, focused, and accountable to outcomes rather than ideas. A product that ships and earns trust is more valuable than a roadmap that speculates.',
  },
  {
    number: '02',
    heading: 'Revenue-Funded Innovation',
    body: 'Sustainable product revenue shields and funds long-term R&D. Onesmite is built on the conviction that financial independence is an engineering asset. Revenue generated through our products funds the infrastructure, people, and research needed to grow — without compromising our direction or timelines to external pressures.',
  },
  {
    number: '03',
    heading: 'Long-Term Architecture',
    body: 'Systems are built for decade-scale reliability, not short-term demos. Every technical decision is evaluated against its long-term maintainability and scalability. We deliberately avoid shortcuts that create compounding debt, because the platforms we build today are meant to operate reliably far into the future.',
  },
  {
    number: '04',
    heading: 'Human-Centric Automation',
    body: 'Automation is deployed as a capability amplifier with human oversight — never as a black-box replacement. We engineer AI and automation with strict accountability built in. Every automated system Onesmite ships is designed to enhance human decision-making, not obscure it. Responsible deployment is a non-negotiable design constraint.',
  },
]

export const metadata = {
  title: 'About — Onesmite',
  description:
    'Learn about Onesmite, our founder Ashish Kumar, and the long-term vision of building sustainable, India-owned technology infrastructure.',
  alternates: { canonical: 'https://onesmite.com/about' },
  openGraph: {
    title: 'About Onesmite — Founder, Story, and Values',
    description:
      'Onesmite is a technology holding company founded by Ashish Kumar in Patna, Bihar. Learn about our story and operating principles.',
    url: 'https://onesmite.com/about',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto pt-20 pb-24 px-6">
        {/* Page heading */}
        <SectionWrapper>
          <div className="label-chip mb-5 inline-flex">
            About Onesmite
          </div>
          <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-primary mb-6 max-w-[640px]">
            A holding company building for the <span className="text-gradient-accent">long term.</span>
          </h1>
        </SectionWrapper>

        {/* ── Founder Section ── */}
        <section
          aria-labelledby="founder-heading"
          className="border-t border-border pt-16 mt-16"
        >
          <SectionWrapper>
            <div className="label-chip mb-6 inline-flex">
              Founder
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-12 items-start">
            <SectionWrapper>
              <div>
                <h2
                  id="founder-heading"
                  className="font-heading text-[1.75rem] font-bold text-primary tracking-[-0.02em] mb-1.5"
                >
                  Ashish Kumar
                </h2>
                <div className="font-mono text-xs text-accent tracking-[0.08em] uppercase mb-6">
                  Founder &amp; CEO
                </div>
                <p className="text-[0.9375rem] text-muted leading-[1.75] max-w-[580px]">
                  Ashish Kumar is the founder and CEO of Onesmite. Based in Patna, Bihar,
                  he is building Onesmite as a long-term technology holding company focused
                  on creating production-grade software products. The company's first product,
                  Onesmite Educa, serves India's competitive exam ecosystem through AI-powered
                  assessment infrastructure for students and teachers.
                </p>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={120}>
              <div className="p-7 border border-border bg-surface">
                <div className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-4 opacity-70">
                  Details
                </div>
                {[
                  { label: 'Role',         value: 'Founder & CEO' },
                  { label: 'Background',   value: 'Software Engineer & Product Builder' },
                  { label: 'Company',      value: 'Onesmite' },
                  { label: 'Location',     value: 'Patna, Bihar, India' },
                  { label: 'Contact',      value: 'contact@onesmite.com', isEmail: true },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[100px_1fr] gap-2 py-2.5 border-b border-border text-sm"
                  >
                    <span className="text-muted opacity-70">{row.label}</span>
                    {row.isEmail ? (
                      <a
                        href="mailto:contact@onesmite.com"
                        className="text-accent no-underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-primary">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </section>

        {/* ── Company Story ── */}
        <section
          aria-labelledby="story-heading"
          className="border-t border-border pt-16 mt-16"
        >
          <SectionWrapper>
            <div className="label-chip mb-6 inline-flex">
              Our Story
            </div>
            <h2
              id="story-heading"
              className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.025em] text-primary mb-8 max-w-[560px]"
            >
              Why Onesmite exists.
            </h2>
          </SectionWrapper>

          <div className="max-w-[680px]">
            {[
              `Onesmite was founded in 2024 with a clear and deliberate focus: to build software that solves real problems for real users in India. The decision to start with education was not accidental. Competitive exam preparation is one of the highest-stakes activities for millions of students across the country, yet the tools available to them — and to the educators who support them — remain fragmented and unreliable.`,
              `Rather than building broadly across categories, Onesmite deliberately chose to go deep in one focused vertical first. Onesmite Educa was built to give students access to structured practice tests and AI-driven post-test analysis, while giving teachers the infrastructure to create, manage, and monetize their assessments without friction. Every feature reflects a real workflow — nothing was invented to fill a marketing page.`,
              `The longer-term vision is to build a holding company that operates across multiple software verticals, each one solving a distinct problem with the same level of rigor. Revenue generated by each product funds the research and development of what comes next. This model keeps Onesmite financially independent and architecturally honest — every decision is anchored in what works, not what sounds ambitious.`,
            ].map((para, i) => (
              <SectionWrapper key={i} delay={i * 80}>
                <p className="text-[0.9375rem] text-muted leading-[1.8] mb-6">
                  {para}
                </p>
              </SectionWrapper>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section
          aria-labelledby="values-heading"
          className="border-t border-border pt-16 mt-16"
        >
          <SectionWrapper>
            <div className="label-chip mb-6 inline-flex">
              Operating Principles
            </div>
            <h2
              id="values-heading"
              className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.025em] text-primary mb-12 max-w-[520px]"
            >
              The principles that guide how we build.
            </h2>
          </SectionWrapper>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
            {PRINCIPLES_EXPANDED.map((p, i) => (
              <SectionWrapper key={p.number} delay={i * 70}>
                <article className="p-7 border border-border bg-surface h-full transition-colors duration-300 ease-out hover:border-border-strong hover:bg-surface-2">
                  <div className="font-mono text-[0.6875rem] text-accent tracking-[0.1em] mb-3.5 opacity-80">
                    {p.number}
                  </div>
                  <h3 className="font-heading text-[1.0625rem] font-bold text-primary mb-3.5 tracking-[-0.01em]">
                    {p.heading}
                  </h3>
                  <p className="text-[0.9375rem] text-muted leading-[1.75]">
                    {p.body}
                  </p>
                </article>
              </SectionWrapper>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
