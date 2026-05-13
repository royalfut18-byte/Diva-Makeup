import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Crown, Wind, Eye, Wand2, Pen, ArrowRight, type LucideIcon } from 'lucide-react'
import { services } from '../data/services'

const iconMap: Record<string, LucideIcon> = {
  Heart, Sparkles, Star, Crown, Wind, Eye, Wand2, Pen,
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/10 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-champagne/20 blur-[80px]" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-blush/20 blur-[60px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="gold-line mx-auto mb-6"
          />
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Our Expertise</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            Services We Offer
          </h2>
          <p className="mt-5 text-espresso/50 max-w-xl mx-auto text-base leading-relaxed">
            From luxury bridal looks to everyday beauty, every service is tailored
            to make you feel your most confident and beautiful.
          </p>
        </motion.div>

        {/* Service cards - varied layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            const isFeature = i === 0 || i === 3
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative glass-card-elevated p-7 hover:shadow-luxury transition-all duration-500 ${
                  isFeature ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Gold glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-warm-gold/0 to-champagne/0 group-hover:from-warm-gold/5 group-hover:to-champagne/10 transition-all duration-500" />

                {/* Gold top border accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-warm-gold/0 group-hover:via-warm-gold/40 to-transparent transition-all duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-champagne to-champagne-dark/40 flex items-center justify-center mb-5 group-hover:shadow-gold transition-all duration-500 border border-warm-gold/10">
                    {Icon && <Icon size={24} className="text-warm-gold" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-espresso mb-2.5">{service.title}</h3>
                  <p className="text-sm text-espresso/50 leading-relaxed mb-5">{service.description}</p>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-warm-gold uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
                  >
                    Enquire <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
