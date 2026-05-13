import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 30)
  })

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'glass-navbar py-3'
          : 'bg-transparent py-5 lg:py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group relative">
          <span className="font-display text-2xl sm:text-[1.7rem] font-bold text-espresso tracking-tight">
            Diva<span className="text-gradient-gold"> Makeup</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium uppercase tracking-[0.08em] text-espresso/60 hover:text-warm-gold transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-warm-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-espresso/50 hover:text-warm-gold transition-colors">
            <Phone size={14} />
            <span className="font-medium">{siteConfig.phoneDisplay}</span>
          </a>
          <a href="#booking" className="btn-primary text-xs py-3 px-6">
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-espresso hover:text-warm-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-b border-warm-gold/10 shadow-glass-lg"
          >
            <div className="px-6 py-8 space-y-1">
              {siteConfig.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block py-3 text-base font-medium text-espresso/70 hover:text-warm-gold transition-colors border-b border-warm-gold/5 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4">
                <a href="#booking" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center text-sm py-3.5">
                  Book an Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
