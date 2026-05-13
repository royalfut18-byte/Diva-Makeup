import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, ExternalLink } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-blush/20 to-champagne/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-warm-gold font-medium text-sm uppercase tracking-widest mb-3">Find Us</p>
          <h2 className="heading-lg text-espresso">Contact & Location</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={18} className="text-warm-gold" />
              </div>
              <div>
                <p className="font-medium text-espresso">Studio Address</p>
                <p className="text-sm text-espresso/60 mt-1">{siteConfig.address}</p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-warm-gold hover:underline mt-2"
                >
                  Get Directions <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone size={18} className="text-warm-gold" />
              </div>
              <div>
                <p className="font-medium text-espresso">Phone</p>
                <a href={`tel:${siteConfig.phone}`} className="text-sm text-espresso/60 hover:text-warm-gold transition-colors mt-1 block">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail size={18} className="text-warm-gold" />
              </div>
              <div>
                <p className="font-medium text-espresso">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-espresso/60 hover:text-warm-gold transition-colors mt-1 block">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Instagram size={18} className="text-warm-gold" />
              </div>
              <div>
                <p className="font-medium text-espresso">Instagram</p>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-espresso/60 hover:text-warm-gold transition-colors mt-1 block"
                >
                  {siteConfig.instagram}
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-warm-gold/10">
              <p className="text-sm font-medium text-espresso mb-2">Flexible bookings available</p>
              <p className="text-xs text-espresso/50">Studio & mobile appointments across Sydney</p>
            </div>
          </motion.div>

          {/* Service areas & map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Map card */}
            <div className="glass-card rounded-3xl p-8 h-48 flex items-center justify-center bg-gradient-to-br from-champagne/50 to-rose-beige/30 relative overflow-hidden">
              <div className="text-center z-10">
                <MapPin size={32} className="text-warm-gold mx-auto mb-2" />
                <p className="font-serif text-lg text-espresso font-medium">Liverpool NSW 2170</p>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-warm-gold hover:underline mt-2"
                >
                  Open in Google Maps <ExternalLink size={12} />
                </a>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-warm-gold/10" />
              <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-warm-gold/10" />
            </div>

            {/* Service areas */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-xs font-medium bg-champagne/60 text-espresso/70 rounded-full border border-warm-gold/10"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <a href="#booking" className="btn-primary w-full text-center">
              Send an Enquiry
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
