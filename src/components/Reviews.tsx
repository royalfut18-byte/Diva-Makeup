import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/reviews'
import { siteConfig } from '../data/site'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-champagne-light/40 to-ivory" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blush/20 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Testimonials</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            What Our Clients Say
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-glass border border-warm-gold/10">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-espresso/70">
                {siteConfig.googleRating} · {siteConfig.googleReviews} Google Reviews
              </span>
            </div>
            <div className="inline-flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-glass border border-warm-gold/10">
              <div className="flex -space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="text-xs font-semibold text-espresso/70">
                {siteConfig.facebookRating}/5 · {siteConfig.facebookVotes} Facebook Votes
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={card}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="glass-card-elevated p-8 h-full hover:shadow-luxury transition-all duration-500">
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-warm-gold/20 to-transparent" />

                <div className="mb-5">
                  <Quote size={28} className="text-warm-gold/25 group-hover:text-warm-gold/40 transition-colors" />
                </div>

                <p className="text-espresso/65 leading-relaxed text-[15px] italic font-light">
                  "{review.text}"
                </p>

                <div className="mt-6 pt-5 border-t border-warm-gold/8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-champagne to-rose-beige/50 flex items-center justify-center border border-warm-gold/15">
                      <span className="font-display text-sm font-bold text-warm-gold">{review.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-espresso">{review.name}</p>
                      <p className="text-[11px] text-espresso/35 capitalize font-medium">{review.source} Review</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={11} className="fill-warm-gold text-warm-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
