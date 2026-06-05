import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: '404 — Page Not Found | Onesmite',
  description: 'The page you\'re looking for doesn\'t exist or has been moved.',
}

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto py-20 px-6 text-center">
        <div className="font-mono text-xs text-accent tracking-[0.15em] uppercase mb-6 opacity-80">
          404
        </div>

        <h1 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.03em] text-primary mb-4">
          Page Not Found
        </h1>

        <p className="text-[1.0625rem] text-muted leading-[1.65] max-w-[420px] mx-auto mb-10">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="btn-primary"
          aria-label="Go to Onesmite homepage"
        >
          <ArrowLeft size={16} />
          Go Home
        </Link>
      </div>
    </main>
  )
}
