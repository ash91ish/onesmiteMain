import Hero from './components/Hero'
import About from './components/About'
import IndiaVision from './components/IndiaVision'
import Features from './components/Features'
import Connect from './components/Connect'

export const metadata = {
  title: 'Onesmite — Building India\'s Next-Generation Tech Infrastructure',
  description:
    'Onesmite is a technology holding company building production-grade software infrastructure for India. Explore our first product, Onesmite Educa.',
  alternates: { canonical: 'https://onesmite.com' },
  openGraph: {
    title: 'Onesmite — Building India\'s Next-Generation Tech Infrastructure',
    description:
      'Onesmite is a technology holding company building production-grade software infrastructure for India.',
    url: 'https://onesmite.com',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="border-t border-border pt-24 pb-8">
          <About />
        </div>

        <div className="border-t border-border pt-24 pb-8">
          <IndiaVision />
        </div>

        <div className="border-t border-border pt-24 pb-8">
          <Features />
        </div>

        <div className="border-t border-border pt-24 pb-24">
          <Connect />
        </div>
      </div>
    </main>
  )
}
