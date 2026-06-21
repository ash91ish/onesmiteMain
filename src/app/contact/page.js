import SectionWrapper from '../components/SectionWrapper'
import ContactForm from '../components/ContactForm'
import { Mail, MapPin, Send } from 'lucide-react'

export const metadata = {
  title: 'Contact - Onesmite',
  description:
    "Get in touch with Onesmite. We're open to support, onboarding, and general inquiries. Email: contact@onesmite.com",
  alternates: { canonical: 'https://onesmite.com/contact' },
  openGraph: {
    title: 'Contact Onesmite',
    description:
      "Get in touch with Onesmite. We're open to support, onboarding, and general inquiries.",
    url: 'https://onesmite.com/contact',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden selection:bg-brand selection:text-white">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-40 mix-blend-overlay" />
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(232,98,26,0.06),transparent_70%)] blur-[80px]" />
      <div className="pointer-events-none absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(2,62,105,0.1),transparent_60%)] blur-[100px]" />

      {/* HERO SECTION */}
      <section className="relative z-10 page-shell py-12 md:py-16">
        <SectionWrapper>
          <div className="eyebrow eyebrow-dark mb-6">Contact Us</div>
          <h1 className="max-w-[820px] font-heading text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.15] text-primary tracking-tight">
            Let's start a <span className="text-gradient-brand">conversation.</span>
          </h1>
          <p className="mt-6 max-w-[620px] text-[clamp(1rem,2vw,1.12rem)] leading-[1.8] text-muted">
            Whether you want to contribute to the Onesmite vision, explore strategic partnerships, or need support with our ecosystem, we'd love to hear from you.
          </p>
        </SectionWrapper>
      </section>

      {/* CONTENT GRID */}
      <section className="relative z-10 page-shell pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT COLUMN: Contact Cards */}
          <SectionWrapper>
            <div className="grid gap-5">
              <div className="card-dark group rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.02]">
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/5">
                    <Mail size={18} />
                  </div>
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">Email</div>
                  <a href="mailto:contact@onesmite.com" className="mt-2 block font-heading text-xl font-bold text-primary no-underline transition-colors hover:text-accent">
                    contact@onesmite.com
                  </a>
                </div>
              </div>

              <div className="card-dark group rounded-2xl p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.02]">
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent/5">
                    <MapPin size={18} />
                  </div>
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted">Location</div>
                  <div className="mt-2 font-heading text-xl font-bold text-primary">Patna, Bihar, India</div>
                </div>
              </div>

              <div className="card-dark rounded-2xl p-6 border-brand/20 bg-gradient-to-r from-brand/5 to-transparent">
                <div className="relative z-10 flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                    <Send size={12} />
                  </div>
                  <p className="text-[0.9rem] leading-[1.65] text-muted">
                    For product support, partnership opportunities, investor relations, or general inquiries, email us directly or use the message form.
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* RIGHT COLUMN: Contact Form */}
          <SectionWrapper delay={120}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 sm:p-10 md:p-12 backdrop-blur-xl">
              <div className="relative z-10 mb-8">
                <div className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-accent">
                  Send a message
                </div>
                <h2 className="mt-3 font-heading text-2xl font-extrabold text-primary">
                  How can we help?
                </h2>
              </div>
              <ContactForm />
            </div>
          </SectionWrapper>
        </div>
      </section>
    </main>
  )
}
