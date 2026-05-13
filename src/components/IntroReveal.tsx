import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IntroReveal({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)
  const [skipped, setSkipped] = useState(false)

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('diva_intro_played')
    if (hasPlayed) {
      setShow(false)
      onComplete()
      return
    }

    const duration = prefersReducedMotion ? 800 : 3200
    const timer = setTimeout(() => {
      finish()
    }, duration)

    return () => clearTimeout(timer)
  }, [])

  function finish() {
    sessionStorage.setItem('diva_intro_played', '1')
    setShow(false)
    setTimeout(onComplete, 400)
  }

  function skip() {
    setSkipped(true)
    finish()
  }

  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-champagne via-blush to-ivory"
          >
            <div className="text-center">
              <h1 className="font-serif text-5xl sm:text-6xl text-espresso font-semibold">Diva Makeup</h1>
              <p className="mt-3 text-lg text-espresso/70 font-sans">European Makeup Artist & Hairstylist</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence>
      {show && !skipped && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-champagne via-blush/80 to-ivory" />

          {/* Animated shimmer overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          />

          {/* Gold line accent */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-warm-gold to-transparent"
            initial={{ scaleX: 0, opacity: 0, y: 30 }}
            animate={{ scaleX: 1, opacity: 1, y: 30 }}
            transition={{ delay: 0.8, duration: 1, ease: 'easeOut' }}
          />

          {/* Content */}
          <div className="relative text-center z-10">
            <motion.h1
              className="font-serif text-5xl sm:text-7xl lg:text-8xl text-espresso font-semibold"
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            >
              Diva Makeup
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-espresso/70 font-sans tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
            >
              European Makeup Artist & Hairstylist
            </motion.p>

            {/* Sparkle dots */}
            <motion.div
              className="flex justify-center gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-warm-gold"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.2, 0.8] }}
                  transition={{ delay: 1.5 + i * 0.2, duration: 1.5, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </div>

          {/* Curtain wipe - top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-ivory origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
          {/* Curtain wipe - bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-ivory origin-bottom"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* Skip button */}
          <motion.button
            onClick={skip}
            className="absolute bottom-8 right-8 text-sm text-espresso/50 hover:text-espresso/80 font-sans transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
