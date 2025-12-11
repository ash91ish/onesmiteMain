export default function IndiaVision() {
  return (
    <section className="py-24 bg-gradient-to-r from-emerald-900/25 to-cyan-900/25">
  <div className="mx-auto max-w-6xl px-6">

    {/* India Mission */}
    <div className="mb-16 text-center">
      <h2 className="mb-4 text-xl font-semibold">
        OneSmite & Self-Independent India
      </h2>

      <p className="mx-auto max-w-3xl text-slate-300 leading-relaxed">
        OneSmite is being built with a clear national intent — to create
        self-sustaining Indian technology systems that are not dependent on
        foreign platforms for core education, intelligence, and automation.
        Revenue generated in India is reinvested into Indian deep-tech research,
        talent development, and future digital infrastructure.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3 text-sm">
        <div className="rounded-lg border border-white/10 p-4 bg-slate-950/40">
          🇮🇳 Made in India
        </div>
        <div className="rounded-lg border border-white/10 p-4 bg-slate-950/40">
          🧠 Indian Talent First
        </div>
        <div className="rounded-lg border border-white/10 p-4 bg-slate-950/40">
          🚀 Global Export Vision
        </div>
      </div>
    </div>

    {/* Vision Timeline */}
    <section id="vision" className="mb-20 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          VISION 2035
        </h2>
        <p className="text-[11px] text-slate-400">
          A staged path — from one product to a national-scale portfolio of systems.
        </p>
      </div>

      <div className="relative border-l border-dashed border-slate-700/60 pl-6">
        <div className="absolute -left-px top-3 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.7)]" />

        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
              PHASE 1 • 2024–2026
            </div>
            <div className="text-sm font-semibold text-slate-50">
              Make Onesmite Edu Un-Ignorable
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Build, refine, and scale the education SaaS stack with strong unit
              economics, teacher monetisation, and auditable performance.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
              PHASE 2 • 2026–2030
            </div>
            <div className="text-sm font-semibold text-slate-50">
              Applied AI Across All Live Verticals
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Deploy real-world AI inside Onesmite platforms — recommendations,
              copilots, automation engines, and predictive analytics.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-[0.22em] text-indigo-300">
              PHASE 3 • 2030–2035
            </div>
            <div className="text-sm font-semibold text-slate-50">
              Robotics, Autonomous Systems & Propulsion
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Once the software stack funds itself independently, Onesmite moves
              into humanoids, automation hardware, and next-gen propulsion
              research without external dependency.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Future Sector Expansion */}
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
          FUTURE SECTOR EXPANSION
        </h2>
        <p className="text-[11px] text-slate-400">
          Activation after software stability & capital efficiency.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 text-xs text-slate-300">
        {[
          {
            title: 'Business Automation',
            desc: 'ERP, CRM, workforce intelligence, operations AI.',
          },
          {
            title: 'HealthTech',
            desc: 'Assessment, diagnostics AI, hospital & clinic automation.',
          },
          {
            title: 'GovTech',
            desc: 'Digital governance, public education, and civic automation.',
          },
          {
            title: 'Space & Propulsion',
            desc: 'Long-term autonomous exploration & propulsion research.',
          },
        ].map((sector) => (
          <div
            key={sector.title}
            className="rounded-xl border border-white/10 bg-slate-950/70 p-4 hover:border-indigo-400 transition"
          >
            <div className="font-semibold text-slate-100 mb-1">
              {sector.title}
            </div>
            <div className="text-[11px] text-slate-400">
              {sector.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Added National Strategy Note */}
      <div className="mt-6 rounded-xl border border-white/10 bg-slate-950/60 p-4 text-[11px] text-slate-400">
        National strategy: Onesmite enters non-education sectors only after
        stable revenue, data sovereignty, and infrastructure independence are
        achieved in the core software stack.
      </div>
    </section>

  </div>
</section>

  )
}
