import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryItems, galleryCategories } from '../data/gallery'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-warm-gold font-medium text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="heading-lg text-espresso">Portfolio</h2>
          <p className="mt-4 text-espresso/60 max-w-xl mx-auto">
            A glimpse into our bridal, formal, and beauty work across Sydney.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-warm-gold text-white shadow-md'
                  : 'bg-champagne/50 text-espresso/60 hover:bg-champagne hover:text-espresso'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Placeholder gradient background */}
                <div className={`absolute inset-0 ${getGradient(item.category)}`} />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-all duration-300" />

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-xl text-white/80 opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.placeholder}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-espresso/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{item.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-espresso/50"
        >
          Follow us on Instagram for more daily work →{' '}
          <a href="https://www.instagram.com/diva.make.up/" target="_blank" rel="noopener noreferrer" className="text-warm-gold hover:underline">
            @diva.make.up
          </a>
        </motion.p>
      </div>
    </section>
  )
}

function getGradient(category: string): string {
  switch (category) {
    case 'bridal': return 'bg-gradient-to-br from-rose-beige/80 to-champagne/60'
    case 'hair': return 'bg-gradient-to-br from-champagne/80 to-warm-gold/30'
    case 'formal': return 'bg-gradient-to-br from-blush/80 to-rose-beige/60'
    case 'lashes': return 'bg-gradient-to-br from-champagne/60 to-blush/80'
    default: return 'bg-gradient-to-br from-champagne to-blush'
  }
}
