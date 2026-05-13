import { Heart, Instagram, Phone, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-white/80 overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-warm-gold/3 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold text-white">
              Diva<span className="text-warm-gold-light"> Makeup</span>
            </h3>
            <p className="mt-4 text-sm text-white/35 leading-relaxed">
              European makeup artist and hairstylist with 11 years of experience.
              Luxury bridal, formal and occasion services across Sydney.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-warm-gold/20 hover:border-warm-gold/30 transition-all">
                <Instagram size={15} className="text-white/60" />
              </a>
              <a href={`tel:${siteConfig.phone}`} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-warm-gold/20 hover:border-warm-gold/30 transition-all">
                <Phone size={15} className="text-white/60" />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-warm-gold/20 hover:border-warm-gold/30 transition-all">
                <Mail size={15} className="text-white/60" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-warm-gold-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-warm-gold-light transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-warm-gold-light transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold-light transition-colors">
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-5">Areas We Serve</h4>
            <div className="flex flex-wrap gap-1.5">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className="text-[11px] text-white/30 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/25 tracking-wide">
            © {new Date().getFullYear()} Diva Makeup. All rights reserved.
          </p>
          <p className="text-[11px] text-white/25 flex items-center gap-1.5">
            Made with <Heart size={9} className="text-warm-gold-light fill-warm-gold-light" /> in Sydney
          </p>
        </div>
      </div>
    </footer>
  )
}
