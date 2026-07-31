import { DOCTOR_IMAGES } from '../../data/content'
import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

function DoctorCard({ doctor, image }) {
  return (
    <article
      tabIndex={0}
      className="group relative h-72 overflow-hidden rounded-2xl bg-secondary shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <img
        src={image}
        alt={doctor.name}
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 group-focus-within:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/35 to-secondary/10 transition-opacity duration-300 group-hover:from-secondary/95 group-hover:via-secondary/75 group-focus-within:from-secondary/95 group-focus-within:via-secondary/75" />

      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <span className="inline-block rounded-full bg-primary px-3 py-1 text-[10px] font-semibold text-white shadow-md ring-1 ring-white/20">
          {doctor.experience}
        </span>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{doctor.name}</h3>

        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:mt-2 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
          <div className="overflow-hidden">
            <p className="text-[11px] font-semibold leading-snug tracking-wide text-accent uppercase">
              {doctor.role}
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/85">{doctor.bio}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.doctors.items.map((doctor, index) => (
            <FadeIn key={doctor.name} delay={index * 0.06} className="h-full">
              <DoctorCard doctor={doctor} image={DOCTOR_IMAGES[index]} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
