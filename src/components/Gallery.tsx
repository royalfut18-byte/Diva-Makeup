import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { galleryItems, galleryCategories } from '../data/gallery'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/10 to-transparent" />

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
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Portfolio</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            Our Work
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {galleryCategories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-400 ${
                activeCategory === cat.id
                  ? 'bg-gradient-gold text-white shadow-luxury'
                  : 'bg-champagne-light/60 text-espresso/50 hover:bg-champagne hover:text-espresso border border-warm-gold/0 hover:border-warm-gold/15'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group relative break-inside-avoid rounded-3xl overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
                />

                {item.featured && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-warm-gold shadow-gold" />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <motion.a
            href="https://www.instagram.com/diva.make.up/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-warm-gold/15 rounded-full px-6 py-3 hover:shadow-luxury hover:border-warm-gold/30 transition-all duration-500 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Instagram size={18} className="text-warm-gold" />
            <span className="text-sm font-medium text-espresso/60 group-hover:text-espresso transition-colors">
              See more on Instagram
            </span>
            <span className="text-sm text-warm-gold font-semibold">@diva.make.up</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
