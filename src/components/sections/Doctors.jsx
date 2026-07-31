import { DOCTOR_IMAGES } from '../../data/content'
import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function Doctors() {
  const { t } = useLanguage()

  return (
    <section id="doctors" className="gradient-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.doctors.eyebrow}
          title={t.doctors.title}
          description={t.doctors.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {t.doctors.items.map((doctor, index) => (
            <FadeIn key={doctor.name} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={DOCTOR_IMAGES[index]}
                    alt={doctor.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 start-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                    {doctor.experience}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-secondary">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-primary uppercase">
                    {doctor.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-text/70">{doctor.bio}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
