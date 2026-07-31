import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { FadeIn } from '../ui/FadeIn'
import { SectionHeading } from '../ui/SectionHeading'

export function FAQ() {
  const { t, lang } = useLanguage()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.faq.eyebrow}
          title={t.faq.title}
          description={t.faq.description}
        />

        <div className="space-y-3" key={lang}>
          {t.faq.items.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <FadeIn key={faq.question} delay={index * 0.04}>
                <div className="overflow-hidden rounded-2xl border border-primary/10 bg-bg shadow-soft">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span className="font-semibold text-secondary">{faq.question}</span>
                    <ChevronDown
                      className={`shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      size={20}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p className="border-t border-primary/8 px-5 pt-3 pb-5 text-sm leading-relaxed text-text/70">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
