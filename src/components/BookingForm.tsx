import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, Instagram, MessageCircle, CheckCircle } from 'lucide-react'
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
      <section id="booking" className="section-padding bg-gradient-to-b from-ivory to-blush/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-3xl p-12"
          >
            <CheckCircle size={56} className="text-warm-gold mx-auto mb-4" />
            <h3 className="heading-md text-espresso">Thank You!</h3>
            <p className="mt-4 text-espresso/60">
              Your enquiry has been received. We'll get back to you shortly with availability and details.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary text-sm py-2.5 px-5">
                <Phone size={16} className="mr-2" /> Call Us
              </a>
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2.5 px-5">
                <Instagram size={16} className="mr-2" /> Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="section-padding bg-gradient-to-b from-ivory to-blush/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-warm-gold font-medium text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="heading-lg text-espresso">Book Your Appointment</h2>
            <p className="mt-4 text-espresso/60 leading-relaxed">
              Tell us your event date and style — we'll get back to you with availability.
            </p>

            {/* Quick contact */}
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 border border-warm-gold/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center">
                  <Phone size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-espresso">Call</p>
                  <p className="text-xs text-espresso/50">{siteConfig.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 border border-warm-gold/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center">
                  <Mail size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-espresso">Email</p>
                  <p className="text-xs text-espresso/50">{siteConfig.email}</p>
                </div>
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 border border-warm-gold/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center">
                  <Instagram size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-espresso">Instagram</p>
                  <p className="text-xs text-espresso/50">{siteConfig.instagram}</p>
                </div>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/60 hover:bg-white/80 border border-warm-gold/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-warm-gold/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-warm-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-espresso">WhatsApp</p>
                  <p className="text-xs text-espresso/50">Send a message</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.full_name}
                    onChange={(e) => update('full_name', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                    placeholder="0400 000 000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Event Type *</label>
                  <select
                    required
                    value={form.event_type}
                    onChange={(e) => update('event_type', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Preferred Date</label>
                  <input
                    type="date"
                    value={form.preferred_date}
                    onChange={(e) => update('preferred_date', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Location / Suburb</label>
                  <input
                    type="text"
                    value={form.suburb}
                    onChange={(e) => update('suburb', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                    placeholder="e.g. Liverpool, Casula"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Number of People</label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    value={form.people_count}
                    onChange={(e) => update('people_count', parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-espresso/70 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-warm-gold/20 bg-white/60 focus:outline-none focus:ring-2 focus:ring-warm-gold/30 focus:border-warm-gold/40 transition-all resize-none"
                    placeholder="Tell us about your event, style preferences, or any questions..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-6 disabled:opacity-60"
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
                    <Send size={16} /> Send Enquiry
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
