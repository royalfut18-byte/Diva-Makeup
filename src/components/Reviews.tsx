import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { reviews } from '../data/reviews'
import { siteConfig } from '../data/site'

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-gradient-to-b from-champagne/20 to-ivory">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-warm-gold font-medium text-sm uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="heading-lg text-espresso">What Our Clients Say</h2>

          {/* Rating badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm border border-warm-gold/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-espresso">
                {siteConfig.googleRating} · {siteConfig.googleReviews} Google Reviews
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2.5 shadow-sm border border-warm-gold/10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <span className="text-sm font-medium text-espresso">
                {siteConfig.facebookRating}/5 · {siteConfig.facebookVotes} Facebook Votes
              </span>
            </div>
          </div>
        </motion.div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <Quote size={24} className="text-warm-gold/30 mb-3" />
              <p className="text-espresso/70 leading-relaxed italic">"{review.text}"</p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-espresso">{review.name}</p>
                  <p className="text-xs text-espresso/40 capitalize">{review.source} Review</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-warm-gold text-warm-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
