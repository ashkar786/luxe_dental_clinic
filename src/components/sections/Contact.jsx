import { useState } from 'react'
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from '../../data/content'
import { useLanguage } from '../../i18n/LanguageContext'
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
  const { t } = useLanguage()
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const f = t.contact.form

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
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-[2rem] bg-gradient-to-br from-secondary to-primary p-8 text-white shadow-lift md:p-10">
              <h3 className="font-display text-3xl font-semibold">{t.contact.visitTitle}</h3>
              <p className="mt-3 text-white/75">{t.contact.visitText}</p>

              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <MapPin size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                      {t.contact.addressLabel}
                    </p>
                    <p className="mt-1 leading-relaxed text-white/90">
                      {t.contact.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Phone size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                      {t.contact.phoneLabel}
                    </p>
                    <a href={PHONE_TEL} className="mt-1 block text-lg font-semibold hover:underline" dir="ltr">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent">
                    <Clock3 size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                      {t.contact.hoursLabel}
                    </p>
                    <div className="mt-1 space-y-1 text-white/90">
                      {t.contact.hours.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={PHONE_TEL} variant="accent">
                  <Phone size={18} />
                  {t.callNow}
                </Button>
                <Button href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" variant="outline">
                  <MessageCircle size={18} />
                  {t.whatsapp}
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-[2rem] p-6 shadow-lift md:p-8"
              aria-label={t.contact.title}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">{f.name}</span>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder={f.namePh}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    autoComplete="name"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">{f.phone}</span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    placeholder={f.phonePh}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    autoComplete="tel"
                    dir="ltr"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-secondary">{f.email}</span>
                  <input
                    required
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder={f.emailPh}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    autoComplete="email"
                    dir="ltr"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">{f.treatment}</span>
                  <select
                    required
                    name="treatment"
                    value={form.treatment}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  >
                    <option value="" disabled>
                      {f.treatmentPh}
                    </option>
                    {t.contact.treatments.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block text-sm font-semibold text-secondary">{f.date}</span>
                  <input
                    required
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                    dir="ltr"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-secondary">{f.message}</span>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    placeholder={f.messagePh}
                    className="w-full resize-y rounded-2xl border border-primary/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-accent"
                  />
                </label>
              </div>

              <Button type="submit" className="mt-6 w-full sm:w-auto">
                {f.submit}
              </Button>

              {submitted ? (
                <p className="mt-4 text-sm font-medium text-primary" role="status">
                  {f.success}
                </p>
              ) : null}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
