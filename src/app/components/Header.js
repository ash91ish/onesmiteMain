'use client'

import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => setMobileOpen(false), [pathname])

  const mobileMenu = mounted
    ? createPortal(
        <div
          className={`fixed inset-x-0 top-[68px] z-[95] md:hidden transition-all duration-300 ${
            mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <button
            aria-label="Close navigation overlay"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 top-[68px] rounded-none"
            style={{ background: 'rgba(1, 8, 16, 0.75)', backdropFilter: 'blur(8px)' }}
          />
          <div
            className={`relative mx-4 mt-2 border p-3 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
              mobileOpen ? 'translate-y-0' : '-translate-y-3'
            }`}
            style={{
              background: 'rgba(2, 14, 26, 0.97)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
            }}
          >
            <nav aria-label="Mobile navigation" className="grid gap-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 no-underline transition-colors"
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: isActive ? '#f0f4f8' : '#8fa3b8',
                      background: isActive ? 'rgba(255,255,255,0.06)' : 'transparent',
                      borderRadius: '4px',
                    }}
                    onMouseEnter={e => !isActive && (e.currentTarget.style.color = '#f0f4f8')}
                    onMouseLeave={e => !isActive && (e.currentTarget.style.color = '#8fa3b8')}
                  >
                    {item.label}
                    <span style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '0.62rem', color: '#5a7490' }}>
                      0{i + 1}
                    </span>
                  </Link>
                )
              })}
            </nav>
            <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <a
                href="https://edu.onesmite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Explore Onesmite Educa
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <ScrollProgress />
      <header
        className="sticky top-0 z-[100] transition-all duration-500"
        style={{
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
          background: scrolled
            ? 'rgba(2, 13, 22, 0.92)'
            : 'rgba(2, 13, 22, 0.3)',
          backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'blur(8px)',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'blur(8px)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        <div className="page-shell flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Onesmite home">
            <span
              className="relative grid h-9 w-9 place-items-center overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}
            >
              <Image src="/onesmite.webp" alt="" fill className="object-cover" sizes="36px" priority />
            </span>
            <span className="flex flex-col">
              <span
                style={{
                  fontFamily: 'var(--font-syne)',
                  fontSize: '1.05rem',
                  fontWeight: 800,
                  color: '#f0f4f8',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Onesmite
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-jetbrains-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#5a7490',
                  marginTop: '3px',
                }}
              >
                Technology Company
              </span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-0 md:flex"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              padding: '4px',
              borderRadius: '6px',
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline transition-all duration-200"
                  style={{
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: isActive ? '#f0f4f8' : '#8fa3b8',
                    background: isActive ? 'rgba(255,255,255,0.09)' : 'transparent',
                    borderRadius: '4px',
                    letterSpacing: '0',
                  }}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <span
              className="inline-flex items-center gap-2"
              style={{
                border: '1px solid rgba(232, 98, 26, 0.25)',
                background: 'rgba(232, 98, 26, 0.08)',
                padding: '0.38rem 0.75rem',
                borderRadius: '4px',
                fontFamily: 'var(--font-jetbrains-mono)',
                fontSize: '0.63rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#f07c3a',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#E8621A',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              Building
            </span>
            <a
              href="https://edu.onesmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ minHeight: '38px', padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
            >
              Educa
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="grid h-10 w-10 place-items-center md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '6px',
              color: '#f0f4f8',
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  )
}
