import { motion } from 'framer-motion'
import { Star, Award, Sparkles, MapPin, Heart } from 'lucide-react'

const trustBadges = [
  { icon: Star, label: '5.0 ★ Google Reviews' },
  { icon: Award, label: '11 Years Experience' },
  { icon: Heart, label: 'Bridal Specialist' },
  { icon: MapPin, label: 'Studio + Mobile' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-ivory" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Decorative orbs */}
      <motion.div
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(247,231,206,0.8) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(248,232,224,0.8) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-[20%] w-px h-40 bg-gradient-to-b from-transparent via-warm-gold/10 to-transparent" />
      <div className="absolute bottom-0 right-[30%] w-px h-32 bg-gradient-to-t from-transparent via-warm-gold/10 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-20 lg:pt-36 lg:pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content - 7 cols */}
          <div className="lg:col-span-7">
            {/* Rating pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-glass border border-warm-gold/15 mb-8"
            >
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-espresso/70 tracking-wide">5.0 from 22 Google Reviews</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-display-xl font-display font-bold text-espresso text-balance"
            >
              Luxury Makeup & Hair{' '}
              <span className="relative">
                <span className="text-gradient-gold">Styling</span>
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-gold rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                />
              </span>{' '}
              for Brides & Special Occasions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-7 text-lg sm:text-xl text-espresso/55 max-w-2xl leading-relaxed font-light"
            >
              European makeup artist and hairstylist with 11 years of experience,
              based in Liverpool NSW and serving brides and clients across Sydney.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#booking"
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Book an Appointment
              </motion.a>
              <motion.a
                href="#services"
                className="btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Services
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-12 flex flex-wrap gap-3"
            >
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-warm-gold/10"
                >
                  <badge.icon size={13} className="text-warm-gold" />
                  <span className="text-[11px] font-semibold text-espresso/60 tracking-wide">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right side - editorial collage - 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block lg:col-span-5 relative"
          >
            <div className="relative w-full h-[580px]">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-champagne/60 blur-[60px]" />

              {/* Main image card */}
              <motion.div
                className="absolute top-4 right-4 w-[280px] h-[380px] rounded-4xl overflow-hidden border-2 border-white/80 shadow-luxury-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-rose-beige/60 via-champagne-light/40 to-blush/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/25 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-5 right-5">
                  <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-4 border border-white/60">
                    <p className="font-display text-lg font-semibold text-espresso">Bridal Glam</p>
                    <p className="text-xs text-espresso/50 mt-1 font-sans">Flawless, photo-ready finish</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary card */}
              <motion.div
                className="absolute top-28 left-0 w-[200px] h-[260px] rounded-3xl overflow-hidden border-2 border-white/70 shadow-luxury"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-champagne/70 via-ivory-warm/50 to-blush-light/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/15 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/70 backdrop-blur rounded-xl p-3">
                    <p className="font-display text-sm font-semibold text-espresso">Hollywood Waves</p>
                    <p className="text-[10px] text-espresso/50 mt-0.5">Glamorous styling</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating rating badge */}
              <motion.div
                className="absolute bottom-16 right-12 glass-card-elevated px-5 py-3 shadow-luxury"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Star size={16} className="text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-espresso">5.0 Rating</p>
                    <p className="text-[10px] text-espresso/40 font-medium">22+ Happy Clients</p>
                  </div>
                </div>
              </motion.div>

              {/* Small sparkle accent */}
              <motion.div
                className="absolute top-8 left-16"
                animate={{ opacity: [0.3, 0.8, 0.3], rotate: [0, 90, 180] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles size={18} className="text-warm-gold/40" />
              </motion.div>

              {/* Gold border accent */}
              <div className="absolute -bottom-2 right-28 w-20 h-20 rounded-full border-2 border-warm-gold/15" />
              <div className="absolute top-16 right-0 w-12 h-12 rounded-full border border-warm-gold/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  )
}
