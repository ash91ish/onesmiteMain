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

export const metadata = {
  title: "Onesmite — Research-Driven Deep-Tech Technologies",
  description:
    "Onesmite is a research-led deep-tech organisation building scalable systems across education technology, applied AI, automation, and long-horizon robotics research. Engineered in India for global performance.",
  keywords: [
    "Onesmite",
    "deep tech",
    "AI systems",
    "education technology",
    "R&D",
    "automation",
    "robotics",
    "SaaS infrastructure",
    "India tech",
  ],
  authors: [{ name: "Onesmite Research & Futures Lab" }],
  creator: "Onesmite",
  publisher: "Onesmite",
  metadataBase: new URL("https://onesmite.com"),
  openGraph: {
    title: "Onesmite — Research-Driven Deep-Tech Technologies",
    description:
      "Building production-ready systems across EduTech, AI, automation, and future robotics with a product-first engineering approach.",
    url: "https://onesmite.com",
    siteName: "Onesmite",
    images: [
      {
        url: "/onesmite-og.webp",
        width: 1200,
        height: 630,
        alt: "Onesmite Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onesmite — Research-Driven Deep-Tech Technologies",
    description:
      "Building production-ready systems across EduTech, AI, automation, and future robotics with a product-first engineering approach.",
    images: [
      {
        url: "/onesmite-og.webp",
        width: 1200,
        height: 630,
        alt: "Onesmite Logo",
      },
    ],
    creator: "@onesmite",
    site: "@onesmite",
    handle: "@onesmite",
  },
  // manifest: "/site.webmanifest",

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
