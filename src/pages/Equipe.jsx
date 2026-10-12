import { motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { Badge } from '../components/Icon.jsx'
import { team, numbers } from '../data.js'

export default function Equipe() {
  const max = Math.max(...team.map((t) => t.hours))
  return (
    <>
      <PageHero icon="users" eyebrow="Equipe e responsabilidades" title="772 horas de equipe em 7 perfis" lead="Cada entregável do edital tem um responsável nomeado, e a equipe é dimensionada por fase, com reforço na virada de cada unidade." />

      <section className="section">
        <div className="container">
          <div className="grid grid-2 team-grid">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.08} className="card card-hover">
                <div className="card-head">
                  <Badge name={t.icon} />
                  <span className="hours"><CountUp to={t.hours} /> h</span>
                </div>
                <h3 className="card-title">{t.name}</h3>
                <p className="muted">{t.text}</p>
                <div className="bar"><motion.span initial={{ width: 0 }} whileInView={{ width: `${(t.hours / max) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} /></div>
              </Reveal>
            ))}
            <Reveal className="card card-hot total-card" delay={0.1}>
              <p className="tag">Total da implantação</p>
              <p className="big-number"><CountUp to={numbers.hours} /> h</p>
              <p>Gerência (60 h), implantação (300 h), migração (120 h), treinamento (240 h) e nuvem, integrações e LGPD (52 h).</p>
            </Reveal>
          </div>
          <Reveal className="note">Na operação, o suporte 24x7 é feito por escala de analistas N1 e N2, com desenvolvedores de sobreaviso para chamados críticos e altos. As horas técnicas e de customização sob demanda são executadas sempre a partir de uma ordem de serviço aprovada pela SEMUS.</Reveal>
        </div>
      </section>
    </>
  )
}
