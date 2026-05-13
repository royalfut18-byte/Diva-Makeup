import { motion } from 'framer-motion'
import { Star, Clock, Heart, Home, MapPin } from 'lucide-react'

const items = [
  { icon: Star, value: '5.0', label: 'Google Rating' },
  { icon: Clock, value: '11+', label: 'Years Experience' },
  { icon: Heart, value: '100+', label: 'Happy Brides' },
  { icon: Home, value: 'Studio', label: '+ Mobile Service' },
  { icon: MapPin, value: 'Sydney', label: 'Wide Coverage' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function TrustStrip() {
  return (
    <section className="relative py-12 sm:py-16 bg-white/50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4"
        >
          {items.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-champagne/50 border border-warm-gold/10 mb-3 group-hover:border-warm-gold/30 group-hover:shadow-gold group-hover:scale-110 transition-all duration-500">
                <stat.icon size={20} className="text-warm-gold" />
              </div>
              <p className="text-2xl font-display font-bold text-espresso">{stat.value}</p>
              <p className="text-xs font-medium text-espresso/40 tracking-wide mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
