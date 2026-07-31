import { useState } from 'react'
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, TREATMENTS, WHATSAPP_URL } from '../../data/content'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  treatment: '',
  date: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" className="gradient-section py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Book Your Appointment"
          description="Reach our Al Hudaiba clinic by phone or WhatsApp, or send a request and our team will confirm your preferred time."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[2rem] bg-gradient-to-br from-secondary to-primary p-8 text-white shadow-lift md:p-10">
              <h3 className="font-display text-3xl font-semibold">Visit Luxe Dental Clinic</h3>
              <p className="mt-3 text-white/75">
                Premium private dentistry in a calm, modern setting — conveniently located in Al Hudaiba, Dubai.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">Address</p>
                    <p className="mt-1 leading-relaxed text-white/90">
                      2B Street,
                      <br />
                      Al Hudaiba,
                      <br />
                      Dubai,
                      <br />
                      United Arab Emirates
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">Phone</p>
                    <a href={PHONE_TEL} className="mt-1 block text-lg font-semibold hover:underline">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Clock3 size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">Working Hours</p>
                    <div className="mt-1 space-y-1 text-white/90">
                      <p>Sunday–Thursday: 10:00 AM – 7:00 PM</p>
                      <p>Saturday: 10:00 AM – 3:00 PM</p>
                      <p>Closed Friday</p>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={PHONE_TEL} variant="accent">
                  <Phone size={18} />
                  Call Now
                </Button>
                <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="outline">
                  <MessageCircle size={18} />
                  WhatsApp
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-[2rem] p-6 shadow-lift md:p-8"
              aria-label="Appointment request form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Name</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    autoComplete="name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Phone</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+971 ..."
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    autoComplete="tel"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    autoComplete="email"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Treatment Needed</span>
                  <select
                    required
                    name="treatment"
                    value={form.treatment}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  >
                    <option value="" disabled>
                      Select treatment
                    </option>
                    {TREATMENTS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Preferred Date</span>
                  <input
                    required
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-secondary">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell us briefly about your concern or goals"
                    className="w-full resize-y rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                </label>
              </div>

              <Button type="submit" className="mt-6 w-full sm:w-auto">
                Submit Appointment Request
              </Button>

              {submitted ? (
                <p className="mt-4 text-sm font-medium text-primary" role="status">
                  Thank you. Your request has been received. Our team will contact you shortly to confirm.
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
