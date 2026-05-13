import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, ExternalLink, Navigation } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory to-champagne-light/40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Find Us</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            Visit Our Studio
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card-elevated p-8 space-y-6"
          >
            {[
              { icon: MapPin, title: 'Studio', value: siteConfig.address, href: siteConfig.googleMapsUrl, linkText: 'Get Directions' },
              { icon: Phone, title: 'Phone', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
              { icon: Mail, title: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Instagram, title: 'Instagram', value: siteConfig.instagram, href: siteConfig.instagramUrl, linkText: 'Follow' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-champagne-light flex items-center justify-center flex-shrink-0 border border-warm-gold/10">
                  <item.icon size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-espresso/40 uppercase tracking-wider">{item.title}</p>
                  <a
                    href={item.href}
                    target={item.title === 'Instagram' ? '_blank' : undefined}
                    rel={item.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                    className="text-sm text-espresso/70 hover:text-warm-gold transition-colors mt-0.5 block"
                  >
                    {item.value}
                  </a>
                  {item.linkText && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-warm-gold font-medium mt-1.5 hover:gap-2 transition-all"
                    >
                      {item.linkText} <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-5 border-t border-warm-gold/10">
              <p className="text-xs font-semibold text-espresso/50 mb-1">Flexible bookings available</p>
              <p className="text-[11px] text-espresso/35">Studio & mobile appointments across Sydney</p>
            </div>
          </motion.div>

          {/* Map & Service areas */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass-card-elevated p-8 relative overflow-hidden"
            >
              <div className="relative text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4 shadow-luxury">
                  <Navigation size={24} className="text-white" />
                </div>
                <p className="font-display text-xl font-bold text-espresso">Liverpool NSW 2170</p>
                <p className="text-sm text-espresso/40 mt-1">33 Lachlan Street</p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2.5 px-5 mt-5 inline-flex"
                >
                  <MapPin size={13} /> Open in Google Maps
                </a>
              </div>
              {/* Decorative rings */}
              <div className="absolute top-4 right-4 w-24 h-24 rounded-full border border-warm-gold/8" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-warm-gold/5" />
            </motion.div>

            {/* Service areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-card-elevated p-8"
            >
              <h3 className="font-display text-lg font-bold text-espresso mb-5">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-1.5 text-[11px] font-semibold bg-champagne-light/70 text-espresso/55 rounded-full border border-warm-gold/8 tracking-wide"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
