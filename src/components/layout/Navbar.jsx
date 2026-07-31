import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Languages, Menu, MessageCircle, X } from 'lucide-react'
import { WHATSAPP_URL } from '../../data/content'
import { NAV_HREFS } from '../../i18n/translations'
import { useLanguage } from '../../i18n/LanguageContext'
import { Button } from '../ui/Button'
import { Logo } from './Logo'

const HEADER_OFFSET = 88

function unlockScroll() {
  document.body.style.overflow = ''
  document.documentElement.style.overflow = ''
}

function lockScroll() {
  document.body.style.overflow = 'hidden'
  document.documentElement.style.overflow = 'hidden'
}

export function Navbar() {
  const { t, toggleLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) lockScroll()
    else unlockScroll()
    return unlockScroll
  }, [open])

  const goToSection = (href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    unlockScroll()
    setOpen(false)

    const scroll = () => {
      if (!el) return
      const y = el.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' })
      try {
        window.history.pushState(null, '', `${window.location.pathname}${window.location.search}#${id}`)
      } catch {
        window.location.hash = id
      }
    }

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scroll)
    })
  }

  const onNavClick = (event, href) => {
    if (!href.startsWith('#')) return
    event.preventDefault()
    event.stopPropagation()
    goToSection(href)
  }

  const linkClass = (isScrolled) =>
    `rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
      isScrolled ? 'text-secondary/80 hover:text-primary' : 'text-white/90 hover:text-white'
    }`

  const headerSolid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        headerSolid ? 'bg-white/95 shadow-soft backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(event) => onNavClick(event, '#home')}
          className="inline-flex min-w-0 shrink"
          aria-label="Luxe Dental Clinic home"
        >
          <Logo dark={headerSolid} asSpan compact />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_HREFS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(event) => onNavClick(event, link.href)}
                className={linkClass(scrolled)}
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.langToggleAria}
            className={`inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2 text-xs font-bold tracking-wide transition ${
              scrolled
                ? 'border-primary/15 bg-white text-primary hover:bg-bg'
                : 'border-white/25 bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <Languages size={16} aria-hidden="true" />
            {t.langToggle}
          </button>
          <Button
            href="#contact"
            variant={scrolled ? 'primary' : 'ghost'}
            className="!py-2.5 !text-xs"
            onClick={(event) => onNavClick(event, '#contact')}
          >
            {t.bookAppointment}
          </Button>
        </div>

        <div className="flex shrink-0 items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t.langToggleAria}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition ${
              headerSolid
                ? 'border-primary/15 bg-white text-primary'
                : 'border-white/25 bg-white/10 text-white'
            }`}
          >
            <Languages size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`rounded-xl p-2 ${headerSolid ? 'text-secondary' : 'text-white'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-primary/10 bg-white lg:hidden"
          >
            <ul className="flex max-h-[min(75vh,560px)] flex-col gap-1 overflow-y-auto px-4 py-4">
              {NAV_HREFS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => onNavClick(event, link.href)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-secondary hover:bg-bg"
                  >
                    {t.nav[link.key]}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 border-t border-primary/10 pt-3">
                <button
                  type="button"
                  onClick={toggleLang}
                  aria-label={t.langToggleAria}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-primary/15 bg-bg px-4 py-3 text-sm font-bold text-primary"
                >
                  <Languages size={18} aria-hidden="true" />
                  {t.langToggle}
                </button>
                <Button
                  href="#contact"
                  className="w-full"
                  onClick={(event) => onNavClick(event, '#contact')}
                >
                  {t.bookAppointment}
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
                  {t.whatsapp}
                </Button>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
