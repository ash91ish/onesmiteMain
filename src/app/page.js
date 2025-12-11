'use client'
import React, { useState } from 'react'
import Footer from './components/Footer'
import Connect from './components/Connect'
import Header from './components/Header'
import IndiaVision from './components/IndiaVision'
import Features from './components/Features'
import About from './components/About'
import Hero from './components/Hero'
import Verticals from './components/Verticals'

export default function OneSmiteLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0,#020617_45%,#000_100%)] opacity-90" />
      </div>

      {/* Header */}
      <Header />

      {/* Main content */}
      <main id="top" className="mx-auto max-w-6xl px-4 pt-10 pb-24 sm:px-6 lg:px-8">
        {/* Hero */}
        <Hero />

        {/* About */}
        <About />

        {/* Verticals */}
        <Verticals />

        {/* R&D & Core Technology Framework */}
        <Features />


        {/* Vision timeline */}
        <IndiaVision />


        {/* Connect / CTA */}
        <Connect></Connect>
      </main>

      <Footer></Footer>
    </div>
  )
}
