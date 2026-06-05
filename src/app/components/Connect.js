import SectionWrapper from './SectionWrapper'
import { ArrowRight } from 'lucide-react'

// Repurposed: FooterCTA section for the Home page
export default function Connect() {
  return (
    <section aria-labelledby="cta-heading">
      <SectionWrapper>
        <div className="border border-border bg-surface p-[clamp(2.5rem,5vw,4rem)] relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute -bottom-[80px] -right-[80px] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(92,107,255,0.07)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-[560px]">
            <h2
              id="cta-heading"
              className="font-heading text-[clamp(1.625rem,3vw,2.125rem)] font-bold tracking-[-0.025em] text-primary mb-3.5"
            >
              Interested in what we're building?
            </h2>
            <p className="text-base text-muted leading-[1.65] mb-8">
              Reach out to start a conversation.
            </p>
            <a
              href="mailto:contact@onesmite.com"
              className="btn-primary"
              aria-label="Email contact@onesmite.com"
            >
              contact@onesmite.com
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
