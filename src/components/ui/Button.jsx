import { motion } from 'framer-motion'

const variants = {
  primary:
    'gradient-cta text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5',
  secondary:
    'bg-white text-primary border border-primary/15 hover:border-primary/30 hover:bg-bg',
  accent:
    'bg-accent text-secondary font-semibold hover:brightness-105 shadow-soft',
  ghost:
    'bg-white/15 text-white border border-white/25 backdrop-blur-md hover:bg-white/25',
  outline:
    'border border-white/40 text-white hover:bg-white/10',
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  ariaLabel,
  target,
  rel,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
        className={classes}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
