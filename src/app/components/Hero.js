'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Atom, Brain, Cpu, Globe2, Layers, LineChart, ShieldCheck, TestTube2 } from 'lucide-react'
import { scrollToSection } from '../utils/scroll'

export default function Hero() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.12 }}
                className="space-y-7"
            >
                <motion.div
                    variants={fadeInUp}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-[0.2em] text-slate-200"
                >
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    ADVANCED R&D • PRODUCT-FIRST ENGINEERING
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl"
                >
                    Designing the systems
                    <span className="bg-linear-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                        {' '}
                        that will run tomorrow.
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-[15px]"
                >
                    OneSmite is an independent deep-tech organisation focused on building
                    <span className="font-semibold text-slate-100">
                        {' '}real, production-ready systems
                    </span>{' '}
                    across education technology, applied AI, automation, and long-horizon
                    robotics research. Our work is grounded in a product-first engineering
                    approach — not theoretical concepts, but resilient digital infrastructure
                    designed for practical use by learners, institutions, and enterprises.
                </motion.p>


                {/* Primary CTAs */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap items-center gap-4"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_10px_40px_rgba(8,145,178,0.7)] transition hover:-translate-y-0.5 hover:bg-cyan-400"
                    >
                        Beta Coming Soon
                        <ArrowRight className="h-4 w-4" />
                    </a>


                    <button
                        onClick={() => scrollToSection('verticals')}
                        className="inline-flex items-center gap-2 text-xs font-medium text-slate-200 hover:text-slate-50"
                    >
                        Explore R&D verticals
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[11px]">
                            ↓
                        </span>
                    </button>
                </motion.div>

                {/* Trust & Scale Signals */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-wrap gap-4 text-[11px] text-slate-400"
                >
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-emerald-400" />
                        <span>Live deployments • Not lab demos</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Globe2 className="h-4 w-4 text-cyan-400" />
                        <span>India-built • Globally aligned</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-fuchsia-400" />
                        <span>Designed for scale, funding & export</span>
                    </div>
                </motion.div>

                {/* Added Institutional Signal */}
                <motion.div
                    variants={fadeInUp}
                    className="text-[10px] uppercase tracking-[0.22em] text-slate-500"
                >
                    Independent R&D • Product-Backed Innovation • Long-Horizon Engineering
                </motion.div>
            </motion.div>

            {/* Right hero visual */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 80, delay: 0.1 }}
                className="relative"
            >
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.85)]">
                    <div className="mb-4 flex items-center justify-between text-[11px] text-slate-300">
                        <span className="inline-flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900">
                                <Cpu className="h-3.5 w-3.5 text-cyan-300" />
                            </span>
                            ONESMITE • SYSTEMS VIEW
                        </span>
                        <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-slate-400">
                            ACTIVE STACK
                        </span>
                    </div>

                    <div className="grid gap-3 text-xs text-slate-200">
                        <div className="flex items-center justify-between rounded-2xl bg-slate-900/70 px-4 py-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15">
                                    <Layers className="h-4 w-4 text-cyan-300" />
                                </div>
                                <div>
                                    <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                        LAYER 1
                                    </div>
                                    <div className="text-[13px] font-semibold">
                                        Infrastructure & Platforms
                                    </div>
                                </div>
                            </div>
                            {/* <span className="text-[11px] text-emerald-300">
            Live • Onesmite Edu
          </span> */}
                            <span className="text-[11px] text-amber-300">
                                Coming Soon • Onesmite Edu
                            </span>


                        </div>

                        <div className="grid gap-2 rounded-2xl bg-slate-900/60 p-4">
                            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                                PIPELINE
                                <span className="h-px flex-1 bg-linear-to-r from-slate-500/50 via-cyan-400/70 to-fuchsia-400/60" />
                            </div>

                            <div className="grid gap-2.5 text-[11px] sm:grid-cols-2">
                                <div className="flex items-start gap-2">
                                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-fuchsia-500/10">
                                        <Brain className="h-3.5 w-3.5 text-fuchsia-300" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-100">
                                            Applied AI Systems
                                        </div>
                                        <div className="text-[11px] text-slate-400">
                                            Recommendation engines, decision support, and
                                            automation layers powering real workflows.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/10">
                                        <Atom className="h-3.5 w-3.5 text-cyan-300" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-slate-100">
                                            Robotics & Propulsion (Future)
                                        </div>
                                        <div className="text-[11px] text-slate-400">
                                            High-thrust, low-noise tech and adaptive humanoid
                                            systems, activated after SaaS scale.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between rounded-2xl bg-linear-to-r from-cyan-500/15 via-slate-900/80 to-fuchsia-500/15 px-4 py-3 text-[11px]">
                            <div className="flex items-center gap-2 text-slate-200">
                                <TestTube2 className="h-4 w-4 text-emerald-300" />
                                <span>“Prototype → Users → Data → Iterate → Scale”</span>
                            </div>
                            <span className="hidden rounded-full bg-slate-950/70 px-2 py-1 text-[10px] text-cyan-200 sm:inline">
                                Onesmite Method
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}
