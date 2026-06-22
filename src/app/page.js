import dynamic from 'next/dynamic'
import HeroSection from './components/HeroSection'

const VisionSection = dynamic(() => import('./components/VisionSection'))
const WhyOnesmiteSection = dynamic(() => import('./components/WhyOnesmiteSection'))
const FounderSection = dynamic(() => import('./components/FounderSection'))
const EcosystemSection = dynamic(() => import('./components/EcosystemSection'))
const EducaSection = dynamic(() => import('./components/EducaSection'))
const ImpactSection = dynamic(() => import('./components/ImpactSection'))
const TechnologyFutureSection = dynamic(() => import('./components/TechnologyFutureSection'))
const TimelineSection = dynamic(() => import('./components/TimelineSection'))
const FinalStatementSection = dynamic(() => import('./components/FinalStatementSection'))

export const metadata = {
  title: "Onesmite — Building the Digital Future of India",
  description:
    'Onesmite is a long-term technology company creating indigenous software, intelligent systems, and digital infrastructure for India. Building world-class technology designed, developed, and operated from India.',
  alternates: { canonical: 'https://onesmite.com' },
  openGraph: {
    title: "Onesmite — Building the Digital Future of India",
    description:
      'Creating indigenous technology, intelligent systems, and digital infrastructure for India\'s next generation.',
    url: 'https://onesmite.com',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  return (
    <main>
      {/* 1. Cinematic hero — dark navy + 3D Global network */}
      <HeroSection />

      {/* 2. Vision — light/cream storytelling section */}
      <VisionSection />

      {/* 3. Why Onesmite — dark navy, founder voice */}
      <WhyOnesmiteSection />

      {/* 4. Founder — light, mission-focused */}
      <FounderSection />

      {/* 5. Ecosystem — deep dark, interactive cards */}
      <EcosystemSection />

      {/* 6. Onesmite Educa — white-grey, product showcase */}
      <EducaSection />

      {/* 7. Impact — dark pitch, animated stats */}
      <ImpactSection />

      {/* 8. Technology Future — light, 7 domain cards */}
      <TechnologyFutureSection />

      {/* 9. Timeline — near-black, 5-stage interactive */}
      <TimelineSection />

      {/* 10. Final Statement — cinematic dark, full-screen CTA */}
      <FinalStatementSection />
    </main>
  )
}
