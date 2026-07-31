import { Star } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

function Stars({ count }) {
  return (
    <div className="flex gap-1" aria-label={`${count} / 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < count ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export function Reviews() {
  const { t } = useLanguage()

  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          description={t.reviews.description}
        />

        <FadeIn>
          <div className="mx-auto mb-12 flex max-w-md flex-col items-center rounded-[2rem] border border-primary/10 bg-bg px-8 py-7 text-center shadow-soft">
            <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
              {t.reviews.google}
            </p>
            <div className="mt-3 flex items-center gap-2 text-amber-400" aria-hidden="true">
              <Star className="fill-amber-400" size={22} />
              <Star className="fill-amber-400" size={22} />
              <Star className="fill-amber-400" size={22} />
              <Star className="fill-amber-400" size={22} />
              <Star className="fill-amber-400/40 text-amber-400" size={22} />
            </div>
            <p className="mt-3 font-display text-4xl font-semibold text-secondary">4.6 / 5</p>
            <p className="mt-1 text-sm text-text/65">{t.reviews.basedOn}</p>
          </div>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-2">
          {t.reviews.items.map((review, index) => (
            <FadeIn key={review.name} delay={index * 0.06}>
              <blockquote className="glass flex h-full flex-col rounded-3xl p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <Stars count={review.rating} />
                <p className="mt-4 flex-1 text-base leading-relaxed text-text/80">“{review.text}”</p>
                <footer className="mt-5 border-t border-primary/10 pt-4">
                  <cite className="not-italic">
                    <span className="block font-semibold text-secondary">{review.name}</span>
                    <span className="text-sm text-text/60">{review.location}</span>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
