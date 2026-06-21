'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock } from 'lucide-react'
import dynamic from 'next/dynamic'

const EducaWatchCanvas = dynamic(
  () => import('./three/EducaWatchCanvas'),
  { ssr: false, loading: () => null }
)

export default function ComingSoonToast() {
  const [isVisible, setIsVisible] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const [linkClicked, setLinkClicked] = useState('')

  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (href && (href.includes('edu.onesmite.com') || href.includes('teacher.onesmite.com'))) {
        e.preventDefault()
        setLinkClicked(href.includes('teacher') ? 'Educator Portal' : 'Student Platform')
        setIsVisible(false) 
        setTimeout(() => setIsVisible(true), 10)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (isVisible) {
      // Delay canvas rendering by 350ms to ensure the slide-in animation is silky smooth
      const renderTimer = setTimeout(() => setShowCanvas(true), 350)
      // Auto-hide after 6 seconds
      const hideTimer = setTimeout(() => setIsVisible(false), 6000)
      return () => {
        clearTimeout(renderTimer)
        clearTimeout(hideTimer)
      }
    } else {
      setShowCanvas(false)
    }
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
          transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          style={{ perspective: '1000px' }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[9999] flex justify-center sm:block pointer-events-none"
        >
          {/* Premium Card Container */}
          <div className="pointer-events-auto relative overflow-hidden rounded-2xl border border-white/10 bg-[#020a11]/95 shadow-[0_24px_50px_-12px_rgba(232,98,26,0.35)] backdrop-blur-2xl flex items-stretch w-full max-w-[400px] sm:w-[400px] p-2">
            
            {/* 3D Watch Container */}
            <div className="relative h-[96px] w-[96px] sm:h-[112px] sm:w-[112px] shrink-0 rounded-xl overflow-hidden bg-black/40 border border-white/[0.05] shadow-inner flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,98,26,0.15),transparent_70%)]" />
              
              {/* Fade in the canvas after the slide animation to prevent lag */}
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-in-out" 
                style={{ opacity: showCanvas ? 1 : 0, transform: 'scale(0.95)' }}
              >
                {showCanvas && <EducaWatchCanvas />}
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex-1 py-3 px-5 flex flex-col justify-center">
              <button 
                onClick={() => setIsVisible(false)}
                className="absolute right-3 top-3 text-white/30 transition-colors hover:text-white bg-white/5 rounded-full p-1"
                aria-label="Close"
              >
                <X size={14} />
              </button>

              <div className="flex items-center gap-2 mb-1.5">
                <Clock size={14} className="text-accent" />
                <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-accent">
                  In Development
                </span>
              </div>
              
              <h4 className="font-heading text-[1.1rem] font-extrabold text-white tracking-tight leading-tight">
                Time is ticking.
              </h4>
              <p className="mt-1.5 text-[0.85rem] leading-[1.5] text-muted pr-3">
                The <strong className="text-white font-semibold">{linkClicked}</strong> is in closed preview. Expanding shortly.
              </p>
            </div>
            
            {/* Top edge highlight */}
            <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
