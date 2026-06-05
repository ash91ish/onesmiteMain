import ProductsPageClient from './ProductsClient'

export const metadata = {
  title: 'Onesmite Educa — AI-Powered Competitive Exam Platform for Students & Teachers',
  description:
    "Onesmite Educa is India's AI-powered EdTech platform for SSC, BPSC, Banking, and Railways exam preparation. For students: practice tests, AI analytics, and live classrooms. For educators: build, host, and monetize tests with pay-as-you-go pricing.",
  alternates: { canonical: 'https://onesmite.com/products' },
  keywords: [
    'Onesmite Educa', 'competitive exam preparation India', 'SSC online test platform',
    'BPSC mock tests', 'banking exam preparation', 'railway exam practice', 'AI test generator',
    'online teaching platform India', 'educator monetization platform', 'pay as you go EdTech'
  ],
  openGraph: {
    title: 'Onesmite Educa — AI-Powered Competitive Exam Platform',
    description:
      "India's AI-powered EdTech platform for students preparing for SSC, BPSC, Banking & Railways. Educators: build, monetize and scale with zero upfront cost.",
    url: 'https://onesmite.com/products',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onesmite Educa — AI EdTech Platform for Competitive Exams',
    description: 'Practice tests, AI analytics, educator classrooms. Built for SSC, BPSC, Banking & Railways.',
  },
}

export default function ProductsPage() {
  return <ProductsPageClient />
}
