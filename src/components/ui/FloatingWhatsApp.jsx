import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../../data/content'

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Luxe Dental Clinic on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105 hover:brightness-110 md:right-6 md:bottom-6"
    >
      <MessageCircle size={26} />
    </a>
  )
}
