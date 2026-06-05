'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, ChevronRight } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact',  label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Wait until client mount before rendering portal
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  const mobileMenuPortal = mounted ? createPortal(
    <>
      {/* Full-page backdrop — lives at body level, truly covers everything */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          top: '72px',
          zIndex: 90,
          backgroundColor: 'rgba(0,0,0,0.55)',
          backdropFilter: mobileOpen ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: mobileOpen ? 'blur(8px)' : 'none',
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? 'visible' : 'hidden',
          transition: 'opacity 300ms ease, backdrop-filter 300ms ease',
        }}
      />

      {/* Drawer — slides down from top */}
      <div
        aria-hidden={!mobileOpen}
        style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          zIndex: 95,
          overflow: 'hidden',
          maxHeight: mobileOpen ? '600px' : '0px',
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? 'visible' : 'hidden',
          transition: 'max-height 380ms cubic-bezier(0.16,1,0.3,1), opacity 250ms ease, visibility 0ms',
        }}
      >
        <div
          style={{
            background: 'rgba(10,10,18,0.98)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.6)',
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6 py-6 pb-8 flex flex-col gap-6">

            {/* Nav Links */}
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between px-4 py-3.5 rounded-xl text-[0.9375rem] font-medium no-underline transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/[0.08] border border-white/[0.08]'
                        : 'text-white/50 hover:text-white hover:bg-white/[0.04] border border-transparent'
                    }`}
                    style={{
                      transitionDelay: mobileOpen ? `${i * 40}ms` : '0ms',
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight
                      size={15}
                      className={`transition-all duration-200 ${
                        isActive ? 'text-accent opacity-100' : 'opacity-0 group-hover:opacity-40 -translate-x-1 group-hover:translate-x-0'
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Bottom Section */}
            <div className="flex flex-col gap-4">
              {/* Status Row */}
              <div className="flex items-center justify-between px-1">
                <div className="flex flex-col">
                  <span className="text-[0.6875rem] font-mono text-white/30 uppercase tracking-[0.1em]">Platform Status</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08]">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="font-mono text-[0.6875rem] font-semibold text-emerald-400 tracking-[0.06em]">OPERATIONAL</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://edu.onesmite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 bg-accent text-white text-[0.875rem] font-semibold no-underline rounded-xl border border-white/10 transition-all duration-200 active:scale-[0.98]"
                style={{ boxShadow: '0 0 20px rgba(92,107,255,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' }}
              >
                Open Onesmite Educa
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  ) : null

  return (
    <>
      <header
        className={`sticky top-0 z-[100] backdrop-blur-md transition-all duration-300 ease-out border-b ${
          scrolled
            ? 'border-white/[0.06] bg-[#0a0a0f]/80'
            : 'border-white/[0.02] bg-[#0a0a0f]/30'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 no-underline transition-opacity duration-200 hover:opacity-80"
            aria-label="Onesmite — Home"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-white/[0.03] shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <Image src="/onesmite.webp" alt="Onesmite Logo" fill className="object-cover" sizes="32px" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-[1.0625rem] font-bold text-primary tracking-[-0.01em] leading-[1.2]">
                Onesmite
              </span>
              <span className="font-mono text-[0.625rem] text-muted tracking-[0.05em] uppercase leading-none">
                Technology Holding co.
              </span>
            </div>
          </Link>

          {/* Desktop Pill Nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-1.5 py-1 shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.8125rem] font-medium px-3.5 py-1.5 no-underline rounded-full transition-all duration-200 border ${
                    isActive
                      ? 'text-primary bg-white/10 border-white/5'
                      : 'text-muted bg-transparent border-transparent hover-nav-item'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-2 font-mono text-[0.6875rem] text-emerald-500 bg-emerald-500/[0.06] px-2.5 py-1 rounded-full border border-emerald-500/10">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse" />
              SYS: ACTIVE
            </div>
            <a
              href="https://edu.onesmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold px-4 py-2 bg-accent text-white no-underline rounded-lg border border-white/10 shadow-[0_0_12px_rgba(92,107,255,0.2)] transition-all duration-200 hover:bg-[#4A59E8] hover:-translate-y-[1px] hover:shadow-[0_0_16px_rgba(92,107,255,0.35)]"
            >
              Onesmite Educa
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`md:hidden relative flex items-center justify-center w-9 h-9 cursor-pointer rounded-lg transition-all duration-200 border ${
              mobileOpen
                ? 'bg-white/[0.06] border-white/10 text-white'
                : 'bg-white/[0.02] border-border text-primary hover:bg-white/[0.04]'
            }`}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`absolute transition-all duration-200 ${mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
            >
              <X size={18} />
            </span>
            <span
              className={`absolute transition-all duration-200 ${mobileOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}
            >
              <Menu size={18} />
            </span>
          </button>
        </div>
      </header>

      {/* Portal: Backdrop + Drawer rendered at document.body */}
      {mobileMenuPortal}
    </>
  )
}
