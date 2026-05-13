import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Particle({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-warm-gold"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [0, -20, -40],
      }}
      transition={{ delay, duration: 2, ease: 'easeOut' }}
    />
  )
}

export default function IntroReveal({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = useCallback(() => {
    sessionStorage.setItem('diva_intro_played', '1')
    setShow(false)
    setTimeout(onComplete, 600)
  }, [onComplete])

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('diva_intro_played')
    if (hasPlayed) {
      setShow(false)
      onComplete()
      return
    }

    const duration = prefersReducedMotion ? 600 : 3400
    const timer = setTimeout(finish, duration)
    return () => clearTimeout(timer)
  }, [finish, onComplete, prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-ivory"
          >
            <div className="text-center">
              <h1 className="font-display text-5xl text-espresso font-semibold">Diva Makeup</h1>
              <p className="mt-3 text-base text-espresso/60 font-sans tracking-widest uppercase text-sm">European Makeup Artist & Hairstylist</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: 30 + Math.random() * 40,
    y: 35 + Math.random() * 30,
    delay: 1.2 + Math.random() * 1.5,
  }))

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Rich layered background */}
          <div className="absolute inset-0 bg-ivory" />
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(247,231,206,0.8) 0%, rgba(253,251,247,0.4) 60%, transparent 100%)' }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 60% 60%, rgba(248,232,224,0.5) 0%, transparent 50%)' }}
            animate={{ scale: [1.1, 1, 1.1] }}
            transition={{ duration: 5, ease: 'easeInOut' }}
          />

          {/* Shimmer streak */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(184,134,11,0.06) 45%, rgba(212,175,55,0.1) 50%, rgba(184,134,11,0.06) 55%, transparent 60%)' }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ delay: 0.8, duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Gold particles */}
          {particles.map((p) => (
            <Particle key={p.id} delay={p.delay} x={p.x} y={p.y} />
          ))}

          {/* Content */}
          <div className="relative text-center z-10 px-6">
            {/* Top decorative line */}
            <motion.div
              className="mx-auto w-16 h-px mb-8"
              style={{ background: 'linear-gradient(90deg, transparent, #B8860B, transparent)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
            />

            {/* Main title */}
            <motion.h1
              className="font-display text-6xl sm:text-7xl lg:text-8xl text-espresso font-bold tracking-tight"
              initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Diva Makeup
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-5 text-sm sm:text-base font-sans tracking-[0.25em] uppercase text-espresso/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
            >
              European Makeup Artist & Hairstylist
            </motion.p>

            {/* Bottom gold line */}
            <motion.div
              className="mx-auto mt-8 w-24 h-0.5 rounded-full"
              style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #B8860B, #D4AF37, transparent)' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 1, ease: 'easeOut' }}
            />

            {/* Sparkle dots */}
            <motion.div
              className="flex justify-center gap-3 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1 h-1 rounded-full bg-warm-gold/60"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
                  transition={{ delay: 2 + i * 0.15, duration: 1.2, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </div>

          {/* Exit curtain wipe */}
          <motion.div
            className="absolute inset-0 bg-ivory origin-bottom"
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Skip button */}
          <motion.button
            onClick={finish}
            className="absolute bottom-10 right-10 text-xs font-sans tracking-widest uppercase text-espresso/30 hover:text-espresso/60 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Skip
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
