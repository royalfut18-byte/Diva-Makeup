import { motion } from 'framer-motion'
import { Star, Calendar, MapPin, Award } from 'lucide-react'

const trustChips = [
  { icon: Award, label: '11 Years Experience' },
  { icon: Star, label: 'Bridal Specialist' },
  { icon: Calendar, label: 'Mobile Bridal Service' },
  { icon: MapPin, label: 'Liverpool NSW' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ivory via-champagne/30 to-blush/40" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-beige/20 to-transparent" />

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full bg-warm-gold/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-blush/30 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-warm-gold/20 mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-espresso">5.0 Google Reviews</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="heading-xl text-espresso text-balance"
            >
              Luxury Makeup & Hair Styling for{' '}
              <span className="text-warm-gold">Brides, Formals</span> & Special Occasions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-lg text-espresso/70 max-w-xl leading-relaxed"
            >
              European makeup artist and hairstylist with 11 years of experience, based in Liverpool NSW
              and serving brides and clients across Sydney.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#booking" className="btn-primary">
                Book an Appointment
              </a>
              <a href="#services" className="btn-secondary">
                View Services
              </a>
            </motion.div>

            {/* Trust chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {trustChips.map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 border border-warm-gold/10"
                >
                  <chip.icon size={14} className="text-warm-gold" />
                  <span className="text-xs font-medium text-espresso/70">{chip.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - decorative cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px]">
              {/* Main card */}
              <motion.div
                className="absolute top-8 right-8 w-72 h-96 rounded-3xl bg-gradient-to-br from-rose-beige/60 to-champagne/80 shadow-2xl border border-white/50 overflow-hidden"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-2xl p-4">
                    <p className="font-serif text-lg text-espresso font-medium">Bridal Glam</p>
                    <p className="text-sm text-espresso/60 mt-1">Photo-ready finish</p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary card */}
              <motion.div
                className="absolute top-32 left-0 w-56 h-72 rounded-2xl bg-gradient-to-br from-champagne/70 to-blush/60 shadow-xl border border-white/50"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card rounded-xl p-3">
                    <p className="font-serif text-espresso font-medium">Hair Styling</p>
                    <p className="text-xs text-espresso/60 mt-0.5">Hollywood waves</p>
                  </div>
                </div>
              </motion.div>

              {/* Small accent card */}
              <motion.div
                className="absolute bottom-8 right-4 glass-card rounded-2xl p-4 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-warm-gold/20 flex items-center justify-center">
                    <Star size={14} className="text-warm-gold fill-warm-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-espresso">5.0 Rating</p>
                    <p className="text-xs text-espresso/50">22+ Reviews</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
