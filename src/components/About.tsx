import { motion } from 'framer-motion'
import { MapPin, Clock, Award, Star } from 'lucide-react'
import { galleryItems } from '../data/gallery'

const aboutImage = galleryItems.find((item) => item.id === 'img-03')
const stats = [
  { icon: Clock, value: '11+', label: 'Years Experience' },
  { icon: Star, value: '5.0', label: 'Star Rating' },
  { icon: MapPin, value: 'Sydney', label: 'Based' },
  { icon: Award, value: 'Specialist', label: 'Bridal Expert' },
]

const statContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const statItem = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-champagne-light/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/10 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blush/20 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-4xl border border-white/60 shadow-luxury-lg overflow-hidden relative group">
              <img
                src={aboutImage?.src}
                alt={aboutImage?.alt || 'Diva Makeup artist at work'}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 sm:right-8 glass-card-elevated p-5 shadow-luxury will-change-transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              animate={{ y: [0, -5, 0] }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-gold flex items-center justify-center">
                  <Award size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-espresso">European Trained</p>
                  <p className="text-[11px] text-espresso/40">Professional Artist</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-warm-gold/20 rounded-tl-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="gold-line mb-6 origin-left"
            />
            <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">About Diva Makeup</p>
            <h2 className="text-display-sm font-display font-bold text-espresso">
              European Artistry,<br />Sydney Based
            </h2>

            <div className="mt-7 space-y-4 text-espresso/55 leading-relaxed text-base">
              <p>
                Diva Makeup moved from Europe to Sydney 9 years ago and brings over 11 years of professional
                experience in makeup and hairstyling. Trained in European techniques and inspired by editorial
                beauty, every look is crafted with precision, artistry, and a deep understanding of what makes
                each client unique.
              </p>
              <p>
                Based around Liverpool and Lurnea, Diva Makeup offers studio appointments and mobile bridal
                and special occasion services across Sydney. Whether it&apos;s your wedding day, formal, or a
                celebration — we ensure you feel confident and absolutely beautiful.
              </p>
            </div>

            {/* Stats grid */}
            <motion.div
              variants={statContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-10 grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statItem}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-warm-gold/8 hover:border-warm-gold/20 hover:shadow-glass transition-all duration-300"
                >
                  <stat.icon size={18} className="text-warm-gold flex-shrink-0" />
                  <div>
                    <p className="text-base font-bold text-espresso">{stat.value}</p>
                    <p className="text-[11px] text-espresso/40">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
