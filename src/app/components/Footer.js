import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact',  label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-wrap gap-8 justify-between items-start mb-10">
          {/* Brand */}
          <div className="max-w-[280px]">
            <div className="font-heading text-base font-bold text-primary mb-2 tracking-[-0.01em]">
              Onesmite
            </div>
            <p className="text-[0.8125rem] text-muted leading-[1.6]">
              Building India's Next-Generation Tech Infrastructure.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <div className="font-mono text-[0.6875rem] font-medium text-muted tracking-[0.08em] uppercase mb-3.5">
              Company
            </div>
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.875rem] text-muted no-underline transition-colors duration-200 ease-out hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <div>
            <div className="font-mono text-[0.6875rem] font-medium text-muted tracking-[0.08em] uppercase mb-3.5">
              Products
            </div>
            <a
              href="https://edu.onesmite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[0.875rem] text-muted no-underline transition-colors duration-200 ease-out hover:text-primary"
            >
              Onesmite Educa <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-wrap gap-4 justify-between items-center">
          <p className="font-mono text-xs text-muted tracking-[0.02em]">
            © {new Date().getFullYear()} Onesmite. Built in India.
          </p>
          <p className="font-mono text-xs text-muted opacity-60">
            Patna, Bihar, India
          </p>
        </div>
      </div>
    </footer>
  )
}
