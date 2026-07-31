import { motion } from 'framer-motion'
import { CalendarCheck, MessageCircle, ShieldCheck, Sparkles, Stethoscope, Wrench } from 'lucide-react'
import { TRUST_BADGES, WHATSAPP_URL } from '../../data/content'
import { Button } from '../ui/Button'

const badgeIcons = [ShieldCheck, Sparkles, Stethoscope, Wrench]

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
          alt="Modern dental clinic treatment room in Dubai"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="gradient-hero absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(62,198,255,0.28),transparent_45%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-display text-3xl font-semibold tracking-wide text-white md:text-4xl"
        >
          Luxe Dental Clinic
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl leading-[1.05] font-semibold text-white sm:text-6xl lg:text-7xl"
        >
          Your Smile Deserves Expert Care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
        >
          Modern dentistry with advanced technology and experienced specialists in the heart of Dubai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Button href="#contact" variant="accent">
            <CalendarCheck size={18} />
            Book Appointment
          </Button>
          <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="outline">
            <MessageCircle size={18} />
            WhatsApp
          </Button>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {TRUST_BADGES.map((badge, index) => {
            const Icon = badgeIcons[index]
            return (
              <li
                key={badge}
                className="glass-dark rounded-2xl px-3 py-4 text-center text-white shadow-soft"
              >
                <Icon className="mx-auto mb-2 text-accent" size={20} aria-hidden="true" />
                <span className="text-xs font-semibold tracking-wide sm:text-[13px]">{badge}</span>
              </li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
