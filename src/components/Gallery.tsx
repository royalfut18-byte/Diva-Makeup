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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Portfolio</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            Our Work
          </h2>
          <p className="mt-5 text-espresso/50 max-w-lg mx-auto">
            A curated collection of bridal, formal, and beauty transformations.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-400 ${
                activeCategory === cat.id
                  ? 'bg-gradient-gold text-white shadow-luxury'
                  : 'bg-champagne-light/60 text-espresso/50 hover:bg-champagne hover:text-espresso border border-warm-gold/0 hover:border-warm-gold/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative break-inside-avoid rounded-3xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: getAspectRatio(i) }}
              >
                {/* Gradient placeholder */}
                <div className={`absolute inset-0 ${getGradient(item.category)}`} />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/40 transition-all duration-500" />

                {/* Center label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display text-lg text-white/90 text-center px-4 drop-shadow-lg">
                    {item.placeholder}
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-wider text-espresso/70 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://www.instagram.com/diva.make.up/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-warm-gold/15 rounded-full px-6 py-3 hover:shadow-luxury hover:border-warm-gold/30 transition-all duration-500 group"
          >
            <Instagram size={18} className="text-warm-gold" />
            <span className="text-sm font-medium text-espresso/60 group-hover:text-espresso transition-colors">
              See more on Instagram
            </span>
            <span className="text-sm text-warm-gold font-semibold">@diva.make.up</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function getGradient(category: string): string {
  switch (category) {
    case 'bridal': return 'bg-gradient-to-br from-rose-beige via-rose-beige-light/80 to-champagne'
    case 'hair': return 'bg-gradient-to-br from-champagne-dark via-champagne to-ivory-warm'
    case 'formal': return 'bg-gradient-to-br from-blush-deep via-blush to-rose-beige-light'
    case 'lashes': return 'bg-gradient-to-br from-champagne via-blush-light to-rose-beige-light'
    default: return 'bg-gradient-to-br from-champagne to-blush'
  }
}

function getAspectRatio(index: number): string {
  const ratios = ['3/4', '4/5', '3/4', '1/1', '4/5', '3/4', '1/1', '3/4', '4/5', '3/4', '1/1', '4/5']
  return ratios[index % ratios.length]
}
