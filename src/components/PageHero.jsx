import { motion } from 'framer-motion'
import { Badge } from './Icon.jsx'

export default function PageHero({ icon, eyebrow, title, lead }) {
  return (
    <header className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div className="eyebrow-row">
            <Badge name={icon} />
            <span className="eyebrow">{eyebrow}</span>
          </div>
          <h1 className="display">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </motion.div>
      </div>
    </header>
  )
}
