import { SERVICES } from '../../data/content'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="services" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Advanced Care for Every Smile"
          description="From preventive checkups to cosmetic transformations and implant dentistry, every treatment is delivered with precision and care."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={index * 0.05}>
                <article className="group h-full rounded-3xl border border-primary/8 bg-bg p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-secondary">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text/70">{service.description}</p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
