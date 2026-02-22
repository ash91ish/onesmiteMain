import React from 'react'
import Verticals from '../components/Verticals'

export const metadata = {
    title: 'Verticals | Onesmite',
    description: 'Explore Onesmite active research verticals across EdTech, AI, and Robotics.',
}

export default function VerticalsPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Research Verticals</h1>
                <p className="mt-4 text-fuchsia-400 font-medium uppercase tracking-widest text-sm">Where we apply our systems</p>
            </div>

            <Verticals />
        </main>
    )
}
