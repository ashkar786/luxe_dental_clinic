import { Mail, MapPin, Phone } from 'lucide-react'
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, SERVICES } from '../../data/content'
import { Logo } from '../layout/Logo'

const socialLinks = [
  {
    label: 'Instagram',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.2A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zM17.8 6.9a1.05 1.05 0 1 0 1.05 1.05A1.05 1.05 0 0 0 17.8 6.9z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28.3 28.3 0 0 0 2 12a28.3 28.3 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C5.9 19 12 19 12 19s6.1 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28.3 28.3 0 0 0 22 12a28.3 28.3 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-white" role="contentinfo">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo dark={false} />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Luxe Dental Clinic delivers modern, personalized dentistry in Al Hudaiba, Dubai — from preventive care
            to implants and cosmetic smile design.
          </p>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent transition hover:bg-accent hover:text-secondary"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/70 transition hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Services</h3>
          <ul className="mt-4 space-y-2">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.title}>
                <a href="#services" className="text-sm text-white/70 transition hover:text-accent">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Working Hours</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Sunday–Thursday: 10:00 AM – 7:00 PM</li>
            <li>Saturday: 10:00 AM – 3:00 PM</li>
            <li>Closed Friday</li>
          </ul>
          <ul className="mt-6 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-accent" aria-hidden="true" />
              2B Street, Al Hudaiba, Dubai, UAE
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-accent" aria-hidden="true" />
              <a href={PHONE_TEL} className="hover:text-accent">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-accent" aria-hidden="true" />
              <a href="mailto:hello@luxedental.ae" className="hover:text-accent">
                hello@luxedental.ae
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-white/55 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Luxe Dental Clinic. All rights reserved.</p>
          <p>Premium dental care in Dubai, UAE</p>
        </div>
      </div>
    </footer>
  )
}
