import { Layers, Brain, Rocket } from 'lucide-react'

export default function Verticals() {
    return (

        <section id="verticals" className="mt-20 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    R&D VERTICALS
                </h2>
                <p className="text-[11px] text-slate-400">
                    Each vertical is a disciplined product line under one unified R&D strategy.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {/* Education SaaS */}
                <div className="flex flex-col rounded-2xl border border-cyan-500/40 bg-slate-950/60 p-4 shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                    <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10">
                                <Layers className="h-4 w-4 text-cyan-300" />
                            </div>
                            <div>
                                <div className="text-[11px] uppercase tracking-[0.22em] text-cyan-300">
                                    LIVE PRODUCT
                                </div>
                                <div className="text-sm font-semibold text-slate-50">
                                    Onesmite Edu (Education SaaS)
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://edu.onesmite.com"
                            className="rounded-full bg-cyan-500/15 px-3 py-1 text-[11px] font-medium text-cyan-100 hover:bg-cyan-500/25 transition"
                        >
                            Open Platform
                        </a>
                    </div>

                    <p className="mb-3 text-xs leading-relaxed text-slate-300">
                        A full-stack AI-aware education and assessment platform engineered for
                        schools, institutes, and independent educators — designed as a scalable,
                        monetizable SaaS from first principles.
                    </p>

                    <ul className="mb-3 space-y-1 text-[11px] text-slate-400">
                        <li>• MCQ-first digital examination architecture.</li>
                        <li>• Teacher monetisation, payouts & earnings governance.</li>
                        <li>• Multi-tenant SaaS with institutional-grade access control.</li>
                    </ul>

                    <div className="mt-auto flex items-center justify-between text-[11px] text-slate-400">
                        <span>Stage: Revenue-backed production scale</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                </div>

                {/* Applied Artificial Intelligence */}
                <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/10">
                            <Brain className="h-4 w-4 text-fuchsia-300" />
                        </div>
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.22em] text-fuchsia-300">
                                PIPELINE
                            </div>
                            <div className="text-sm font-semibold text-slate-50">
                                Onesmite Applied AI
                            </div>
                        </div>
                    </div>

                    <p className="mb-3 text-xs leading-relaxed text-slate-300">
                        Domain-bound applied AI systems directly embedded into Onesmite products —
                        focused on recommendations, automation, optimisation and governance rather
                        than generic conversational models.
                    </p>

                    <ul className="mb-3 space-y-1 text-[11px] text-slate-400">
                        <li>• Personalized test & learning recommendations.</li>
                        <li>• Intelligent pricing, analytics & decision support.</li>
                        <li>• AI copilots for teachers, operators & administrators.</li>
                    </ul>

                    <div className="mt-auto flex items-center justify-between text-[11px] text-slate-400">
                        <span>Stage: Integrated prototype inside Edu</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    </div>
                </div>

                {/* Robotics & Propulsion */}
                <div className="flex flex-col rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10">
                            <Rocket className="h-4 w-4 text-indigo-300" />
                        </div>
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.22em] text-indigo-300">
                                LONG HORIZON
                            </div>
                            <div className="text-sm font-semibold text-slate-50">
                                Onesmite Robotics & Propulsion
                            </div>
                        </div>
                    </div>

                    <p className="mb-3 text-xs leading-relaxed text-slate-300">
                        Frontier research into human-scale robotics, silent high-thrust propulsion,
                        and autonomous physical systems — activated only after the software stack
                        achieves capital and infrastructure independence.
                    </p>

                    <ul className="mb-3 space-y-1 text-[11px] text-slate-400">
                        <li>• Humanoid motion control & autonomy.</li>
                        <li>• Fossil-free, low-noise propulsion concepts.</li>
                        <li>• Hardware R&D funded by software revenue.</li>
                    </ul>

                    <div className="mt-auto flex items-center justify-between text-[11px] text-slate-400">
                        <span>Stage: Concept research & literature validation</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                    </div>
                </div>
            </div>

            {/* Added Strategic Note */}
            <div className="rounded-xl border border-white/10 bg-slate-950/60 p-4 text-[11px] text-slate-400">
                Strategic sequencing: Onesmite deliberately scales profitable education
                infrastructure first, embeds applied AI second, and enters physical
                robotics and propulsion only after financial and operational independence
                is secured.
            </div>
        </section>

    )
}
