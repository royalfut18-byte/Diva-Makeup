import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GoldParticle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: 'radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(184,134,11,0.4) 60%, transparent 100%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0.6, 0],
        scale: [0, 1.8, 1.2, 0],
        y: [0, -30, -60, -90],
        x: [0, (Math.random() - 0.5) * 40],
      }}
      transition={{ delay, duration: 2.5, ease: 'easeOut' }}
    />
  )
}

function FloatingRing({ delay, x, y }: { delay: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute rounded-full border border-warm-gold/20"
      style={{ left: `${x}%`, top: `${y}%`, width: 60, height: 60 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0.5, 2, 3],
      }}
      transition={{ delay, duration: 3, ease: 'easeOut' }}
    />
  )
}

export default function IntroReveal({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true)
  const [phase, setPhase] = useState(0)

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = useCallback(() => {
    sessionStorage.setItem('diva_intro_played', '1')
    setShow(false)
    setTimeout(onComplete, 800)
  }, [onComplete])

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem('diva_intro_played')
    if (hasPlayed) {
      setShow(false)
      onComplete()
      return
    }

    if (prefersReducedMotion) {
      const timer = setTimeout(finish, 600)
      return () => clearTimeout(timer)
    }

    const p1 = setTimeout(() => setPhase(1), 400)
    const p2 = setTimeout(() => setPhase(2), 1200)
    const p3 = setTimeout(() => setPhase(3), 2200)
    const end = setTimeout(finish, 4000)
    return () => { clearTimeout(p1); clearTimeout(p2); clearTimeout(p3); clearTimeout(end) }
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

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: 20 + Math.random() * 60,
    y: 30 + Math.random() * 40,
    delay: 1.0 + Math.random() * 1.8,
    size: 2 + Math.random() * 4,
  }))

  const rings = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: 35 + Math.random() * 30,
    y: 35 + Math.random() * 30,
    delay: 1.5 + i * 0.3,
  }))

  const titleChars = 'Diva Makeup'.split('')
  const subtitleWords = 'European Makeup Artist & Hairstylist'.split(' ')

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
          {/* Deep layered background */}
          <div className="absolute inset-0 bg-ivory" />

          {/* Animated radial gradients */}
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(247,231,206,0.9) 0%, rgba(253,251,247,0.4) 50%, transparent 100%)' }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1.05], opacity: [0, 1, 0.7] }}
            transition={{ duration: 3, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(248,232,224,0.6) 0%, transparent 40%)' }}
            animate={{ scale: [1, 1.3, 1.1], opacity: [0, 0.8, 0.5] }}
            transition={{ duration: 4, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(247,231,206,0.4) 0%, transparent 40%)' }}
            animate={{ scale: [1.2, 1, 1.15] }}
            transition={{ duration: 5, ease: 'easeInOut', delay: 0.5 }}
          />

          {/* Sweeping shimmer */}
          <motion.div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ background: 'linear-gradient(105deg, transparent 35%, rgba(212,175,55,0.08) 42%, rgba(212,175,55,0.15) 50%, rgba(212,175,55,0.08) 58%, transparent 65%)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ delay: 0.6, duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full"
              style={{ background: 'linear-gradient(75deg, transparent 35%, rgba(184,134,11,0.05) 45%, rgba(212,175,55,0.1) 50%, rgba(184,134,11,0.05) 55%, transparent 65%)' }}
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ delay: 2.2, duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Floating rings */}
          {rings.map((r) => (
            <FloatingRing key={r.id} delay={r.delay} x={r.x} y={r.y} />
          ))}

          {/* Gold particles */}
          {particles.map((p) => (
            <GoldParticle key={p.id} delay={p.delay} x={p.x} y={p.y} size={p.size} />
          ))}

          {/* Content */}
          <div className="relative text-center z-10 px-6">
            {/* Top decorative line with glow */}
            <motion.div
              className="mx-auto w-20 h-px mb-10 relative"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
              <div className="absolute inset-0 blur-sm" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
            </motion.div>

            {/* Main title - character by character reveal */}
            <div className="overflow-hidden">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-espresso font-bold tracking-tight">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: 80, opacity: 0, rotateX: -90 }}
                    animate={phase >= 1 ? { y: 0, opacity: 1, rotateX: 0 } : {}}
                    transition={{
                      delay: i * 0.05,
                      duration: 0.7,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    {char === ' ' ? ' ' : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtitle - word by word */}
            <div className="mt-6 overflow-hidden">
              <p className="text-sm sm:text-base font-sans tracking-[0.2em] uppercase text-espresso/50">
                {subtitleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.5em]"
                    initial={{ y: 30, opacity: 0 }}
                    animate={phase >= 2 ? { y: 0, opacity: 1 } : {}}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.6,
                      ease: 'easeOut',
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* Bottom gold line with expanding glow */}
            <motion.div
              className="mx-auto mt-10 relative"
              initial={{ width: 0, opacity: 0 }}
              animate={phase >= 2 ? { width: 120, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="h-0.5 rounded-full w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, #B8860B, #D4AF37, transparent)' }} />
              <motion.div
                className="absolute inset-0 h-0.5 rounded-full blur-md"
                style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Sparkle dots with pulse */}
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={phase >= 3 ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #B8860B)' }}
                  animate={phase >= 3 ? {
                    opacity: [0.2, 1, 0.2],
                    scale: [0.6, 1.4, 0.6],
                    boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 8px rgba(212,175,55,0.6)', '0 0 0px rgba(212,175,55,0)'],
                  } : {}}
                  transition={{ delay: i * 0.12, duration: 1.5, repeat: Infinity }}
                />
              ))}
            </motion.div>
          </div>

          {/* Exit: elegant curtain split */}
          <motion.div
            className="absolute inset-0 bg-ivory origin-top"
            initial={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Skip button */}
          <motion.button
            onClick={finish}
            className="absolute bottom-10 right-10 text-xs font-sans tracking-widest uppercase text-espresso/25 hover:text-espresso/60 transition-colors duration-300 backdrop-blur-sm bg-white/20 px-4 py-2 rounded-full border border-warm-gold/10"
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
