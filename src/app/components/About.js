import Link from 'next/link'
import SectionWrapper from './SectionWrapper'
import { ArrowUpRight, Boxes, CheckCircle2 } from 'lucide-react'

const PRODUCTS = [
  {
    status: 'Active',
    title: 'Onesmite Educa',
    body: "AI-powered assessment infrastructure for India's competitive exam ecosystem, built for students and educators who need clarity, speed, and trust.",
    points: ['Mock tests and classrooms', 'AI post-test analysis', 'Educator monetization tools'],
    href: 'https://edu.onesmite.com',
  },
  {
    status: 'Research',
    title: 'Future Verticals',
    body: 'Additional software infrastructure products are researched only after a real workflow, revenue path, and technical moat are visible.',
    points: ['Focused markets', 'Revenue-funded R&D', 'Long-horizon architecture'],
    href: '/products',
  },
]

export default function About() {
  return (
    <section className="section-band" aria-labelledby="what-we-build-heading">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionWrapper>
          <div className="section-kicker mb-5">What we build</div>
          <h2
            id="what-we-build-heading"
            className="font-heading text-[clamp(2rem,5vw,3.55rem)] font-extrabold leading-[1.03] text-primary"
          >
            Focused products with serious operating depth.
          </h2>
          <p className="mt-5 max-w-[520px] text-base leading-[1.8] text-muted">
            Onesmite is structured as a parent company for software products that solve specific,
            high-friction problems. We ship one product deeply before expanding into the next.
          </p>
        </SectionWrapper>

        <div className="grid gap-4">
          {PRODUCTS.map((product, index) => (
            <SectionWrapper key={product.title} delay={index * 90}>
              <article className="card">
                <div className="relative z-10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <span className={`label-chip ${product.status === 'Active' ? 'active' : 'research'}`}>
                        {product.status}
                      </span>
                      <h3 className="mt-4 font-heading text-2xl font-extrabold text-primary">
                        {product.title}
                      </h3>
                    </div>
                    <div className="grid h-11 w-11 shrink-0 place-items-center border border-white/10 bg-white/0.04">
                      <Boxes size={18} className="text-accent" />
                    </div>
                  </div>
                  <p className="max-w-[620px] text-[0.95rem] leading-[1.75] text-muted">{product.body}</p>
                  <div className="mt-6 grid gap-2 sm:grid-cols-3">
                    {product.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle2 size={15} className="shrink-0 text-[#62d28f]" />
                        {point}
                      </div>
                    ))}
                  </div>
                  {product.href.startsWith('http') ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent no-underline"
                    >
                      Visit product <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <Link href={product.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent no-underline">
                      Explore roadmap <ArrowUpRight size={15} />
                    </Link>
                  )}
                </div>
              </article>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
