import { Phone, Calendar } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white/95 backdrop-blur-2xl border-t border-warm-gold/10 px-4 py-3" style={{ boxShadow: '0 -4px 30px rgba(0,0,0,0.06)' }}>
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-espresso text-white font-semibold text-sm shadow-glass"
          >
            <Phone size={15} /> Call
          </a>
          <a
            href="#booking"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm shadow-luxury"
            style={{ background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #C9A96E 100%)' }}
          >
            <Calendar size={15} /> Book Now
          </a>
        </div>
      </div>
    </div>
  )
}
