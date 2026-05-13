import { motion } from 'framer-motion'
import { MapPin, Clock, Award, Star } from 'lucide-react'

const stats = [
  { icon: Clock, value: '11+', label: 'Years Experience' },
  { icon: Star, value: '5.0', label: 'Star Rating' },
  { icon: MapPin, value: 'Sydney', label: 'Based' },
  { icon: Award, value: 'Specialist', label: 'Bridal Expert' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-champagne-light/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/10 to-transparent" />
      <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full bg-blush/20 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-4xl bg-gradient-to-br from-rose-beige/40 via-champagne/50 to-blush/40 border border-white/60 shadow-luxury-lg overflow-hidden relative">
              {/* Inner decorative */}
              <div className="absolute inset-8 rounded-3xl border border-warm-gold/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.p
                    className="font-display text-8xl text-warm-gold/20 font-bold"
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    11
                  </motion.p>
                  <p className="text-espresso/30 font-medium mt-2 tracking-wider text-sm uppercase">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 sm:right-8 glass-card-elevated p-5 shadow-luxury"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
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

            {/* Gold corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-warm-gold/20 rounded-tl-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="gold-line mb-6" />
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
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/60 border border-warm-gold/8"
                >
                  <stat.icon size={18} className="text-warm-gold flex-shrink-0" />
                  <div>
                    <p className="text-base font-bold text-espresso">{stat.value}</p>
                    <p className="text-[11px] text-espresso/40">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
