import {
  Activity,
  Award,
  Brush,
  Clock,
  HeartHandshake,
  Microscope,
  ShieldCheck,
  Gem,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
  Zap,
} from 'lucide-react'

export const WHATSAPP_URL = 'https://wa.me/97143580885'
export const PHONE_TEL = 'tel:+97143580885'
export const PHONE_DISPLAY = '+971 4 358 0885'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const TRUST_BADGES = [
  '20+ Years Experience',
  'Advanced Dental Care',
  'Friendly Specialists',
  'Modern Equipment',
]

export const STATS = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Happy Patients' },
  { value: 4.6, suffix: '★', label: 'Google Rating', decimals: 1 },
  { value: null, label: 'Modern Equipment', icon: true },
]

export const SERVICES = [
  {
    title: 'General Dentistry',
    description:
      'Complete oral health exams, fillings, and ongoing care designed to keep every smile strong and confident.',
    icon: Stethoscope,
  },
  {
    title: 'Dental Checkups',
    description:
      'Thorough assessments that catch concerns early, with clear treatment plans tailored to your lifestyle.',
    icon: Activity,
  },
  {
    title: 'Dental Implants',
    description:
      'Permanent tooth replacement using advanced implantology for a natural look, feel, and lasting bite strength.',
    icon: Gem,
  },
  {
    title: 'Cosmetic Dentistry',
    description:
      'Whitening, bonding, and smile refinements that elevate aesthetics while protecting healthy enamel.',
    icon: Sparkles,
  },
  {
    title: 'Smile Design',
    description:
      'Digital smile planning that balances facial harmony, tooth shape, and shade for a polished result.',
    icon: Smile,
  },
  {
    title: 'Root Canal Treatment',
    description:
      'Precise endodontic care that relieves pain, saves natural teeth, and restores comfortable function.',
    icon: Syringe,
  },
  {
    title: 'Teeth Cleaning',
    description:
      'Professional scaling and polishing that removes plaque buildup and leaves your smile refreshed.',
    icon: Brush,
  },
  {
    title: 'Dental Veneers',
    description:
      'Custom porcelain veneers that correct chips, gaps, and discoloration with a luminous, natural finish.',
    icon: Award,
  },
  {
    title: 'Emergency Dental Care',
    description:
      'Prompt support for sudden pain, broken teeth, or urgent concerns when you need a dentist quickly.',
    icon: Zap,
  },
]

export const DOCTORS = [
  {
    name: 'Dr. Tamim Tulimat',
    role: 'Endodontist & Implantologist',
    experience: '20 Years Experience',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
    bio: 'Specializes in complex root canal therapy and implant-supported restorations with a calm, patient-first approach.',
  },
  {
    name: 'Dr. Akram Mirgani',
    role: 'General Dentist',
    experience: '8 Years Experience',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    bio: 'Focused on preventive and restorative dentistry, helping families maintain healthy smiles at every stage of life.',
  },
  {
    name: 'Dr. Sampada Bakshi',
    role: 'General Dentist',
    experience: '8 Years Experience',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    bio: 'Known for gentle care and detailed cosmetic consultations that make every visit comfortable and clear.',
  },
]

export const WHY_CHOOSE = [
  {
    title: 'Experienced Dentists',
    description: 'A skilled clinical team with deep expertise across restorative, cosmetic, and implant dentistry.',
    icon: Users,
  },
  {
    title: 'Advanced Equipment',
    description: 'Modern diagnostic and treatment technology for precise, efficient, and comfortable procedures.',
    icon: Microscope,
  },
  {
    title: 'Comfortable Environment',
    description: 'A calm, refined clinic setting designed to put every patient at ease from the moment they arrive.',
    icon: HeartHandshake,
  },
  {
    title: 'Affordable Care',
    description: 'Transparent treatment options that balance premium quality with accessible pricing in Dubai.',
    icon: ShieldCheck,
  },
  {
    title: 'Personalized Treatment',
    description: 'Every plan is tailored to your oral health goals, timeline, and preferred level of care.',
    icon: Sparkles,
  },
  {
    title: 'Emergency Support',
    description: 'Priority attention for urgent dental concerns so relief and guidance are never far away.',
    icon: Clock,
  },
]

export const REVIEWS = [
  {
    name: 'Sara Al Mansoori',
    location: 'Dubai Marina',
    rating: 5,
    text: 'Exceptional care from start to finish. The clinic feels premium, the team is attentive, and my implant treatment was explained with complete clarity.',
  },
  {
    name: 'James Whitfield',
    location: 'Jumeirah',
    rating: 5,
    text: 'I visited for cosmetic veneers and could not be happier. The results look natural, and the whole experience felt polished and professional.',
  },
  {
    name: 'Fatima Rahman',
    location: 'Al Hudaiba',
    rating: 4,
    text: 'Dr. Tamim handled my root canal with great skill. Minimal discomfort, clear aftercare advice, and a genuinely welcoming clinic environment.',
  },
  {
    name: 'Omar Khalid',
    location: 'Downtown Dubai',
    rating: 5,
    text: 'Modern clinic, friendly specialists, and very thorough checkups. Booking was easy and the follow-up care has been excellent.',
  },
]

export const BEFORE_AFTER = [
  {
    title: 'Smile Makeover',
    caption: 'Veneers & whitening refinement',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Implant Restoration',
    caption: 'Natural-looking tooth replacement',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cosmetic Alignment',
    caption: 'Balanced, brighter smile design',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Professional Whitening',
    caption: 'Fresh, luminous enamel finish',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80',
  },
]

export const FAQS = [
  {
    question: 'Do I need an appointment?',
    answer:
      'We recommend booking an appointment so we can reserve dedicated time with the right specialist. Same-day visits may be available depending on schedule, and emergency cases are prioritized whenever possible.',
  },
  {
    question: 'Do you offer dental implants?',
    answer:
      'Yes. Our clinic provides comprehensive dental implant consultations and treatment, including planning, placement, and restoration for missing teeth with a natural, long-lasting result.',
  },
  {
    question: 'Do you provide cosmetic dentistry?',
    answer:
      'Absolutely. We offer whitening, veneers, smile design, and other cosmetic treatments crafted to enhance your smile while protecting long-term oral health.',
  },
  {
    question: 'How long does teeth whitening take?',
    answer:
      'In-clinic whitening typically takes about 60 to 90 minutes, depending on your enamel condition and desired shade. We will advise the safest approach during your consultation.',
  },
  {
    question: 'Do you accept emergency patients?',
    answer:
      'Yes. If you are experiencing sudden pain, trauma, or a broken tooth, contact us by phone or WhatsApp and we will do our best to see you as quickly as possible.',
  },
]

export const TREATMENTS = [
  'General Checkup',
  'Dental Implants',
  'Cosmetic Dentistry',
  'Smile Design',
  'Root Canal',
  'Teeth Cleaning',
  'Dental Veneers',
  'Emergency Care',
  'Other',
]
