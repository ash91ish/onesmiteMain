'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Activity, ShieldCheck, Globe, Wifi } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Hero() {
  const fullText = "Onesmite is a technology holding company building focused software infrastructure for India. Our first product, Onesmite Educa, helps students prepare for competitive exams and enables teachers to create, manage, and monetize assessments."
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText(() => {
        if (index < fullText.length) {
          index++
          return fullText.slice(0, index)
        }
        clearInterval(interval)
        setIsDone(true)
        return fullText
      })
    }, 25)
    return () => clearInterval(interval)
  }, [])

  const words = ["Next-Generation", "Secure & Scalable", "Cloud-Native", "High-Performance"]
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-8 pb-16"
      aria-label="Hero"
    >
      {/* CSS-only animated background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-4 lg:pt-16 pb-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-12 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="flex flex-col items-start">
            {/* Label */}
            <div className="label-chip mb-8 inline-flex">
              <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0 animate-pulse" />
              Technology Infrastructure · India
            </div>

            {/* Headline */}
            <h1 className="font-heading text-[26px] md:text-[38px] lg:text-[42px] xl:text-[56px] 2xl:text-[66px] font-extrabold leading-[1.2] tracking-[-0.03em] text-primary mb-7">
              Building India's{' '}
              <span className="inline-grid relative overflow-hidden h-[1.2em] align-top text-left">
                <span className="invisible opacity-0 col-start-1 row-start-1 pointer-events-none select-none whitespace-nowrap pb-1">
                  Secure & Scalable
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ y: '80%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-80%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-gradient-accent col-start-1 row-start-1 whitespace-nowrap pb-1"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>{' '}
              Tech Infrastructure.
            </h1>

            {/* Subheadline */}
            <p 
              className="text-[clamp(1rem,2vw,1.125rem)] text-muted leading-[1.7] max-w-[600px] mb-10 min-h-[160px] xs:min-h-[120px] sm:min-h-[100px] md:min-h-[80px]"
              aria-label="Onesmite is a technology holding company building focused software infrastructure for India. Our first product, Onesmite Educa, helps students prepare for competitive exams and enables teachers to create, manage, and monetize assessments."
            >
              {displayedText}
              {!isDone && (
                <span className="inline-block w-[2px] h-[1.1em] bg-accent ml-1 align-middle animate-pulse" />
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 items-center mb-16">
              <a
                href="https://edu.onesmite.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-lg"
              >
                Explore Onesmite Educa
                <ArrowUpRight size={16} />
              </a>
              <Link href="/about" className="btn-ghost rounded-lg">
                About Onesmite
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Meta Row */}
            <div className="flex flex-wrap gap-10 border-t border-border pt-8 w-full">
              {[
                { label: 'Headquarters', value: 'Patna, Bihar, India' },
                { label: 'Primary Market', value: 'India' },
                { label: 'Current Core', value: 'Onesmite Educa' },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="font-heading text-[0.9375rem] font-semibold text-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>


    </section>
  )
}
