import React from 'react'
import Features from '../components/Features'

export const metadata = {
    title: 'Research & Tech | Onesmite',
    description: 'Explore Onesmite core technology framework, intelligent layers, and infrastructure.',
}

export default function ResearchPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Research & Core Technology</h1>
                <p className="mt-4 text-cyan-400 font-medium uppercase tracking-widest text-sm">Platform Architecture & Deep Tech</p>
            </div>

            <Features />
        </main>
    )
}
