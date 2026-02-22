'use client'
import { FileTerminal, ChevronRight } from 'lucide-react'

export default function About() {
    return (
        <section id="about" className="mt-20 space-y-6 relative">
            <div className="absolute top-0 left-[-20px] w-[2px] h-full bg-cyan-900/30">
                <div className="w-[2px] h-20 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-[scan_4s_ease-in-out_infinite]" />
            </div>

            <div className="flex items-center gap-3">
                <FileTerminal className="h-5 w-5 text-cyan-400" />
                <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-100 font-mono">
                    DOSSIER // ABOUT ONESMITE
                </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start border-t border-cyan-900/50 pt-6">

                <div className="relative p-6 border border-slate-800 bg-slate-950/50 backdrop-blur-sm">
                    {/* Corner brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-cyan-500/50" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50" />

                    <p className="text-sm leading-relaxed text-slate-300 font-mono">
                        <span className="text-cyan-400 mr-2">&gt;</span>OneSmite operates as a parent research organization focused on
                        <span className="font-bold text-white bg-slate-800 px-1 mx-1">
                            designing deep-tech and AI systems for the future
                        </span>.
                        While our first commercial deployment is scalable educational SaaS (Onesmite Educa), our core mandate is far broader, rapidly advancing into applied artificial intelligence, massive automation, and specialized long-horizon physical tech.
                        <br /><br />
                        <span className="text-cyan-400 mr-2">&gt;</span>The collective follows a strict
                        <span className="font-bold text-fuchsia-300 mx-1 border-b border-fuchsia-900">product-first R&D protocol</span>
                        where every research vector is validated through live deployments, revenue-driven shielding, and high-fidelity feedback loops from active nodes.
                        <br /><br />
                        <span className="text-cyan-400 mr-2">&gt;</span>All native platforms are engineered with absolute focus on zero-trust reliability, long-term maintainability, and national-scale fault tolerance. We build the architecture today that will run tomorrow's infrastructure.
                    </p>
                </div>

                <div className="rounded-none border border-cyan-900/40 bg-slate-950/80 p-5 text-xs text-slate-300 shadow-[inset_0_0_20px_rgba(8,145,178,0.05)]">
                    <div className="mb-4 flex items-center justify-between border-b border-cyan-900/50 pb-2">
                        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-500 font-mono">
                            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                            SYS.DIRECTIVES
                        </div>
                        <div className="text-[9px] text-slate-500 font-mono">CLASSIFIED</div>
                    </div>

                    <ul className="space-y-3 font-mono text-[11px] text-slate-400">
                        <li className="flex items-start gap-2 group">
                            <ChevronRight className="h-3 w-3 text-cyan-600 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                            <span>Build validated products before expanding operational domains.</span>
                        </li>
                        <li className="flex items-start gap-2 group">
                            <ChevronRight className="h-3 w-3 text-cyan-600 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                            <span>Engineer for infinite scale, zero-trust robustness, and full auditability.</span>
                        </li>
                        <li className="flex items-start gap-2 group">
                            <ChevronRight className="h-3 w-3 text-cyan-600 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                            <span>Maintain responsible, human-centric automation fail-safes.</span>
                        </li>
                        <li className="flex items-start gap-2 group">
                            <ChevronRight className="h-3 w-3 text-cyan-600 mt-0.5 group-hover:text-cyan-400 transition-colors" />
                            <span>Fund long-term deep-tech vectors through sustainable product shielding.</span>
                        </li>
                        <li className="flex items-start gap-2 group">
                            <ChevronRight className="h-3 w-3 text-emerald-600 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                            <span className="text-emerald-500/80">Develop India-origin systems with global performance dominance.</span>
                        </li>
                    </ul>

                    <div className="mt-5 border-t border-cyan-900/30 pt-3 flex justify-between items-center text-[9px] font-mono tracking-[0.22em]">
                        <span className="text-slate-500 hidden sm:inline">Product-Focused • Research-Driven</span>
                        <span className="text-cyan-500/50">ENGINEERING_EXCELLENCE</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
