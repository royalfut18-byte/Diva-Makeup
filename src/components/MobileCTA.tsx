import { Phone, Calendar } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="bg-white/90 backdrop-blur-xl border-t border-warm-gold/20 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3">
        <div className="flex gap-3 max-w-lg mx-auto">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-espresso text-white font-medium text-sm"
          >
            <Phone size={16} /> Call
          </a>
          <a
            href="#booking"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-warm-gold text-white font-medium text-sm"
          >
            <Calendar size={16} /> Book
          </a>
        </div>
      </div>
    </div>
  )
}
