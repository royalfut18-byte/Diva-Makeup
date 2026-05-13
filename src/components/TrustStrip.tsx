import { motion } from 'framer-motion'
import { Star, Clock, Heart, Home, MapPin } from 'lucide-react'

const items = [
  { icon: Star, label: '5.0 Google Rating', sub: '22 Reviews' },
  { icon: Clock, label: '11 Years Experience', sub: 'Since 2015' },
  { icon: Heart, label: 'Bridal · Formal · Occasions', sub: 'Full service' },
  { icon: Home, label: 'Studio + Mobile', sub: 'We come to you' },
  { icon: MapPin, label: 'Sydney Service Areas', sub: 'Liverpool & beyond' },
]

export default function TrustStrip() {
  return (
    <section className="relative py-8 bg-gradient-to-r from-champagne/50 via-white to-champagne/50 border-y border-warm-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center flex-shrink-0">
                <item.icon size={18} className="text-warm-gold" />
              </div>
              <div>
                <p className="text-sm font-semibold text-espresso">{item.label}</p>
                <p className="text-xs text-espresso/50">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
