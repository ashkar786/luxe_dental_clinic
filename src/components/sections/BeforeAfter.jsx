import { GALLERY_IMAGES } from '../../data/content'
import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function BeforeAfter() {
  const { t } = useLanguage()

  return (
    <section id="gallery" className="gradient-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          description={t.gallery.description}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.gallery.items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <figure className="group overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={GALLERY_IMAGES[index]}
                    alt={`${item.title} — ${item.caption}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 via-secondary/10 to-transparent opacity-90" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="font-display text-xl font-semibold">{item.title}</p>
                    <p className="text-xs text-white/80">{item.caption}</p>
                  </figcaption>
                </div>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
