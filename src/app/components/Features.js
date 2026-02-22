'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Network, Database, ShieldAlert, Cpu, Activity, Workflow } from 'lucide-react'

export default function Features() {
    return (
        <div className="relative font-mono">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

            {/* R&D & Core Technology Framework */}
            <section id="rd" className="mt-20 space-y-16 relative z-10">

                {/* R&D Operating Model */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 border-b border-cyan-900/50 pb-4">
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
                            R&D_OPERATING_MODEL
                        </h2>
                        <div className="flex-1 h-px bg-cyan-900/30" />
                        <Network className="h-5 w-5 text-cyan-500/50" />
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Model 01 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border border-slate-800 bg-slate-900/50 p-6 overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <div className="mb-4 flex items-center justify-between">
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-emerald-400 animate-pulse" />
                                    01 • REAL USERS FIRST
                                </div>
                                <span className="text-[8px] text-slate-600 tracking-widest">FUNDING: ACTIVE</span>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-400 relative z-10">
                                Every research direction is anchored in a working product and real paying users. Revenue is not the enemy of research; it is the absolute shield that keeps operations independent, focused, and mathematically accountable.
                            </p>
                        </motion.div>

                        {/* Model 02 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border border-slate-800 bg-slate-900/50 p-6 overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <div className="mb-4 flex items-center justify-between">
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-fuchsia-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-fuchsia-400 animate-pulse" />
                                    02 • LONG-TERM_ROADMAP
                                </div>
                                <span className="text-[8px] text-slate-600 tracking-widest">TIMELINE: EXTENDED</span>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-400 relative z-10">
                                Onesmite architecture dictates that core systems require 7–10 years of disciplined evolution. Short agile cycles for SaaS interfaces, extended lifecycle development for frontier hardware tech — unified under a singular master sequence.
                            </p>
                        </motion.div>

                        {/* Model 03 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative border border-slate-800 bg-slate-900/50 p-6 overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <div className="mb-4 flex items-center justify-between">
                                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-amber-400 animate-pulse" />
                                    03 • ETHICS_PROTOCOL
                                </div>
                                <span className="text-[8px] text-slate-600 tracking-widest">GOVERNANCE: STRICT</span>
                            </div>
                            <p className="text-xs leading-relaxed text-slate-400 relative z-10">
                                Automation pipelines and neural networks are engineered strictly as cognitive amplifiers that extend human capability — deployed with absolute fail-safes. They are never designed as black-box shortcuts that remove systemic accountability.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Core Technology Capabilities - Abstract UI */}
                <div className="space-y-8 pt-8 relative">
                    {/* Decorative glowing orb behind capabilities */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-900/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="flex items-center gap-4 border-b border-cyan-900/50 pb-4 relative z-10">
                        <Cpu className="h-5 w-5 text-cyan-500/50" />
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
                            CORE_STACK_CAPABILITIES
                        </h2>
                        <div className="flex-1 h-px bg-cyan-900/30" />
                    </div>

                    {/* Hexagonal/Grid Layout for Capabilities */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                        {[
                            { icon: <Database />, title: 'AI-Driven Decision Engines', desc: 'Predictive modeling, recommendation vectors.', color: 'border-fuchsia-500/30 hover:border-fuchsia-400 bg-fuchsia-950/10 text-fuchsia-100' },
                            { icon: <Activity />, title: 'SaaS Infrastructure (Modular)', desc: 'High-availability, loosely coupled microservices.', color: 'border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/10 text-cyan-100' },
                            { icon: <ShieldAlert />, title: 'Ledger & Payout Systems', desc: 'Cryptographically verified transaction routing.', color: 'border-emerald-500/30 hover:border-emerald-400 bg-emerald-950/10 text-emerald-100' },
                            { icon: <Network />, title: 'Adaptive Learning & Scoring', desc: 'Real-time capability assessment matrices.', color: 'border-blue-500/30 hover:border-blue-400 bg-blue-950/10 text-blue-100' },
                            { icon: <Workflow />, title: 'Automation & Optimization', desc: 'Data-driven workflow reduction layers.', color: 'border-amber-500/30 hover:border-amber-400 bg-amber-950/10 text-amber-100' },
                            { icon: <Cpu />, title: 'Enterprise Security & Privacy', desc: 'Zero-trust architecture, strict data sovereignty.', color: 'border-slate-500/50 hover:border-slate-400 bg-slate-900/50 text-slate-200' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className={`group relative p-5 border ${item.color} transition-all duration-300 backdrop-blur-sm flex flex-col gap-3 h-full`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="flex items-center justify-between">
                                    <div className="p-2 border border-current rounded-sm bg-black/20 text-current">
                                        {React.cloneElement(item.icon, { className: 'h-4 w-4' })}
                                    </div>
                                    <span className="text-[9px] uppercase tracking-widest opacity-50 font-bold">NODE_0{idx + 1}</span>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-xs font-bold uppercase tracking-wider mb-1">{item.title}</h3>
                                    <p className="text-[10px] opacity-70 leading-relaxed font-sans">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Added: Technical Discipline Note */}
                    <div className="mt-8 flex items-start gap-4 border border-cyan-900/50 bg-cyan-950/20 p-4 relative z-10">
                        <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-1">
                                SYS.ARCH_DISCIPLINE
                            </div>
                            <div className="text-[11px] leading-relaxed text-slate-400 max-w-3xl">
                                All native Onesmite system topologies are designed with strict cryptographic auditability, rigid fault isolation, infinite horizontal scalability, and multi-decade maintainability as non-negotiable engineering axioms.
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
