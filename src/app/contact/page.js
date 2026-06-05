import SectionWrapper from '../components/SectionWrapper'
import ContactForm from '../components/ContactForm'
import { Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact — Onesmite',
  description:
    'Get in touch with Onesmite. We\'re open to conversations with educators, integration partners, and aligned investors. Email: contact@onesmite.com',
  alternates: { canonical: 'https://onesmite.com/contact' },
  openGraph: {
    title: 'Contact Onesmite',
    description:
      'Get in touch with Onesmite. We\'re open to conversations with educators, integration partners, and aligned investors.',
    url: 'https://onesmite.com/contact',
    siteName: 'Onesmite',
    images: [{ url: '/onesmite-og.webp', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <main>
      <div className="max-w-[1200px] mx-auto pt-20 pb-24 px-6">
        {/* Page heading */}
        <SectionWrapper>
          <div className="label-chip mb-5 inline-flex">
            Contact
          </div>
          <h1 className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-primary mb-4">
            Get in <span className="text-gradient-accent">Touch</span>
          </h1>
          <p className="text-base text-muted leading-[1.7] max-w-[520px] mb-16">
            We're open to conversations with educators, integration partners,
            and aligned investors.
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12 items-start">
          {/* Contact details */}
          <SectionWrapper>
            <div className="flex flex-col gap-6">
              <div>
                <div className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-5 opacity-70">
                  Contact Details
                </div>

                <div className="flex flex-col gap-4 p-6 border border-border bg-surface">
                  <a
                    href="mailto:contact@onesmite.com"
                    className="flex items-center gap-3.5 no-underline transition-colors duration-200 ease-out text-muted hover:text-primary"
                    aria-label="Email contact@onesmite.com"
                  >
                    <div className="flex items-center justify-center w-9 h-9 border border-border shrink-0">
                      <Mail size={15} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.6875rem] text-muted tracking-[0.06em] uppercase mb-1 opacity-60">
                        Email
                      </div>
                      <span className="text-[0.9375rem] font-medium text-accent">
                        contact@onesmite.com
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5">
                    <div className="flex items-center justify-center w-9 h-9 border border-border shrink-0">
                      <MapPin size={15} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-mono text-[0.6875rem] text-muted tracking-[0.06em] uppercase mb-1 opacity-60">
                        Location
                      </div>
                      <span className="text-[0.9375rem] text-primary">
                        Patna, Bihar, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Form */}
          <SectionWrapper delay={120}>
            <div className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-5 opacity-70">
              Send a Message
            </div>
            <ContactForm />
          </SectionWrapper>
        </div>
      </div>
    </main>
  )
}
