export default function About() {
    return (
        <section id="about" className="mt-20 space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                ABOUT ONESMITE
            </h2>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">

                <p className="text-sm leading-relaxed text-slate-300">
                    OneSmite is a research-led technology company focused on
                    <span className="font-semibold text-slate-100">
                        {' '}designing and delivering deep-tech systems that operate at real-world scale
                    </span>.
                    Our work begins with education technology and extends into applied artificial
                    intelligence, automation, and long-horizon robotics and propulsion research.
                    <br /><br />
                    The organisation follows a disciplined
                    <span className="font-semibold text-slate-100"> product-first R&D approach </span>
                    where every research direction is validated through measurable deployments,
                    revenue-driven sustainability, and continuous feedback from real users.
                    <br /><br />
                    All Onesmite platforms are engineered with a focus on reliability,
                    long-term maintainability, security, and national-scale usability — ensuring
                    that the systems built today can evolve into tomorrow’s infrastructure.
                </p>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-xs text-slate-300">
                    <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        OPERATING PRINCIPLES
                    </div>

                    <ul className="space-y-1.5">
                        <li>• Build validated products before expanding into new domains.</li>
                        <li>• Engineer for scale, robustness, and operational auditability.</li>
                        <li>• Maintain responsible, human-centric automation practices.</li>
                        <li>• Fund long-term research through sustainable product growth.</li>
                        <li>• Develop India-first systems with global performance standards.</li>
                    </ul>

                    <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                        Product-Focused • Research-Driven • Engineering Excellence
                    </div>
                </div>
            </div>
        </section>

    )
}
