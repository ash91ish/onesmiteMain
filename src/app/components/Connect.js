import Link from 'next/link'
import SectionWrapper from './SectionWrapper'
import { ArrowRight, Mail } from 'lucide-react'

export default function Connect() {
  return (
    <section className="section-band" aria-labelledby="cta-heading">
      <SectionWrapper>
        <div className="premium-panel p-[clamp(1.5rem,5vw,4rem)]">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="section-kicker mb-5">Start a conversation</div>
              <h2
                id="cta-heading"
                className="max-w-[760px] font-heading text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05] text-primary"
              >
                Building, teaching, investing, or partnering in the same direction?
              </h2>
              <p className="mt-5 max-w-[560px] text-base leading-[1.8] text-muted">
                Reach out for educator onboarding, product partnerships, integration conversations,
                or long-term alignment around Indian software infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="mailto:contact@onesmite.com" className="btn-primary" aria-label="Email contact@onesmite.com">
                <Mail size={16} />
                contact@onesmite.com
              </a>
              <Link href="/contact" className="btn-ghost">
                Contact page
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
