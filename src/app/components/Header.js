'use client'
import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const nav = ['About', 'Verticals', 'Vision', 'Roadmap', 'Contact']

export default function Header({navitem, scrollToSection,}) {
    const [open, setOpen] = useState(false)
    const NAV_ITEMS = [
        { id: 'about', label: 'About' },
        { id: 'verticals', label: 'Verticals' },
        { id: 'rd', label: 'R&D Focus' },
        { id: 'vision', label: 'Vision 2035' },
        { id: 'contact', label: 'Connect' },
    ]

    const [mobileOpen, setMobileOpen] = useState(false)

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (!el) return
        const y = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top: y, behavior: 'smooth' })
        setMobileOpen(false)
    }

    return (
        <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                {/* Logo */}
                <div
                    className="flex cursor-pointer items-center gap-2"
                    onClick={() => scrollToSection('top')}
                >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/40">
                        <span className="text-xs font-semibold tracking-[0.18em]">
                            OS
                        </span>
                    </div>
                    <div className="leading-tight">
                        <div className="text-sm font-semibold tracking-[0.22em] text-slate-200">
                            ONESMITE
                        </div>
                        <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                            Research & Futures Lab
                        </div>
                    </div>
                </div>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200 md:flex">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="relative inline-flex items-center gap-1 text-xs tracking-wide text-slate-300 transition hover:text-slate-50"
                        >
                            <span>{item.label}</span>
                            <span className="h-1 w-1 rounded-full bg-slate-500/70" />
                        </button>
                    ))}
                    <a
                        href="https://edu.onesmite.com"
                        className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/20"
                    >
                        Enter Edu Platform
                        <ArrowRight className="h-3 w-3" />
                    </a>
                </nav>

                {/* Mobile button */}
                <button
                    className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-slate-200 md:hidden"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-label="Toggle navigation"
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile nav panel */}
            {mobileOpen && (
                <div className="border-t border-white/5 bg-slate-950/95 px-4 pb-4 pt-2 md:hidden">
                    <nav className="flex flex-col gap-2 text-sm">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="w-full rounded-lg px-3 py-2 text-left text-slate-200 hover:bg-white/5"
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href="https://edu.onesmite.com"
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold tracking-wide text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.35)]"
                        >
                            Enter Edu Platform
                            <ArrowRight className="h-3 w-3" />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
