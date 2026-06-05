import SectionWrapper from './SectionWrapper'
import { ArrowUpRight } from 'lucide-react'

// Repurposed: WhatWeBuild section for the Home page
export default function About() {
  return (
    <section aria-labelledby="what-we-build-heading">
      <SectionWrapper>
        {/* Section label */}
        <div className="label-chip mb-5 inline-flex">
          What We Build
        </div>

        <h2
          id="what-we-build-heading"
          className="font-heading text-[clamp(1.625rem,3vw,2.25rem)] font-bold tracking-[-0.025em] text-primary mb-4 max-w-[540px]"
        >
          Focused products.<br />Real problems.
        </h2>

        <p className="text-base text-muted leading-[1.7] max-w-[620px] mb-12">
          Onesmite operates as a parent company with multiple focused product verticals.
          Each product is built to solve a specific, real problem — with long-term
          architecture and production-grade execution.
        </p>
      </SectionWrapper>

      {/* Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-1 bg-border border border-border">
        {/* Onesmite Educa Card */}
        <SectionWrapper delay={100}>
          <div className="card h-full border-none rounded-none flex flex-col">
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="mb-3">
                  <span className="label-chip active">Active</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary tracking-[-0.02em]">
                  Onesmite Educa
                </h3>
              </div>
            </div>

            <p className="text-[0.9375rem] text-muted leading-[1.65] flex-grow mb-6">
              AI-powered EdTech platform for India's competitive exam ecosystem.
              Serves students preparing for SSC, BPSC, Banking, and Railways exams,
              and enables teachers to build, manage, and monetize assessments.
            </p>

            <a
              href="https://edu.onesmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-accent no-underline transition-all duration-200 ease-out hover:gap-2"
            >
              Visit Onesmite Educa <ArrowUpRight size={14} />
            </a>
          </div>
        </SectionWrapper>

        {/* Additional Verticals Card */}
        <SectionWrapper delay={180}>
          <div className="card h-full border-none rounded-none flex flex-col">
            <div className="mb-5">
              <div className="mb-3">
                <span className="label-chip research">Research Phase</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary tracking-[-0.02em]">
                Additional Verticals
              </h3>
            </div>
            <p className="text-[0.9375rem] text-muted leading-[1.65]">
              Additional product verticals are currently under research.
            </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
