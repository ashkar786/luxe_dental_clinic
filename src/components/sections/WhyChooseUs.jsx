import { Clock, HeartHandshake, Microscope, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

const ICONS = [Users, Microscope, HeartHandshake, ShieldCheck, Sparkles, Clock]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section id="why-us" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(62,198,255,0.25),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow={t.why.eyebrow}
          title={t.why.title}
          description={t.why.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item, index) => {
            const Icon = ICONS[index]
            return (
              <FadeIn key={item.title} delay={index * 0.05}>
                <article className="glass-dark h-full rounded-3xl p-6 text-white transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
