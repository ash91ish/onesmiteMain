import { ArrowRight } from 'lucide-react'
import React from 'react'

const Connect = () => {
    return (
        <div className="mt-20 space-y-12">
            {/* Founder & Legal Identity */}
            <section className="mt-20 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                        FOUNDER & LEGAL IDENTITY
                    </h2>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        Public Disclosure
                    </span>
                </div>

                <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">

                    {/* Founder Profile */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Founder
                        </div>

                        <div className="text-sm font-semibold text-slate-50">
                            Ashish Kumar
                        </div>

                        <div className="mt-1 text-xs text-slate-400">
                            Founder & Systems Architect, OneSmite
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-slate-300">
                            Founder of OneSmite — a long-horizon R&D umbrella focused on building
                            product-backed deep-tech systems in education, applied AI, and future
                            autonomous technologies. OneSmite is structured as a revenue-funded
                            research organization with national-scale infrastructure intent.
                        </p>

                        {/* Optional credentials row */}
                        <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-400">
                            <span>• Software Engineering</span>
                            <span>• Applied AI Systems</span>
                            <span>• Robotics Research (Long Horizon)</span>
                        </div>
                    </div>

                    {/* Legal / Address / Contact */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-xs text-slate-300">
                        <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                            Registered Office / Contact
                        </div>

                        <div className="space-y-2 leading-relaxed">
                            <div>
                                <span className="text-slate-400">Brand Name:</span> OneSmite
                            </div>
                            <div>
                                <span className="text-slate-400">Founder:</span> Ashish Kumar
                            </div>
                            <div>
                                <span className="text-slate-400">Country:</span> India
                            </div>

                            {/* Replace this block with your exact address */}
                            <div>
                                <span className="text-slate-400">Office Address:</span><br />
                                House No / 421,<br />
                                Musallahpur / Patna,<br />
                                Patna, Bihar – 800006,<br />
                                India
                            </div>

                            <div className="pt-2">
                                <span className="text-slate-400">Contact Email:</span>{' '}
                                <a href="mailto:contact@onesmite.com" className="text-cyan-300 hover:underline">
                                    contact@onesmite.com
                                </a>
                            </div>
                        </div>

                        {/* Legal Tone Footer */}
                        <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                            Corporate Identity & Public Disclosures
                        </div>
                    </div>

                </div>
            </section>

            {/* Self-Independent India + Strategic Mission */}
            <section className="space-y-6 rounded-3xl border border-white/10 bg-linear-to-r from-emerald-900/20 to-cyan-900/20 p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                        ONESMITE & SELF-INDEPENDENT INDIA
                    </h2>
                    <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                        National Tech Mission
                    </span>
                </div>

                <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                    OneSmite is being built with a national-scale intent — to create critical
                    digital and intelligent infrastructure that India can own, export, and
                    scale without long-term technological dependency. Education, AI, and
                    automation form the first pillars of this self-sustaining ecosystem.
                </p>

                <div className="grid gap-4 sm:grid-cols-3 text-xs text-slate-300">
                    <div className="rounded-xl border border-white/10 p-4 text-center bg-slate-950/40">
                        🇮🇳 Built by Indian Engineers
                    </div>
                    <div className="rounded-xl border border-white/10 p-4 text-center bg-slate-950/40">
                        🧠 Indian Data, Indian Intelligence
                    </div>
                    <div className="rounded-xl border border-white/10 p-4 text-center bg-slate-950/40">
                        🚀 Global Export-Ready Systems
                    </div>
                </div>

                {/* Added: Strategic Participation Layer */}
                <div className="grid gap-3 sm:grid-cols-4 pt-4 text-[11px] text-slate-300">
                    <div className="rounded-lg border border-white/10 p-3 text-center">
                        Educators & Institutions
                    </div>
                    <div className="rounded-lg border border-white/10 p-3 text-center">
                        Industry & SaaS Partners
                    </div>
                    <div className="rounded-lg border border-white/10 p-3 text-center">
                        Research Collaborators
                    </div>
                    <div className="rounded-lg border border-white/10 p-3 text-center">
                        Early-Stage Investors
                    </div>
                </div>
            </section>

            {/* Connect / Strategic CTA */}
            <section id="contact" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
                    <div>
                        <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                            CONNECT WITH ONESMITE
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                            Onesmite is being built quietly but deliberately. If you are a
                            collaborator, educator, partner, or early-stage investor who
                            understands long-term systems thinking, you can begin by exploring
                            the active product layer and engaging at the right depth.
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-3">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_10px_40px_rgba(8,145,178,0.7)] transition hover:-translate-y-0.5 hover:bg-cyan-400"
                            >
                                Onesmite Edu • Coming Soon
                                <ArrowRight className="h-4 w-4" />
                            </a>


                            <a
                                href="mailto:contact@onesmite.com"
                                className="text-xs font-medium text-slate-200 hover:text-slate-50"
                            >
                                Or write to contact@onesmite.com
                            </a>
                        </div>

                        {/* Added: Trust Signals */}
                        <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-slate-400">
                            <span>• India-first infrastructure</span>
                            <span>• Revenue-backed R&D</span>
                            <span>• Long-term frontier roadmap</span>
                        </div>
                    </div>

                    {/* Branding Summary Card */}
                    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-300">
                        <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                            ONE LINE THAT SUMS IT UP
                        </div>

                        <p className="leading-relaxed text-slate-200">
                            <span className="font-semibold text-cyan-300">
                                “Onesmite is an R&D house that funds tomorrow’s frontier tech
                                with today’s working products.”
                            </span>{' '}
                            Education comes first; AI and hardware follow — all under one
                            coherent systems mindset built for national and global impact.
                        </p>

                        {/* Added: Legal/Professional Signal */}
                        <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-slate-500">
                            Independent • Research-Driven • Product-Backed
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Connect
