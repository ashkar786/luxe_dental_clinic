import { motion } from 'framer-motion'

export function SectionHeading({ eyebrow, title, description, light = false, align = 'center' }) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 flex max-w-3xl flex-col gap-3 ${alignment}`}
    >
      {eyebrow ? (
        <span
          className={`text-xs font-semibold tracking-[0.22em] uppercase ${
            light ? 'text-accent' : 'text-primary'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-4xl leading-tight font-semibold md:text-5xl ${
          light ? 'text-white' : 'text-secondary'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed md:text-lg ${light ? 'text-white/80' : 'text-text/70'}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}
