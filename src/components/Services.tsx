import { motion } from 'framer-motion'
import { ArrowRight, type LucideIcon, Heart, Sparkles, Star, Crown, Wind, Eye, Wand2, Pen } from 'lucide-react'
import { services } from '../data/services'
import { galleryItems } from '../data/gallery'

const iconMap: Record<string, LucideIcon> = {
  Heart, Sparkles, Star, Crown, Wind, Eye, Wand2, Pen,
}

const serviceImages = [
  galleryItems.find((i) => i.id === 'img-04'),
  galleryItems.find((i) => i.id === 'img-13'),
  galleryItems.find((i) => i.id === 'img-07'),
  galleryItems.find((i) => i.id === 'img-11'),
  galleryItems.find((i) => i.id === 'img-02'),
  galleryItems.find((i) => i.id === 'img-10'),
  galleryItems.find((i) => i.id === 'img-09'),
  galleryItems.find((i) => i.id === 'img-01'),
]

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-section" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/10 to-transparent" />

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

        {/* Service cards with images */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            const img = serviceImages[i]
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-3xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500"
              >
                {/* Background image */}
                {img && (
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/50 to-espresso/20 group-hover:from-espresso/95 group-hover:via-espresso/60 transition-all duration-500" />

                <div className="relative p-7 min-h-[280px] flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/20">
                    {Icon && <Icon size={22} className="text-warm-gold" />}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{service.description}</p>
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
