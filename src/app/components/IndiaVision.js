'use client'
import { motion } from 'framer-motion'
import { Target, Flag, Globe } from 'lucide-react'

export default function IndiaVision() {
  return (
    <section className="py-24 relative overflow-hidden text-slate-300 font-mono">
      {/* Background matrix grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">

        {/* India Mission Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 border border-emerald-900/50 bg-emerald-950/30 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-emerald-400 mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-none animate-pulse" />
            STRATEGIC_OBJECTIVE // IND
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl text-glow-sm">
            Self-Independent Technology Ecosystem
          </h2>

          <div className="border border-slate-800 bg-slate-950/80 p-6 md:p-8 relative">
            {/* Cyber corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-500" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-500" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-500" />

            <p className="max-w-4xl text-sm leading-relaxed text-slate-300">
              OneSmite is engineered with clear national intent: to deploy self-sustaining Indian technology systems that remove dependencies on foreign platforms for core AI infrastructure, advanced large-scale automation, and critical vertical applications like education. <span className="text-cyan-300">Revenue generated within this ecosystem is forcefully reinvested into Indian deep-tech R&D, talent scaling, and sovereign digital infrastructure.</span>
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 text-xs uppercase tracking-widest font-bold">
              <div className="flex flex-col gap-2 border-l border-emerald-500/50 pl-4 py-2 bg-emerald-950/10">
                <Flag className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-100">Origin: India</span>
              </div>
              <div className="flex flex-col gap-2 border-l border-fuchsia-500/50 pl-4 py-2 bg-fuchsia-950/10">
                <Target className="h-4 w-4 text-fuchsia-400" />
                <span className="text-fuchsia-100">Focus: Local Talent Matrix</span>
              </div>
              <div className="flex flex-col gap-2 border-l border-cyan-500/50 pl-4 py-2 bg-cyan-950/10">
                <Globe className="h-4 w-4 text-cyan-400" />
                <span className="text-cyan-100">Target: Global Export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Timeline */}
        <section id="vision" className="mb-24">
          <div className="flex items-center gap-4 mb-10 border-b border-cyan-900/50 pb-4">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
              PROJECT_VISION_2035
            </h2>
            <div className="flex-1 h-px bg-cyan-900/30" />
            <div className="text-[9px] uppercase tracking-widest text-slate-500">
              STAGED DEPLOYMENT PATH
            </div>
          </div>

          <div className="relative border-l-2 border-slate-800 pl-8 ml-2">

            {/* animated line tracer */}
            <motion.div
              className="absolute left-[-2px] top-0 w-0.5 bg-gradient-to-b from-cyan-400 to-fuchsia-500 h-1/3"
              animate={{ top: ['0%', '65%', '0%'] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="relative">
                <div className="absolute -left-[39px] top-1 h-3 w-3 rounded-none bg-cyan-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-300 bg-cyan-950/40 px-2 py-1 border border-cyan-900/50">
                    PHASE 1 // 2024–2026
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    EduTech Dominance Protocol
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 max-w-2xl border-l-2 border-slate-800 pl-4">
                    Deploy, refine, and monopolize the education SaaS sector with aggressive unit economics, seamless teacher monetisation, and cryptographically auditable performance metrics.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="relative">
                <div className="absolute -left-[39px] top-1 h-3 w-3 rounded-none bg-fuchsia-950 border-2 border-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.5)]" />
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-fuchsia-300 bg-fuchsia-950/40 px-2 py-1 border border-fuchsia-900/50">
                    PHASE 2 // 2026–2030
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    Applied AI Integration Matrix
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 max-w-2xl border-l-2 border-slate-800 pl-4">
                    Inject real-world neural architectures into live Onesmite platforms — recommendation engines, autonomous copilots, decision-automation layers, and predictive behavior analytics.
                  </p>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="relative">
                <div className="absolute -left-[39px] top-1 h-3 w-3 rounded-none bg-indigo-950 border-2 border-indigo-400 shadow-[0_0_15px_rgba(129,140,248,0.5)]" />
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-300 bg-indigo-950/40 px-2 py-1 border border-indigo-900/50">
                    PHASE 3 // 2030–2035
                  </div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    Physical Systems: Robotics & Propulsion
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 max-w-2xl border-l-2 border-slate-800 pl-4">
                    Software stack achieves total financial autonomy. Onesmite initiates physical tier: adaptive humanoid frameworks, heavy automation hardware, and next-generation propulsion research operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Sector Expansion */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-cyan-400">
              EXPANSION_VECTORS
            </h2>
            <div className="w-4 h-4 border-t-2 border-r-2 border-cyan-500/50" />
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { id: "SEC-A1", title: 'Corporate Automation', desc: 'ERP interfaces, CRM systems, workforce analytics.' },
              { id: "SEC-B2", title: 'Health Matrix', desc: 'Diagnostic AI models, hospital operational automation.' },
              { id: "SEC-C3", title: 'GovTech Infrastructure', desc: 'Civic automation, digital governance nodes, public safety nets.' },
              { id: "SEC-D4", title: 'Deep Space Ops', desc: 'Long-term autonomous orbital and terrestrial propulsion.' },
            ].map((sector) => (
              <div key={sector.id} className="group relative border border-slate-800 bg-slate-950 p-5 hover:bg-slate-900 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 p-2 text-[9px] text-slate-600 font-bold group-hover:text-cyan-500/50 transition-colors">
                  {sector.id}
                </div>
                <div className="text-sm font-bold text-slate-200 mb-2 group-hover:text-cyan-300 transition-colors uppercase tracking-wider">
                  {sector.title}
                </div>
                <div className="text-[11px] text-slate-500 leading-relaxed font-sans">
                  {sector.desc}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            ))}
          </div>

          {/* Added National Strategy Note */}
          <div className="mt-8 relative border-l-4 border-amber-500 bg-amber-950/10 p-4 text-[11px] ">
            <span className="font-bold text-amber-500 uppercase tracking-widest mr-2">SYS.WARNING:</span>
            <span className="text-amber-200/70">
              National protocol dictates Onesmite initiates non-education sectors strictly post-stabilization of sovereign revenue, data independence, and core architecture supremacy.
            </span>
          </div>
        </section>

      </div>
    </section>
  )
}
