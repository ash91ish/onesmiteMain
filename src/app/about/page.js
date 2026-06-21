import AboutClient from './AboutClient'

export const metadata = {
  title: 'About - Onesmite',
  description: 'Learn about Onesmite, founder Ashish Kumar, and the long-term vision of building sustainable, sovereign technology infrastructure.',
  alternates: { canonical: 'https://onesmite.com/about' },
  openGraph: {
    title: 'About Onesmite - Founder, Story, and Values',
    description:
      'Onesmite is a technology holding company founded by Ashish Kumar in Patna, Bihar. Learn about our story and operating principles.',
    url: 'https://onesmite.com/about',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return <AboutClient />
}
