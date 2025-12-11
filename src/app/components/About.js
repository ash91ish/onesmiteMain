export default function About() {
    return (
        <section id="about" className="mt-20 space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                ABOUT ONESMITE
            </h2>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
                <p className="text-sm leading-relaxed text-slate-300">
                    OneSmite is an independent research-driven technology umbrella focused on
                    <span className="font-semibold text-slate-100">
                        {' '}building deep-tech products that actually ship and sustain in the real world
                    </span>{' '}
                    — beginning with education, expanding into applied artificial intelligence,
                    and advancing toward robotics and propulsion systems. Unlike concept-only
                    research houses, OneSmite operates on a
                    <span className="font-semibold text-slate-100">
                        {' '}product-first R&D model
                    </span>{' '}
                    where revenue, data, and real-world usage continuously shape long-term
                    technological innovation.
                    <br /><br />
                    Every Onesmite system is engineered with national-scale resilience,
                    export-ready infrastructure, and long-term maintainability as first-class
                    design parameters — not afterthoughts.
                </p>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-xs text-slate-300">
                    <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        OPERATING PRINCIPLES
                    </div>

                    <ul className="space-y-1.5">
                        <li>• Ship measurable products before publishing futuristic claims.</li>
                        <li>• Engineer for horizontal scale, auditability, and fault isolation.</li>
                        <li>• Keep humans, ethics, and governance at the center of automation.</li>
                        <li>• Use live revenue to fund frontier research — not speculation.</li>
                        <li>• Build India-first systems with global competitiveness.</li>
                    </ul>

                    {/* Added credibility strip */}
                    <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                        Product-Driven • Research-Backed • Long-Horizon Engineering
                    </div>
                </div>
            </div>
        </section>

    )
}
