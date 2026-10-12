import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

// Número que "sobe" até o valor final quando entra na tela.
export default function CountUp({ to, decimals = 0, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    })
    return () => controls.stop()
  }, [inView, to, duration])

  const text = value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return (
    <span ref={ref}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}
