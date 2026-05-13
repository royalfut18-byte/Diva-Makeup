import { motion } from 'framer-motion'
import { MapPin, Clock, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-champagne/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-rose-beige/50 to-champagne/70 border border-white/60 shadow-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-7xl text-warm-gold/40 font-bold">11</p>
                  <p className="text-espresso/40 font-medium mt-2">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Accent card */}
            <motion.div
              className="absolute -bottom-4 -right-4 glass-card rounded-xl p-4 shadow-lg"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-warm-gold/20 flex items-center justify-center">
                  <Award size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-espresso">European Trained</p>
                  <p className="text-xs text-espresso/50">Professional Artist</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-warm-gold font-medium text-sm uppercase tracking-widest mb-3">About Us</p>
            <h2 className="heading-lg text-espresso">European Artistry, Sydney Based</h2>

            <div className="mt-6 space-y-4 text-espresso/70 leading-relaxed">
              <p>
                Diva Makeup moved from Europe to Sydney 9 years ago and brings over 11 years of professional
                experience in makeup and hairstyling. Trained in European techniques and inspired by editorial
                beauty, every look is crafted with precision and artistry.
              </p>
              <p>
                Based around Liverpool/Lurnea, Diva Makeup offers studio appointments and mobile bridal/special
                occasion services across Sydney. Whether it&apos;s your wedding day, formal, or a special celebration,
                we ensure you feel confident and beautiful.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-warm-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-espresso">Liverpool NSW</p>
                  <p className="text-xs text-espresso/50">Studio & Mobile</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-warm-gold flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-espresso">Flexible Bookings</p>
                  <p className="text-xs text-espresso/50">Available 7 days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
