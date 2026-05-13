import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/reviews'
import { siteConfig } from '../data/site'

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-champagne-light/40 to-ivory" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blush/20 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Testimonials</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            What Our Clients Say
          </h2>

          {/* Rating badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
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
          </div>
        </motion.div>

        {/* Reviews - horizontal scroll on mobile, grid on desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="glass-card-elevated p-8 h-full hover:shadow-luxury transition-all duration-500">
                {/* Gold top accent */}
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-warm-gold/20 to-transparent" />

                {/* Quote icon */}
                <div className="mb-5">
                  <Quote size={28} className="text-warm-gold/25" />
                </div>

                {/* Review text */}
                <p className="text-espresso/65 leading-relaxed text-[15px] italic font-light">
                  "{review.text}"
                </p>

                {/* Author */}
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
        </div>
      </div>
    </section>
  )
}
