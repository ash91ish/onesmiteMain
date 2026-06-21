'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Twitter, Linkedin, Github, Mail } from 'lucide-react'

const COMPANY_LINKS = [
  { href: '/about', label: 'About Onesmite' },
  { href: '/#vision', label: 'Our Vision' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

const PRODUCT_LINKS = [
  { href: 'https://edu.onesmite.com', label: 'Onesmite Educa', external: true },
]

const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
]

const SOCIAL_LINKS = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@onesmite.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#010810] pt-16 pb-8">
      {/* Top saffron soft glow line instead of hard border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

      {/* Soft top gradient */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/[0.02] to-transparent" />

      <div className="page-shell relative z-10">
        {/* Main footer grid */}
        <div className="mb-16 grid gap-12 md:gap-8 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
          {/* Brand column */}
          <div className="max-w-[320px]">
            <Link href="/" className="group mb-6 flex items-center gap-3 no-underline">
              <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-white/[0.04] transition-colors group-hover:bg-white/[0.08]">
                <Image src="/onesmite.webp" alt="Onesmite" fill className="object-cover" sizes="40px" />
              </span>
              <span className="font-heading text-xl font-extrabold tracking-tight text-primary">
                Onesmite
              </span>
            </Link>

            <p className="mb-6 text-[0.95rem] leading-[1.8] text-muted">
              A long-term technology company building indigenous software, intelligent systems,
              and digital infrastructure for the future.
            </p>

            {/* Built in India badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-1.5 font-mono text-[0.65rem] font-medium uppercase tracking-widest text-silver">
              <span className="text-[0.8rem]">🇮🇳</span>
              Built in India
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/[0.03] text-muted transition-all duration-300 hover:bg-brand/10 hover:text-brand"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company links */}
          <div>
            <div className="mb-6 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-silver">
              Company
            </div>
            <ul className="flex flex-col gap-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-muted no-underline transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product & Legal links */}
          <div>
            <div className="mb-6 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-silver">
              Products
            </div>
            <ul className="mb-10 flex flex-col gap-4">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1.5 text-[0.95rem] text-muted no-underline transition-colors hover:text-primary"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight size={14} className="opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mb-6 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-silver">
              Legal
            </div>
            <ul className="flex flex-col gap-4">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] text-muted no-underline transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <div className="mb-6 font-mono text-[0.7rem] font-bold uppercase tracking-widest text-silver">
              Get In Touch
            </div>
            <p className="mb-5 text-[0.95rem] leading-[1.8] text-muted">
              For partnerships, press inquiries, or to learn more about Onesmite's mission.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 text-[0.95rem] font-bold text-accent transition-opacity hover:opacity-80"
            >
              Contact Us
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Footer mission statement */}
        {/* <div className="mb-10 rounded-2xl bg-gradient-to-r from-white/[0.03] to-transparent p-6 text-center sm:p-8">
          <p className="font-heading text-[clamp(1rem,2vw,1.25rem)] font-bold italic tracking-tight text-silver">
            "Building technology for a future where India creates, owns, and leads."
          </p>
        </div> */}

        {/* Bottom bar */}
        <div className="relative flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
          <p className="font-mono text-[0.75rem] tracking-wider text-muted/60">
            © {new Date().getFullYear()} Onesmite Technology. All rights reserved.
          </p>
          <p className="font-mono text-[0.75rem] tracking-wider text-muted/60">
            Patna, Bihar, India
          </p>
        </div>
      </div>
    </footer>
  )
}
