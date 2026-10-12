import { motion } from 'framer-motion'

// Linha de batimento cardíaco que se desenha em loop.
export default function Ecg({ className = '' }) {
  const d = 'M0 60H380L410 60L440 12L480 108L520 32L548 60H1100'
  return (
    <svg className={className} viewBox="0 0 1100 120" role="img" aria-label="Linha de batimento cardíaco" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ecg-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0091FC" stopOpacity="0.15" />
          <stop offset="0.5" stopColor="#7CC4FF" />
          <stop offset="1" stopColor="#0091FC" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <path d={d} fill="none" stroke="#0091FC" strokeOpacity="0.25" strokeWidth="14" strokeLinejoin="round" />
      <motion.path
        d={d}
        fill="none"
        stroke="url(#ecg-grad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  )
}
