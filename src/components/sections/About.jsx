import { Microscope } from 'lucide-react'
import { STATS } from '../../data/content'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="gradient-section relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
              alt="Dentists consulting with a patient at Luxe Dental Clinic"
              className="h-[420px] w-full object-cover md:h-[520px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
            <div className="glass absolute right-4 bottom-4 left-4 rounded-2xl p-4 sm:left-auto sm:w-64">
              <p className="font-display text-2xl font-semibold text-secondary">Al Hudaiba, Dubai</p>
              <p className="mt-1 text-sm text-text/70">Premium private dental care in the heart of the city.</p>
            </div>
          </div>
        </FadeIn>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About the Clinic"
            title="Welcome to Luxe Dental Clinic"
            description="Luxe Dental Clinic is committed to providing comprehensive dental care using modern technology and personalized treatment plans."
          />
          <FadeIn delay={0.1}>
            <p className="mb-8 text-base leading-relaxed text-text/70 md:text-lg">
              Located in Al Hudaiba, Dubai, the clinic offers preventive, restorative, cosmetic, and implant
              dentistry for patients of all ages. From routine checkups to advanced smile transformations, every
              visit is guided by comfort, clarity, and clinical excellence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, index) => (
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
