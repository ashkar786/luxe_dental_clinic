import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../data/content'
import { useLanguage } from '../../i18n/LanguageContext'

export function FloatingWhatsApp() {
  const { t, isRTL } = useLanguage()

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      className={`fixed bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 hover:brightness-110 md:bottom-6 ${
        isRTL ? 'left-5 md:left-6' : 'right-5 md:right-6'
      }`}
    >
      <MessageCircle size={26} />
    </a>
  )
}
