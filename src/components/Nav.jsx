import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { HeartPulse, Menu, X } from 'lucide-react'

const links = [
  ['/', 'Início'],
  ['/solucao', 'Solução'],
  ['/implantacao', 'Implantação'],
  ['/operacao', 'Operação e segurança'],
  ['/equipe', 'Equipe'],
  ['/proposta', 'Proposta'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26 })

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><HeartPulse size={26} strokeWidth={1.8} /></span>
          <span className="brand-name">Med<b>Fluxo</b></span>
        </Link>
        <button className="nav-toggle" aria-label="Abrir menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <motion.div className="progress" style={{ scaleX }} />
    </nav>
  )
}
