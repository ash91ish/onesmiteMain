import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const viewport = {
  themeColor: '#0A0A0F',
}

export const metadata = {
  title: 'Onesmite — Building India\'s Next-Generation Tech Infrastructure',
  description:
    'Onesmite is a technology holding company building production-grade software infrastructure for India. Our first product, Onesmite Educa, serves the competitive exam ecosystem.',
  metadataBase: new URL('https://onesmite.com'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Onesmite' }],
  creator: 'Onesmite',
  publisher: 'Onesmite',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Onesmite — Building India\'s Next-Generation Tech Infrastructure',
    description:
      'Onesmite is a technology holding company building production-grade software infrastructure for India.',
    url: 'https://onesmite.com',
    siteName: 'Onesmite',
    images: [
      {
        url: '/onesmite-og.webp',
        width: 1200,
        height: 630,
        alt: 'Onesmite — Building India\'s Next-Generation Tech Infrastructure',
      },
    ],
    locale: 'en_IN',
    type: 'website',
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
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased min-h-screen overflow-x-clip bg-background text-primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
