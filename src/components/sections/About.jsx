import { Microscope } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="gradient-section relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
              alt={t.about.imageAlt}
              className="h-[420px] w-full object-cover md:h-[520px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
            <div className="glass absolute end-4 bottom-4 start-4 rounded-2xl p-4 sm:start-auto sm:w-64">
              <p className="font-display text-2xl font-semibold text-secondary">{t.about.locationTitle}</p>
              <p className="mt-1 text-sm text-text/70">{t.about.locationText}</p>
            </div>
          </div>
        </FadeIn>

        <div>
          <SectionHeading
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
          <FadeIn delay={0.1}>
            <p className="mb-8 text-base leading-relaxed text-text/70 md:text-lg">{t.about.more}</p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {t.about.stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={0.08 * index}>
                <article className="glass rounded-3xl p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  {stat.icon ? (
                    <Microscope className="mb-2 text-primary" size={28} aria-hidden="true" />
                  ) : (
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                      className="font-display text-3xl font-semibold text-primary md:text-4xl"
                    />
                  )}
                  <p className="mt-1 text-sm font-medium text-secondary/80">{stat.label}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
