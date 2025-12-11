import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-white/10 bg-slate-950/90 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-[11px] text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.25em] uppercase">
              ONESMITE
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-600" />
            <span>Research & Futures Lab</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Onesmite. All rights reserved.</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:inline" />
            <span className="text-slate-500">
              Built in India • Designed for the world.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
