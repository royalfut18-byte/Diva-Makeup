import { motion } from 'framer-motion'
import { Check, Heart, Sparkles } from 'lucide-react'
import { bridalImages } from '../data/gallery'

const bridalChecklist = [
  { title: 'Bridal Trial', desc: 'Perfect your look before the big day' },
  { title: 'Wedding Day Makeup', desc: 'Flawless, long-lasting bridal glam' },
  { title: 'Bridal Party Makeup', desc: 'Coordinated looks for your girls' },
  { title: 'Hair Styling', desc: 'Elegant updos, waves & braids' },
  { title: 'Photo-Ready Finish', desc: 'Camera-perfect all day & night' },
]

const checklistContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const checklistItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function BridalFeature() {
  return (
    <section id="bridal" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light/50 via-champagne-light/30 to-ivory" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />

      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-rose-beige/20 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-champagne/30 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {bridalImages.slice(0, 2).map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="rounded-3xl overflow-hidden shadow-luxury border border-white/60 hover:shadow-luxury-lg transition-shadow duration-500"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4 pt-8">
                {bridalImages.slice(2, 4).map((img, i) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                    className="rounded-3xl overflow-hidden shadow-luxury border border-white/60 hover:shadow-luxury-lg transition-shadow duration-500"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-warm-gold/20 rounded-tl-3xl" />
          </motion.div>

          {/* Right - Content & checklist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-warm-gold/15 rounded-full px-4 py-1.5 mb-8"
            >
              <Heart size={13} className="text-warm-gold fill-warm-gold" />
              <span className="text-xs font-semibold text-warm-gold tracking-wider uppercase">Bridal Specialist</span>
            </motion.div>

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

            {/* Checklist */}
            <motion.div
              variants={checklistContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mt-8 space-y-3"
            >
              {bridalChecklist.map((item) => (
                <motion.div
                  key={item.title}
                  variants={checklistItem}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/50 border border-warm-gold/8 hover:bg-white/80 hover:border-warm-gold/20 transition-all duration-300"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-champagne to-champagne-dark/30 flex items-center justify-center flex-shrink-0 mt-0.5 border border-warm-gold/10">
                    <Check size={12} className="text-warm-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-espresso">{item.title}</h4>
                    <p className="text-xs text-espresso/45 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#booking"
              className="btn-primary mt-8 inline-flex"
              whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(184, 134, 11, 0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              <Sparkles size={16} />
              Plan My Bridal Look
            </motion.a>

            <div className="mt-4 inline-flex items-center gap-2 text-sm text-espresso/40">
              <motion.div
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Mobile bridal service available across Sydney
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
