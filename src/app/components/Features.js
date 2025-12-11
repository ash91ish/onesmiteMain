export default function Features() {

    return (
        <div>
            {/* R&D & Core Technology Framework */}
            <section id="rd" className="mt-20 space-y-10">

                {/* R&D Operating Model */}
                <div className="space-y-6">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                        R&D OPERATING MODEL
                    </h2>

                    <div className="grid gap-5 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                01 • REAL USERS FIRST
                            </div>
                            <p className="text-xs leading-relaxed text-slate-300">
                                Every research direction is anchored in a working product and
                                real paying users. Revenue is not the enemy of research; it is
                                what keeps it independent, focused, and accountable.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                02 • LONG-TERM ROADMAP
                            </div>
                            <p className="text-xs leading-relaxed text-slate-300">
                                Onesmite accepts that some systems require 7–10 years of disciplined
                                evolution. Short cycles for software, long cycles for frontier tech —
                                all under a single master roadmap.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                            <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                                03 • ETHICS & SYSTEMS THINKING
                            </div>
                            <p className="text-xs leading-relaxed text-slate-300">
                                Automation and AI are engineered as tools that extend human
                                capability — never as shortcuts that remove responsibility,
                                accountability, or governance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Technology Capabilities */}
                <div className="space-y-6 pt-6">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                        CORE TECHNOLOGY CAPABILITIES
                    </h2>

                    <div className="grid gap-4 md:grid-cols-3 text-sm">
                        {[
                            'AI-Driven Decision & Recommendation Engines',
                            'Next-Generation Modular SaaS Infrastructure',
                            'Secure Payment, Ledger & Payout Systems',
                            'Adaptive Learning, Assessment & Scoring',
                            'Data-Backed Automation & Optimization Layers',
                            'Enterprise-Grade Security, Privacy & Compliance',
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-white/10 bg-slate-950/70 p-4 text-slate-300 hover:border-cyan-400 transition"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* Added: Technical Discipline Note */}
                    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-[11px] text-slate-400">
                        Technical discipline: All Onesmite systems are designed with
                        auditability, fault isolation, horizontal scalability, and long-term
                        maintainability as non-negotiable engineering standards.
                    </div>
                </div>

            </section>

        </div>
    )
}
