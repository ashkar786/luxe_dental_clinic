import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'

export function Loader() {
  const { t } = useLanguage()

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lift"
          animate={{ scale: [1, 1.06, 1], rotate: [0, 4, -4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <path
              d="M16 4c-3.2 0-5.8 2-6.9 5.1C8.1 12.4 6 17.4 6 21.8c0 3.4 1.1 5.8 2.7 7.2 1.1 1 2.4 1.4 3.6.9.9-.3 1.6-1.1 2.2-2.3.6 1.2 1.3 2 2.2 2.3 1.2.5 2.5.1 3.6-.9 1.6-1.4 2.7-3.8 2.7-7.2 0-4.4-2.1-9.4-3.1-12.7C21.8 6 19.2 4 16 4z"
              fill="white"
            />
          </svg>
        </motion.div>
        <p className="font-display text-2xl font-semibold text-secondary">{t.hero.brand}</p>
        <p className="text-xs tracking-[0.18em] text-primary uppercase">{t.loader}</p>
      </div>
    </motion.div>
  )
}
