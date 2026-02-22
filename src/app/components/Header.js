'use client'
import { useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
    const pathname = usePathname()
    const NAV_ITEMS = [
        { href: '/', label: 'SYS.HOME' },
        { href: '/about', label: 'DOSSIER' },
        { href: '/research', label: 'CORE.TECH' },
        { href: '/verticals', label: 'NODES' },
        { href: '/contact', label: 'UPLINK' },
    ]

    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 p-4 pointer-events-none">
            {/* The actual navbar is a floating pill inside the header area */}
            <div className="mx-auto max-w-6xl pointer-events-auto">
                <div className="relative flex items-center justify-between border border-cyan-900/50 bg-[#020617]/80 backdrop-blur-md px-4 py-3 shadow-[0_0_30px_rgba(8,145,178,0.15)] overflow-hidden">

                    {/* Decorative cyber corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500" />

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative flex h-9 w-9 items-center justify-center bg-cyan-950/50 border border-cyan-800/50 group-hover:border-cyan-400/80 transition-colors overflow-hidden">
                            <Image src="/onesmite.webp" alt="Onesmite" width={36} height={36} className="object-cover w-full h-full" />
                            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-fuchsia-500 animate-pulse z-10" />
                        </div>
                        <div className="leading-tight">
                            <div className="text-[13px] font-bold tracking-[0.3em] text-slate-100 group-hover:text-white transition-colors">
                                ONESMITE™
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.4em] text-cyan-500/80 font-mono">
                                RESEARCH & INTELLIGENCE
                            </div>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-6 text-[11px] font-mono tracking-widest text-slate-400 md:flex">
                        {NAV_ITEMS.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`relative group px-2 py-1 transition-colors ${isActive ? 'text-cyan-300' : 'hover:text-cyan-100'}`}
                                >
                                    <span className="relative z-10 flex items-center gap-1">
                                        {isActive && <ChevronRight className="h-3 w-3 text-cyan-500" />}
                                        {item.label}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navIndicator"
                                            className="absolute inset-0 bg-cyan-950/40 border-b-2 border-cyan-400 z-0"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {/* Hover bracket effect */}
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 transition-all text-cyan-500/50">[</span>
                                    <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-500/50">]</span>
                                </Link>
                            )
                        })}

                        <div className="h-4 w-px bg-cyan-900/50 ml-2" />

                        <a
                            href="#"
                            className="group relative inline-flex items-center gap-2 overflow-hidden border border-cyan-500/30 bg-cyan-950/20 px-4 py-1.5 text-[10px] font-bold tracking-widest text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-900/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                        >
                            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]" />
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            EDU.SYS // OFFLINE
                        </a>
                    </nav>

                    {/* Mobile button */}
                    <button
                        className="inline-flex items-center justify-center p-2 text-cyan-500 md:hidden hover:bg-cyan-950/50 active:scale-95 transition border border-transparent hover:border-cyan-900/50"
                        onClick={() => setMobileOpen((prev) => !prev)}
                        aria-label="Toggle navigation"
                    >
                        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>

                {/* Mobile nav panel */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-2 border border-cyan-900/50 bg-[#020617]/95 backdrop-blur-xl p-4 md:hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] pointer-events-auto relative overflow-hidden"
                        >
                            {/* Scanning line effect */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-500/30 animate-[scan_2s_ease-in-out_infinite]" />

                            <nav className="flex flex-col gap-1 font-mono text-[11px] tracking-widest">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${isActive ? 'bg-cyan-950/50 text-cyan-300 border-l-2 border-cyan-400' : 'text-slate-400 hover:bg-white/5 hover:text-cyan-100'}`}
                                        >
                                            <span className="flex items-center gap-2">
                                                {isActive && <ChevronRight className="h-3 w-3" />}
                                                {item.label}
                                            </span>
                                            {isActive && <div className="text-[9px] text-cyan-500/50" >ACTIVE</div>}
                                        </Link>
                                    )
                                })}
                                <div className="mt-4 pt-4 border-t border-cyan-900/30">
                                    <a
                                        href="#"
                                        className="w-full inline-flex items-center justify-center gap-2 border border-cyan-500/30 bg-cyan-950/20 px-4 py-3 text-[10px] font-bold tracking-widest text-cyan-300"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        EDU.SYS_OFFLINE
                                    </a>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    100% { transform: translateX(100%); }
                }
                @keyframes scan {
                    0% { transform: translateY(0); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(1000%); opacity: 0; }
                }
            `}</style>
        </header>
    )
}
