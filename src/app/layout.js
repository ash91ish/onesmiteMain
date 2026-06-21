import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ComingSoonToast from './components/ComingSoonToast'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const viewport = {
  themeColor: '#020d16',
}

export const metadata = {
  title: "Onesmite — Building the Digital Future",
  description:
    'Onesmite is a long-term technology company building sovereign software, intelligent systems, and digital infrastructure. Creating world-class technology designed for scale.',
  metadataBase: new URL('https://onesmite.com'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Onesmite' }],
  creator: 'Onesmite',
  publisher: 'Onesmite',
  keywords: ['enterprise technology', 'sovereign software', 'digital infrastructure', 'AI platforms', 'EdTech infrastructure', 'Onesmite'],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Onesmite — Building the Digital Future",
    description:
      'Creating sovereign technology, intelligent systems, and digital infrastructure for the next generation. World-class technology built for global scale.',
    url: 'https://onesmite.com',
    siteName: 'Onesmite',
    images: [
      {
        url: '/onesmite-og.webp',
        width: 1200,
        height: 630,
        alt: 'Onesmite — Building the Digital Future of India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Onesmite — Building the Digital Future",
    description: 'Creating sovereign technology, intelligent systems, and digital infrastructure for the next generation.',
    images: ['/onesmite-og.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen overflow-x-clip`}
      >
        <Header />
        {children}
        <Footer />
        <ComingSoonToast />
      </body>
    </html>
  )
}
