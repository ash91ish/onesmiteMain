import React from 'react'
import About from '../components/About'
import IndiaVision from '../components/IndiaVision'

export const metadata = {
    title: 'About | Onesmite',
    description: 'Learn about Onesmite, our operating principles, and our Vision 2035.',
}

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us & Vision</h1>
                <p className="mt-4 text-emerald-400 font-medium uppercase tracking-widest text-sm">Product-First Engineering</p>
            </div>

            <About />

            <div className="mt-24 border-t border-white/10 pt-20">
                <IndiaVision />
            </div>
        </main>
    )
}
