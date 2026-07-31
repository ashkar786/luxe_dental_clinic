import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

export function AnimatedCounter({ value, suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 40, stiffness: 90 })
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString())
    })
    return unsubscribe
  }, [spring, decimals])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}
