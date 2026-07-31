import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { NAV_LINKS, WHATSAPP_URL } from '../../data/content'
import { Button } from '../ui/Button'
import { Logo } from './Logo'

const HEADER_OFFSET = 88

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollToHash = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return

    // Unlock scroll immediately, then wait for the mobile menu to finish closing
    document.body.style.overflow = ''
    setOpen(false)

    window.setTimeout(() => {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
      const nextUrl = `${window.location.pathname}${window.location.search}#${id}`
      window.history.pushState(null, '', nextUrl)
    }, 320)
  }

  const onNavClick = (event, href) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    scrollToHash(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(event) => onNavClick(event, '#home')}
          className="inline-flex"
          aria-label="Luxe Dental Clinic home"
        >
          <Logo dark={scrolled || open} asSpan />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => onNavClick(event, link.href)}
                className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-secondary/80 hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="#contact"
            variant={scrolled ? 'primary' : 'ghost'}
            className="!py-2.5 !text-xs"
            onClick={(event) => onNavClick(event, '#contact')}
          >
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          className={`rounded-xl p-2 lg:hidden ${scrolled || open ? 'text-secondary' : 'text-white'}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
            className="border-t border-primary/10 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => onNavClick(event, link.href)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-secondary hover:bg-bg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2">
                <Button
                  href="#contact"
                  className="w-full"
                  onClick={(event) => onNavClick(event, '#contact')}
                >
                  Book Appointment
                </Button>
                <Button
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
