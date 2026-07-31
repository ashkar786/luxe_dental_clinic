import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function MapSection() {
  return (
    <section id="map" className="bg-white py-16 md:py-20" aria-label="Clinic location map">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Located in Al Hudaiba, Dubai"
          description="Conveniently positioned for patients across Dubai seeking refined private dental care."
        />
        <FadeIn>
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 shadow-lift">
            <iframe
              title="Luxe Dental Clinic location on Google Maps"
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
