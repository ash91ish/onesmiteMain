import React from 'react'
import { Terminal } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-cyan-900/50 bg-[#000000] py-8 overflow-hidden">
      {/* Grid background for footer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-[10px] font-mono tracking-widest text-slate-500 sm:flex-row sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">
          <Terminal className="h-4 w-4 text-cyan-900" />
          <div className="flex flex-col gap-1">
            <span className="text-cyan-600 font-bold">
              SYS.ONESMITE // v_0.0.2
            </span>
            <span>RESEARCH_AND_FUTURES_LAB</span>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-2 text-center sm:text-right">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-none bg-emerald-500/50 animate-pulse border border-emerald-500" />
            <span className="text-slate-400 cursor-default hover:text-cyan-400 transition-colors">SECURE CONNECTION ESTABLISHED</span>
          </div>
          <div className="text-slate-600">
            [© {new Date().getFullYear()}] • BUILT_IN_INDIA • DESIGNED_FOR_LATENCY_ZERO
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
