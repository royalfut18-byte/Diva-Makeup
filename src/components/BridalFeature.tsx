import { motion } from 'framer-motion'
import { Check, Heart, Sparkles } from 'lucide-react'

const bridalChecklist = [
  { title: 'Bridal Trial', desc: 'Perfect your look before the big day' },
  { title: 'Wedding Day Makeup', desc: 'Flawless, long-lasting bridal glam' },
  { title: 'Bridal Party Makeup', desc: 'Coordinated looks for your girls' },
  { title: 'Hair Styling', desc: 'Elegant updos, waves & braids' },
  { title: 'Photo-Ready Finish', desc: 'Camera-perfect all day & night' },
]

export default function BridalFeature() {
  return (
    <section id="bridal" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light/50 via-champagne-light/30 to-ivory" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />

      {/* Decorative */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-rose-beige/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-champagne/30 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-warm-gold/15 rounded-full px-4 py-1.5 mb-8">
              <Heart size={13} className="text-warm-gold fill-warm-gold" />
              <span className="text-xs font-semibold text-warm-gold tracking-wider uppercase">Bridal Specialist</span>
            </div>

            <h2 className="text-display-md font-display font-bold text-espresso leading-tight">
              Your Bridal Morning Should Feel{' '}
              <span className="italic text-gradient-gold">Calm, Beautiful</span>{' '}
              & Unforgettable
            </h2>

            <p className="mt-6 text-base text-espresso/50 leading-relaxed max-w-lg">
              Let us bring the luxury experience to you. With mobile bridal services
              available across Sydney, we ensure your morning is stress-free while you
              look absolutely stunning.
            </p>

            <motion.a
              href="#booking"
              className="btn-primary mt-10 inline-flex"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={16} />
              Plan My Bridal Look
            </motion.a>

            {/* Mobile service badge */}
            <div className="mt-6 inline-flex items-center gap-2 text-sm text-espresso/40">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Mobile bridal service available across Sydney
            </div>
          </motion.div>

          {/* Right - Checklist cards with gold accent line */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Vertical gold line */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-warm-gold/30 via-warm-gold/15 to-transparent hidden sm:block" />

            <div className="space-y-4 pl-0 sm:pl-14">
              {bridalChecklist.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="relative group"
                >
                  {/* Connection dot to gold line */}
                  <div className="absolute -left-14 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-warm-gold/40 hidden sm:block group-hover:border-warm-gold group-hover:bg-champagne transition-colors" />

                  <div className="glass-card-elevated p-5 group-hover:shadow-luxury transition-all duration-500">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-champagne to-champagne-dark/30 flex items-center justify-center flex-shrink-0 mt-0.5 border border-warm-gold/10">
                        <Check size={14} className="text-warm-gold" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-semibold text-espresso">{item.title}</h4>
                        <p className="text-sm text-espresso/45 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
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
