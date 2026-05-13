import { Heart } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-espresso text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white">
              Diva<span className="text-warm-gold"> Makeup</span>
            </h3>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              European makeup artist and hairstylist with 11 years of experience. Bridal, formal,
              and special occasion beauty services in Liverpool and across Sydney.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-warm-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-warm-gold transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-warm-gold transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-warm-gold transition-colors">
                  {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h4 className="font-semibold text-white mb-4">Service Areas</h4>
            <div className="flex flex-wrap gap-1.5">
              {siteConfig.serviceAreas.map((area) => (
                <span key={area} className="text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Diva Makeup. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Made with <Heart size={10} className="text-warm-gold" /> in Sydney
          </p>
        </div>
      </div>
    </footer>
  )
}
