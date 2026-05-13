import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Crown, Wind, Eye, Wand2, Pen, type LucideIcon } from 'lucide-react'
import { services } from '../data/services'

const iconMap: Record<string, LucideIcon> = {
  Heart, Sparkles, Star, Crown, Wind, Eye, Wand2, Pen,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-ivory to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-warm-gold font-medium text-sm uppercase tracking-widest mb-3">What We Offer</p>
          <h2 className="heading-lg text-espresso">Our Services</h2>
          <p className="mt-4 text-espresso/60 max-w-2xl mx-auto">
            From bridal glamour to everyday beauty, we provide expert makeup, hair styling, lash extensions,
            and brow treatments tailored to you.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group glass-card rounded-2xl p-6 hover:shadow-xl hover:border-warm-gold/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-warm-gold/20 to-champagne/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {Icon && <Icon size={22} className="text-warm-gold" />}
                </div>
                <h3 className="font-serif text-xl font-semibold text-espresso mb-2">{service.title}</h3>
                <p className="text-sm text-espresso/60 leading-relaxed mb-4">{service.description}</p>
                <a
                  href="#booking"
                  className="inline-flex items-center text-sm font-medium text-warm-gold hover:text-warm-gold/80 transition-colors"
                >
                  Enquire →
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
