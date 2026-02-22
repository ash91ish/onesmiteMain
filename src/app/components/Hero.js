'use client'
import { motion } from 'framer-motion'
import { Atom, Brain, Cpu, TerminalSquare, ShieldCheck, Activity, Zap, Database, Network } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
    const [scrambleText, setScrambleText] = useState('INITIALIZING_SYSTEM...')

    // Simple matrix typing effect for the hero sub-text
    useEffect(() => {
        const textToType = "SECURE PROTOCOL ENGAGED // PRODUCTION-READY SYSTEMS ONLINE // STANDBY FOR R&D UPLINK..."
        let currentText = ""
        let i = 0
        const interval = setInterval(() => {
            currentText += textToType.charAt(i)
            setScrambleText(currentText)
            i++
            if (i === textToType.length) clearInterval(interval)
        }, 50)
        return () => clearInterval(interval)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
    }

    return (
        <section className="relative min-h-[85vh] flex items-center pt-20 pb-10">
            {/* Ambient cyber glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] pointer-events-none rounded-full" />

            <div className="w-full grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center relative z-10">

                {/* Left Column: Mission Control */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Status Badge */}
                    <motion.div variants={itemVariants} className="inline-flex items-center gap-3 border border-emerald-900/50 bg-emerald-950/20 px-4 py-2 text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        SYS.STATUS: OPTIMAL [R&D ACTIVE]
                    </motion.div>

                    {/* Main Headline */}
                    <motion.div variants={itemVariants} className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[0.9]">
                            Constructing
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 text-glow-sm">
                                Tomorrow's
                            </span>
                            <br />
                            Infrastructure.
                        </h1>
                    </motion.div>

                    {/* Cyber Text Stream */}
                    <motion.div variants={itemVariants} className="font-mono text-xs text-cyan-500/80 h-4 uppercase tracking-[0.2em]">
                        {scrambleText} <span className="animate-pulse">_</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p variants={itemVariants} className="max-w-xl text-sm leading-relaxed text-slate-400 font-mono tracking-wide">
                        <span className="text-cyan-400 font-bold">&gt; ONESMITE_LABS:</span> A frontier deep-tech and AI research parent company. We build <span className="text-white bg-white/10 px-1">production-ready future tech</span>, where platforms like our Educational SaaS are just the first deployed nodes in a larger ecosystem of applied intelligence and long-horizon physical systems.
                    </motion.p>

                    {/* HUD Action Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
                        <Link href="/research" className="group relative px-6 py-3 bg-cyan-950/30 border border-cyan-500/50 hover:bg-cyan-900/40 hover:border-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.1)] overflow-hidden flex items-center gap-3">
                            <div className="absolute inset-0 w-1 bg-cyan-400 group-hover:w-full transition-all duration-300 opacity-20" />
                            <Activity className="h-4 w-4 text-cyan-400 relative z-10 group-hover:animate-pulse" />
                            <span className="text-xs font-mono font-bold tracking-widest text-cyan-100 relative z-10 uppercase">
                                Init sequence
                            </span>
                        </Link>

                        <Link href="/verticals" className="group flex items-center gap-2 text-xs font-mono tracking-widest text-slate-500 hover:text-cyan-400 transition-colors uppercase">
                            <TerminalSquare className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            [ View Active Nodes ]
                        </Link>
                    </motion.div>

                    {/* Data Points */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10 border-t border-slate-800/50">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-500 uppercase tracking-widest">
                                <Activity className="h-3 w-3" /> Ops
                            </div>
                            <div className="text-xs font-bold text-slate-200">LIVE.DEPLOYS</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-fuchsia-500 uppercase tracking-widest">
                                <ShieldCheck className="h-3 w-3" /> Sec
                            </div>
                            <div className="text-xs font-bold text-slate-200">ZERO.TRUST_ARCH</div>
                        </div>
                        <div className="flex flex-col gap-1 md:block hidden">
                            <div className="flex items-center gap-1.5 text-[9px] font-mono text-emerald-500 uppercase tracking-widest">
                                <Zap className="h-3 w-3" /> Perf
                            </div>
                            <div className="text-xs font-bold text-slate-200">SCALE.INFINITE</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Deep AI Data Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="relative flex items-center justify-center w-full mt-10 lg:mt-0 h-[350px] sm:h-[450px] lg:h-auto lg:aspect-square overflow-hidden lg:overflow-visible"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] flex items-center justify-center scale-[0.65] sm:scale-[0.85] lg:scale-100">
                        {/* Outer Containment Field */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                            className="absolute w-full h-full border border-cyan-900/20 rounded-full"
                            style={{ borderStyle: 'dashed', borderWidth: '1px' }}
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[380px] h-[380px] border border-fuchsia-900/20 rounded-full"
                            style={{ borderTopWidth: '2px', borderBottomWidth: '2px', borderStyle: 'solid' }}
                        />

                        {/* Central Cognitive Core */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-20 w-36 h-36 bg-slate-950/80 backdrop-blur-md border border-fuchsia-500/40 rounded-full shadow-[0_0_50px_rgba(217,70,239,0.2)] flex flex-col items-center justify-center gap-2 overflow-hidden"
                        >
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-2 border-2 border-dashed border-cyan-500/30 rounded-full"
                            />
                            <Brain className="h-8 w-8 text-fuchsia-400 animate-pulse relative z-10" />
                            <div className="text-center font-mono relative z-10">
                                <div className="text-[9px] text-cyan-400 tracking-[0.3em] font-bold">NEURAL_CORE</div>
                                <div className="text-xs font-bold text-white tracking-widest text-glow-sm">v_0.2</div>
                            </div>
                        </motion.div>

                        {/* Neural Synapse Connections (SVG) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 450 450">
                            {/* Line to Top Left */}
                            <motion.path
                                d="M225,225 L100,100"
                                stroke="rgba(34, 211, 238, 0.4)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1, 1, 0] }}
                                transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1], ease: "easeInOut" }}
                            />
                            {/* Line to Top Right */}
                            <motion.path
                                d="M225,225 L350,120"
                                stroke="rgba(217, 70, 239, 0.4)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1, 1, 0] }}
                                transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.6, 1], ease: "easeInOut", delay: 1 }}
                            />
                            {/* Line to Bottom Left */}
                            <motion.path
                                d="M225,225 L120,350"
                                stroke="rgba(16, 185, 129, 0.4)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1, 1, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.4, 0.6, 1], ease: "easeInOut", delay: 0.5 }}
                            />
                            {/* Line to Bottom Right */}
                            <motion.path
                                d="M225,225 L320,320"
                                stroke="rgba(34, 211, 238, 0.4)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: [0, 1, 1, 0] }}
                                transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.4, 0.6, 1], ease: "easeInOut", delay: 1.5 }}
                            />
                        </svg>

                        {/* Floating Nodes */}
                        {/* Top Left Node */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute z-20 top-[60px] left-[20px] bg-slate-900/90 backdrop-blur-md border border-cyan-500/50 pr-6 p-3 shadow-[0_0_20px_rgba(34,211,238,0.15)] rounded-l-none border-l-4 border-l-cyan-400"
                        >
                            <div className="text-[8px] font-mono text-cyan-500/80 uppercase tracking-widest mb-1">Process Node</div>
                            <div className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
                                <Network className="h-3 w-3 text-cyan-400" />
                                Model.Train
                            </div>
                        </motion.div>

                        {/* Top Right Node */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute z-20 top-[80px] right-[10px] bg-slate-900/90 backdrop-blur-md border border-fuchsia-500/50 pl-6 p-3 shadow-[0_0_20px_rgba(217,70,239,0.15)] rounded-r-none border-r-4 border-r-fuchsia-400"
                        >
                            <div className="text-[8px] font-mono text-fuchsia-500/80 uppercase tracking-widest mb-1 text-right">Inference Node</div>
                            <div className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center justify-end gap-2 font-mono">
                                Predict.Engine
                                <Cpu className="h-3 w-3 text-fuchsia-400" />
                            </div>
                        </motion.div>

                        {/* Bottom Left Node */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute z-20 bottom-[80px] left-[30px] bg-slate-900/90 backdrop-blur-md border border-emerald-500/50 pr-6 p-3 shadow-[0_0_20px_rgba(16,185,129,0.15)] rounded-l-none border-l-4 border-l-emerald-400"
                        >
                            <div className="text-[8px] font-mono text-emerald-500/80 uppercase tracking-widest mb-1">Data Pipeline</div>
                            <div className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-2 font-mono">
                                <Database className="h-3 w-3 text-emerald-400" />
                                Vector.Store
                            </div>
                        </motion.div>

                        {/* Bottom Right Node */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute z-20 bottom-[100px] right-[40px] bg-slate-900/90 backdrop-blur-md border border-slate-600 p-2 shadow-lg"
                        >
                            <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-300 tracking-widest uppercase">
                                <Atom className="h-4 w-4 text-cyan-500/70" />
                                Async.Ops
                            </div>
                            {/* Processing bar */}
                            <div className="mt-2 w-full h-1 bg-slate-800 overflow-hidden relative">
                                <motion.div
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-y-0 left-0 w-1/2 bg-cyan-500/50"
                                />
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
                @keyframes scan {
                    0% { transform: translateY(-50px); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(200px); opacity: 0; }
                }
            `}</style>
        </section>
    )
}
