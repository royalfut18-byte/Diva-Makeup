import { motion } from 'framer-motion'
import { Check, Heart } from 'lucide-react'

const bridalChecklist = [
  'Bridal trial consultation',
  'Wedding day makeup',
  'Bridal party makeup',
  'Hair styling & updos',
  'Long-wear photo-ready finish',
]

export default function BridalFeature() {
  return (
    <section id="bridal" className="section-padding bg-gradient-to-br from-blush/30 via-champagne/20 to-ivory">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-warm-gold/10 rounded-full px-4 py-1.5 mb-6">
              <Heart size={14} className="text-warm-gold" />
              <span className="text-sm font-medium text-warm-gold">Bridal Specialist</span>
            </div>

            <h2 className="heading-lg text-espresso">
              Your Bridal Morning Should Feel{' '}
              <span className="text-warm-gold italic">Calm, Beautiful</span> & Unforgettable
            </h2>

            <p className="mt-6 text-lg text-espresso/60 leading-relaxed">
              Let us take care of your bridal look so you can enjoy every moment. With mobile bridal services
              available across Sydney, we bring the luxury experience to you — whether at your home, hotel,
              or venue.
            </p>

            {/* Checklist */}
            <div className="mt-8 space-y-3">
              {bridalChecklist.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-warm-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-warm-gold" />
                  </div>
                  <span className="text-espresso/70 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#booking"
              className="btn-primary mt-10 inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Plan My Bridal Look
            </motion.a>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main bridal card */}
              <div className="w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-rose-beige/40 to-champagne/60 border border-white/60 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="glass-card rounded-2xl p-6">
                    <p className="font-serif text-2xl text-espresso font-semibold">Bridal Makeup</p>
                    <p className="text-espresso/60 mt-2">Flawless, long-lasting bridal looks tailored to your style and wedding theme.</p>
                    <div className="mt-3 flex items-center gap-4 text-sm text-espresso/50">
                      <span>✓ Trial included</span>
                      <span>✓ Mobile service</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                className="absolute -top-4 -right-4 glass-card rounded-xl p-3 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-warm-gold fill-warm-gold" />
                  <span className="text-sm font-medium text-espresso">Bridal Package</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
