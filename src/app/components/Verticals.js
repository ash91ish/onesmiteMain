'use client'
import { motion } from 'framer-motion'
import { Layers, Brain, Rocket, ArrowUpRight, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Verticals() {
    return (
        <section id="verticals" className="mt-20 space-y-12 relative font-mono">
            {/* Ambient background styling */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-4 border-l-2 border-indigo-500/50 pl-6 relative z-10">
                <div className="flex items-center gap-3">
                    <span className="flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-indigo-400">
                        ACTIVE_R&D_VERTICALS
                    </h2>
                </div>
                <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
                    Isolated development sectors operating under a unified strategic architecture. Each vertical functions as a self-contained product node designed for autonomous generation before matrix integration.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 relative z-10">

                {/* Education SaaS Node */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group flex flex-col relative bg-slate-950/80 backdrop-blur-md border-t-2 border-cyan-500 p-1 transition-all duration-300 shadow-[0_[-10px]_30px_rgba(34,211,238,0.1)] hover:shadow-[0_[-10px]_40px_rgba(34,211,238,0.2)]"
                >
                    <div className="bg-slate-900/50 p-6 flex-1 flex flex-col border border-slate-800/50 group-hover:border-cyan-500/30 transition-colors">
                        <div className="mb-6 flex justify-between items-start">
                            <div className="flex items-center justify-center w-10 h-10 border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 relative overflow-hidden">
                                <Layers className="h-5 w-5 relative z-10" />
                                <div className="absolute inset-0 bg-cyan-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] font-bold uppercase tracking-widest text-cyan-400 mb-1">NODE.01_SaaS</div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-950/40 border border-amber-900/50 text-[9px] text-amber-500 font-bold tracking-wider">
                                    <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                                    DEPLOYING
                                </div>
                            </div>
                        </div>

                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 group-hover:text-cyan-300 transition-colors">
                            Onesmite Edu Core
                        </h3>

                        <p className="text-xs leading-relaxed text-slate-400 mb-6 flex-1">
                            Next-generation AI-aware assessment and learning workflow architecture. Engineered for high-load institutional scaling and aggressive teacher monetisation vectors.
                        </p>

                        <div className="space-y-2 text-[10px] text-slate-500 mb-6 font-sans">
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-cyan-500/50" /> MCQ-first digital examination grid</div>
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-cyan-500/50" /> Automated payout & earnings ledger</div>
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-cyan-500/50" /> Zero-trust institutional access control</div>
                        </div>

                        <button className="mt-auto flex items-center justify-between w-full p-3 bg-cyan-950/20 border border-cyan-900/50 text-xs font-bold text-cyan-400 group-hover:bg-cyan-900/40 transition-colors uppercase tracking-widest">
                            <span>Init Sequence</span>
                            <ArrowUpRight className="h-4 w-4" />
                        </button>
                    </div>
                </motion.div>

                {/* Applied AI Node */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group flex flex-col relative bg-slate-950/80 backdrop-blur-md border-t-2 border-fuchsia-500 p-1 transition-all duration-300 shadow-[0_[-10px]_30px_rgba(217,70,239,0.1)] hover:shadow-[0_[-10px]_40px_rgba(217,70,239,0.2)]"
                >
                    <div className="bg-slate-900/50 p-6 flex-1 flex flex-col border border-slate-800/50 group-hover:border-fuchsia-500/30 transition-colors">
                        <div className="mb-6 flex justify-between items-start">
                            <div className="flex items-center justify-center w-10 h-10 border border-fuchsia-500/30 bg-fuchsia-950/30 text-fuchsia-400 relative overflow-hidden">
                                <Brain className="h-5 w-5 relative z-10" />
                                <div className="absolute inset-0 bg-fuchsia-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] font-bold uppercase tracking-widest text-fuchsia-400 mb-1">NODE.02_AI</div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-950/40 border border-amber-900/50 text-[9px] text-amber-500 font-bold tracking-wider">
                                    <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                                    INTEGRATING
                                </div>
                            </div>
                        </div>

                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 group-hover:text-fuchsia-300 transition-colors">
                            Applied Neural Logic
                        </h3>

                        <p className="text-xs leading-relaxed text-slate-400 mb-6 flex-1">
                            Domain-bound applied AI systems embedded directly into the structural core of Onesmite products. Restricted to functional automation, decision modeling, and predictive routing.
                        </p>

                        <div className="space-y-2 text-[10px] text-slate-500 mb-6 font-sans">
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-fuchsia-500/50" /> Behavioral learning path routing</div>
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-fuchsia-500/50" /> Predictive operational analytics</div>
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-fuchsia-500/50" /> Autonomous admin copilots</div>
                        </div>

                        <div className="mt-auto flex items-center justify-between w-full p-3 bg-fuchsia-950/10 border border-fuchsia-900/30 text-xs font-bold text-fuchsia-500/50 uppercase tracking-widest cursor-not-allowed">
                            <span>Locked: Embedded</span>
                        </div>
                    </div>
                </motion.div>

                {/* Robotics & Propulsion Node */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="group flex flex-col relative bg-slate-950/80 backdrop-blur-md border-t-2 border-indigo-500 p-1 transition-all duration-300 shadow-[0_[-10px]_30px_rgba(99,102,241,0.1)] hover:shadow-[0_[-10px]_40px_rgba(99,102,241,0.2)]"
                >
                    <div className="bg-slate-900/50 p-6 flex-1 flex flex-col border border-slate-800/50 group-hover:border-indigo-500/30 transition-colors">
                        <div className="mb-6 flex justify-between items-start">
                            <div className="flex items-center justify-center w-10 h-10 border border-indigo-500/30 bg-indigo-950/30 text-indigo-400 relative overflow-hidden">
                                <Rocket className="h-5 w-5 relative z-10" />
                                <div className="absolute inset-0 bg-indigo-400/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] font-bold uppercase tracking-widest text-indigo-400 mb-1">NODE.03_PHYSICAL</div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-800/50 border border-slate-700/50 text-[9px] text-slate-400 font-bold tracking-wider">
                                    <span className="w-1.5 h-1.5 bg-slate-500" />
                                    DORMANT
                                </div>
                            </div>
                        </div>

                        <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 group-hover:text-indigo-300 transition-colors">
                            Kinetics & Propulsion
                        </h3>

                        <p className="text-xs leading-relaxed text-slate-400 mb-6 flex-1">
                            Frontier laboratory research into human-scale robotic chassis, silent high-thrust propulsion vectors, and semi-autonomous physical traversal systems.
                        </p>

                        <div className="space-y-2 text-[10px] text-slate-500 mb-6 font-sans">
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-indigo-500/50" /> Bipedal motion control matrices</div>
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-indigo-500/50" /> Sub-acoustic thrust generation</div>
                            <div className="flex items-center gap-2"><Zap className="h-3 w-3 text-indigo-500/50" /> Software-funded hardware R&D</div>
                        </div>

                        <div className="mt-auto flex items-center justify-between w-full p-3 bg-indigo-950/10 border border-indigo-900/30 text-xs font-bold text-indigo-500/50 uppercase tracking-widest cursor-not-allowed">
                            <span>Awaiting Activation</span>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Strategic Directive Banner */}
            <div className="relative border border-slate-800 bg-slate-900/80 p-5 mt-8 overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-slate-500 transition-colors group-hover:bg-cyan-500" />
                <div className="flex items-start gap-4">
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.3em] text-cyan-500/50 group-hover:text-cyan-400 transition-colors">
                        STRATEGIC<br />SEQUENCING<br />PROTOCOL
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-4xl border-l border-slate-800 pl-4 py-1">
                        System directive forces Onesmite to deliberately achieve absolute scale and profitability within the digital education infrastructure (Node.01) prior to aggressive embedding of applied AI (Node.02). Activation of physical robotics and advanced propulsion arrays (Node.03) requires preceding operational and financial sovereignty from software layers. Any deviation from this sequence is critically restricted.
                    </p>
                </div>
            </div>
        </section>
    )
}
