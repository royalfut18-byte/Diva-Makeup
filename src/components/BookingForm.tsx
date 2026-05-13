import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, Instagram, MessageCircle, CheckCircle, Sparkles } from 'lucide-react'
import { eventTypes } from '../data/services'
import { siteConfig } from '../data/site'
import { submitEnquiry } from '../lib/supabase'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    full_name: '',
    phone: '',
    email: '',
    event_type: '',
    preferred_date: '',
    suburb: '',
    people_count: 1,
    message: '',
  })

  function update(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await submitEnquiry(form)
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="booking" className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blush-light/40 to-ivory" />
        <div className="relative max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card-elevated p-12"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={28} className="text-white" />
            </div>
            <h3 className="text-display-sm font-display font-bold text-espresso">Thank You!</h3>
            <p className="mt-4 text-espresso/50 leading-relaxed">
              Your enquiry has been received. We'll get back to you shortly with availability and pricing.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-xs py-2.5 px-5">
                <Phone size={14} /> Call Us
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs py-2.5 px-5">
                <Instagram size={14} /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light/30 via-champagne-light/20 to-ivory" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-champagne/20 blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-blush/15 blur-[80px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="gold-line mx-auto mb-6" />
          <p className="text-warm-gold font-semibold text-xs uppercase tracking-[0.2em] mb-4">Get in Touch</p>
          <h2 className="text-display-md font-display font-bold text-espresso">
            Ready to Plan Your Look?
          </h2>
          <p className="mt-4 text-espresso/45 max-w-md mx-auto">
            Tell us your event date and style — we'll get back to you with availability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Left - Quick contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="font-display text-xl font-semibold text-espresso mb-6">Quick Contact</h3>

            {[
              { icon: Phone, label: 'Call', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
              { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Instagram, label: 'Instagram', value: siteConfig.instagram, href: siteConfig.instagramUrl },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Send a message', href: siteConfig.whatsappUrl },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label === 'Instagram' || item.label === 'WhatsApp' ? '_blank' : undefined}
                rel={item.label === 'Instagram' || item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white/90 border border-warm-gold/8 hover:border-warm-gold/20 hover:shadow-glass transition-all duration-400 group"
              >
                <div className="w-11 h-11 rounded-xl bg-champagne-light flex items-center justify-center border border-warm-gold/10 group-hover:bg-champagne transition-colors">
                  <item.icon size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-espresso">{item.label}</p>
                  <p className="text-xs text-espresso/40">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Booking note */}
            <div className="mt-6 p-4 rounded-2xl bg-champagne-light/50 border border-warm-gold/10">
              <div className="flex items-start gap-2">
                <Sparkles size={14} className="text-warm-gold mt-0.5 flex-shrink-0" />
                <p className="text-xs text-espresso/50 leading-relaxed">
                  Flexible bookings available. Studio appointments in Lurnea/Liverpool or mobile service for bridal & special occasions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card-elevated p-8 sm:p-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.full_name}
                    onChange={(e) => update('full_name', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm placeholder:text-espresso/25"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm placeholder:text-espresso/25"
                    placeholder="0400 000 000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm placeholder:text-espresso/25"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Event Type *</label>
                  <select
                    required
                    value={form.event_type}
                    onChange={(e) => update('event_type', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm text-espresso/70"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={form.preferred_date}
                    onChange={(e) => update('preferred_date', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm text-espresso/70"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Suburb</label>
                  <input
                    type="text"
                    value={form.suburb}
                    onChange={(e) => update('suburb', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm placeholder:text-espresso/25"
                    placeholder="e.g. Liverpool, Casula"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">People</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={form.people_count}
                    onChange={(e) => update('people_count', parseInt(e.target.value) || 1)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all text-sm"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-espresso/60 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full px-5 py-3.5 rounded-xl border border-warm-gold/15 bg-white/70 focus:outline-none focus:ring-2 focus:ring-warm-gold/20 focus:border-warm-gold/30 transition-all resize-none text-sm placeholder:text-espresso/25"
                    placeholder="Tell us about your event, style preferences, or questions..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-7 disabled:opacity-50 py-4"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={15} /> Send Booking Enquiry
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
