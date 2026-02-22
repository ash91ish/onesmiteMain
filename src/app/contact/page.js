import React from 'react'
import Connect from '../components/Connect'

export const metadata = {
    title: 'Connect | Onesmite',
    description: 'Get in touch with Onesmite for enterprise access, research partnerships, and more.',
}

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 pt-24 pb-24 sm:px-6 lg:px-8">
            <div className="mb-8 text-center md:text-left">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Connect</h1>
                <p className="mt-4 text-cyan-200 font-medium uppercase tracking-widest text-sm">Open for beta applications & partnerships</p>
            </div>

            <Connect />
        </main>
    )
}
