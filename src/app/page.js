'use client'
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Verticals from './components/Verticals'
import Features from './components/Features'
import IndiaVision from './components/IndiaVision'
import Connect from './components/Connect'

export default function OneSmiteLanding() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <Hero />

      {/* High-level overview on Home Page linking to details */}
      <div className="mt-10 border-t border-white/10 pt-20">
        <About />
      </div>

      <div className="mt-10 border-t border-white/10 pt-20">
        <Verticals />
      </div>

      <div className="mt-10 border-t border-white/10 pt-20">
        <Features />
      </div>

      <div className="mt-10 border-t border-white/10 pt-20">
        <IndiaVision />
      </div>

      <div className="mt-10 border-t border-white/10 pt-20">
        <Connect />
      </div>
    </main>
  )
}
