import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  themeColor: "#020617", // slate-950 to match your background
};

export const metadata = {
  title: "Onesmite | Research-Driven Deep-Tech Technologies",
  description:
    "Onesmite operates as a parent research organization designing deep-tech and AI systems for the future. From educational SaaS to applied artificial intelligence, massive automation, and long-horizon physical tech.",
  keywords: [
    "Onesmite",
    "Onesmite Educa",
    "Deep-tech research organization",
    "AI systems design",
    "Educational SaaS",
    "Applied artificial intelligence",
    "Massive automation",
    "Long-horizon physical tech",
    "Zero-trust reliability",
    "National-scale fault tolerance",
    "India-origin tech",
    "Scalable future infrastructure",
  ],
  authors: [{ name: "Onesmite Labs" }],
  creator: "Onesmite",
  publisher: "Onesmite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://onesmite.com"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "your-google-site-verification-id", // Add your verification ID here
  },
  openGraph: {
    title: "Onesmite | Future Tech & Applied Intelligence",
    description:
      "A frontier deep-tech research company building production-ready future tech with absolute focus on zero-trust reliability and national-scale fault tolerance.",
    url: "https://onesmite.com",
    siteName: "Onesmite",
    images: [
      {
        url: "/onesmite-og.webp", // Ensure this high-quality 1200x630 image exists!
        width: 1200,
        height: 630,
        alt: "Onesmite Labs Structure",
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title: "Onesmite | Engineeering Excellence",
    description:
      "We build the architecture today that will run tomorrow's infrastructure. Research-driven, product-focused deep-tech design.",
    images: [
      {
        url: "/onesmite-og.webp",
        width: 1200,
        height: 630,
        alt: "Onesmite Systems",
      },
    ],
    creator: "@onesmite",
    site: "@onesmite",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-cyan-500/30 selection:text-cyan-100 min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden w-full`}
      >
        {/* Global Background effects */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-[500px] w-full rounded-full bg-fuchsia-600/20 blur-[120px]" />
          <div className="absolute -left-40 top-40 h-[500px] w-full rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0,#020617_45%,#000_100%)] opacity-90" />
        </div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
