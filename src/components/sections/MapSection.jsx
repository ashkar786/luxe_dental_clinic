import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function MapSection() {
  const { t } = useLanguage()

  return (
    <section id="map" className="bg-white py-16 md:py-20" aria-label={t.map.title}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.map.eyebrow}
          title={t.map.title}
          description={t.map.description}
        />
        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 shadow-lift">
            <iframe
              title={t.map.iframeTitle}
              src="https://maps.google.com/maps?q=Al%20Hudaiba%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="h-[360px] w-full border-0 md:h-[460px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
