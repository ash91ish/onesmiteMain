'use client'
import { motion } from 'framer-motion'
import { Terminal, Shield, ArrowRight, Fingerprint, Lock } from 'lucide-react'
import Link from 'next/link'

const Connect = () => {
    return (
        <div className="mt-20 space-y-16 font-mono relative">

            {/* Ambient background glow for comms section */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-900/10 blur-[150px] pointer-events-none rounded-full" />

            {/* Founder & Legal Identity - Terminal Style */}
            <section className="relative z-10 border border-slate-800 bg-slate-950/80 p-1">
                <div className="border border-slate-800 bg-slate-900/50 p-6 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-3">
                            <Fingerprint className="h-5 w-5 text-emerald-500/50" />
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-400">
                                ENTITY_DISCLOSURE
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-900/50 text-[9px] uppercase tracking-widest text-emerald-500">
                            <span className="w-1.5 h-1.5 bg-emerald-500 animate-[pulse_2s_infinite]" />
                            PUBLIC_RECORD
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">

                        {/* Founder Profile */}
                        <div className="space-y-4">
                            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 flex items-center gap-2">
                                <span className="w-4 h-[1px] bg-slate-700" />
                                SYS.ARCHITECT // FOUNDER & CEO
                            </div>

                            <div className="text-2xl font-bold text-white tracking-widest uppercase">
                                Ashish Kumar
                            </div>

                            <p className="text-xs leading-relaxed text-slate-400 max-w-xl border-l-2 border-slate-800 pl-4 py-1">
                                Primary architect of the OneSmite matrix. Building an independent AI and deep-tech research parent company strictly focused on deterministic, product-backed future-tech systems—spanning from initial scalable SaaS deployments into advanced applied intelligence, and dormant autonomous physical nodes. Operations are structurally revenue-shielded to maintain architectural sovereignty.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {['Software Engineering', 'Applied AI Systems', 'Kinetics (Future)'].map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-slate-900 border border-slate-800 text-[9px] text-slate-500 uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Legal / Address / Contact */}
                        <div className="border border-slate-800 bg-black/40 p-5 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Shield className="h-20 w-20 text-slate-500" />
                            </div>

                            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-4 border-b border-slate-800 pb-2">
                                REGISTRY_DATA
                            </div>

                            <div className="space-y-3 text-[11px] text-slate-400 relative z-10">
                                <div className="grid grid-cols-[80px_1fr] gap-2">
                                    <span className="text-slate-600 uppercase">ENTITY:</span>
                                    <span className="text-slate-300">OneSmite</span>
                                </div>
                                <div className="grid grid-cols-[80px_1fr] gap-2">
                                    <span className="text-slate-600 uppercase">ORIGIN:</span>
                                    <span className="text-emerald-400/80">India</span>
                                </div>
                                <div className="grid grid-cols-[80px_1fr] gap-2 items-start">
                                    <span className="text-slate-600 uppercase">LOC:</span>
                                    <span className="text-slate-300 leading-relaxed font-sans">
                                        House No 421<br />
                                        Musallahpur, Patna<br />
                                        Bihar – 800006<br />
                                        India
                                    </span>
                                </div>
                                <div className="grid grid-cols-[80px_1fr] gap-2 pt-2 border-t border-slate-800 mt-2">
                                    <span className="text-slate-600 uppercase">COMMS:</span>
                                    <a href="mailto:contact@onesmite.com" className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors uppercase tracking-wider">
                                        contact@onesmite.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Strategic Mission Panel */}
            <section className="relative overflow-hidden border-y border-emerald-900/50 bg-emerald-950/20 py-12 px-6 lg:px-12 z-10">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="max-w-4xl mx-auto space-y-8 relative z-10">
                    <div className="flex flex-col items-center text-center gap-4">
                        <Lock className="h-6 w-6 text-emerald-500/50" />

                        <h2 className="text-xs sm:text-lg md:text-xl font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-emerald-400">
                            NATIONAL_INFRASTRUCTURE_DIRECTIVE
                        </h2>

                        <p className="text-sm leading-relaxed text-emerald-100/70 max-w-2xl font-sans">
                            OneSmite fundamentally exists to construct critical, intelligent digital infrastructure that India natively owns, exports, and scales—eliminating long-horizon dependency on external platforms.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-4 text-[10px] text-emerald-500/70 uppercase tracking-widest font-bold pt-6 border-t border-emerald-900/50">
                        <div className="text-center p-3 border border-emerald-900/30 bg-black/20">Educator Nodes</div>
                        <div className="text-center p-3 border border-emerald-900/30 bg-black/20">SaaS Integration</div>
                        <div className="text-center p-3 border border-emerald-900/30 bg-black/20">R&D Collectives</div>
                        <div className="text-center p-3 border border-emerald-900/30 bg-black/20">Strategic Capital</div>
                    </div>
                </div>
            </section>

            {/* Secure Comms Link Setup */}
            <section id="contact" className="relative z-10 border border-cyan-900/50 bg-slate-950/80 p-8">
                <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] items-center">

                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-cyan-400 mb-6">
                            <Terminal className="h-5 w-5" />
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em]">
                                INITIATE_COMMS_LINK
                            </h2>
                        </div>

                        <p className="text-xs leading-relaxed text-slate-400 max-w-lg font-sans">
                            Development occurs under strict operational silence. For entities—educators, integration partners, or strategic capital—who comprehend deterministic systems engineering and long-horizon R&D timelines, connection protocols are open.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/"
                                className="group relative inline-flex items-center justify-center gap-3 bg-cyan-950/40 border border-cyan-500 p-4 overflow-hidden transition-all hover:bg-cyan-900/60 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                            >
                                <div className="absolute inset-0 w-0 bg-cyan-500/20 group-hover:w-full transition-all duration-300 ease-out" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100 relative z-10">
                                    Access Systems
                                </span>
                                <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform relative z-10" />
                            </Link>

                            <a
                                href="mailto:contact@onesmite.com"
                                className="inline-flex items-center justify-center p-4 border border-slate-700 bg-slate-900 hover:bg-slate-800 transition-colors text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300"
                            >
                                EMAIL_DIRECT
                            </a>
                        </div>
                    </div>

                    {/* Encrypted Summary Card */}
                    <div className="relative border border-slate-800 bg-black p-6 flex flex-col justify-center h-full">
                        <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border-b border-l border-slate-800 text-[10px] text-slate-600">
                            TX
                        </div>

                        <div className="text-[9px] font-bold uppercase tracking-[0.4em] text-cyan-500/50 mb-4">
                            CORE_DIRECTIVE_SUMMARY
                        </div>

                        <p className="text-xs leading-relaxed text-slate-300 font-sans italic border-l-2 border-cyan-900/50 pl-4 py-2">
                            "Fund tomorrow's frontier hardware concepts through the aggressive scaling and sovereignty of today's working software infrastructure."
                        </p>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Connect
