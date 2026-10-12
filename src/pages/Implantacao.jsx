import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon, { Badge } from '../components/Icon.jsx'
import { phases, switchRules } from '../data.js'

export default function Implantacao() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
      <PageHero icon="clock" eyebrow="Plano de implantação" title="4 fases. 60 dias." lead="Implantamos, migramos os dados, treinamos todas as unidades e colocamos o sistema em produção em até 60 dias corridos após a ordem de serviço, conforme o item 6.47 do Termo de Referência." />

      <section className="section">
        <div className="container">
          <div className="timeline" ref={ref}>
            <div className="timeline-rail"><motion.div className="timeline-fill" style={{ height }} /></div>
            {phases.map((p, i) => (
              <Reveal key={p.title} className="timeline-item" delay={0.05}>
                <div className="timeline-day">
                  <span className="day-label">Dia</span>
                  <span className="day-number">{p.day}</span>
                </div>
                <div className="timeline-dot"><Icon name={p.icon} size={22} /></div>
                <div className="card card-hover timeline-card">
                  <p className="tag">Fase {i + 1}</p>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="muted">{p.text}</p>
                  <dl className="meta">
                    <div><dt>Entregável</dt><dd>{p.deliverable}</dd></div>
                    <div><dt>Responsável</dt><dd>{p.owner}</dd></div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Migração e treinamento</p><h2 className="h2">Dados íntegros, equipes preparadas</h2></Reveal>
          <div className="grid grid-2">
            <Reveal className="card">
              <Badge name="database" />
              <h3 className="card-title">Migração de dados</h3>
              <ul className="list checks">
                <li>Extração, higienização, carga e validação de prontuários, cadastros e Cartões SUS</li>
                <li>100% de integridade, com ferramentas de conferência nossas</li>
                <li>Cada lote passa por conferência independente</li>
                <li>Termo de Homologação assinado antes da virada</li>
              </ul>
            </Reveal>
            <Reveal className="card" delay={0.1}>
              <Badge name="cap" />
              <h3 className="card-title">Treinamento</h3>
              <ul className="list checks">
                <li>Médicos, enfermeiros, recepcionistas e gestores de toda a rede</li>
                <li>Presencial ou remoto síncrono, com calendário por unidade</li>
                <li>Material de apoio para cada perfil</li>
                <li>Listas de presença e certificados por unidade</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Regras da virada</p><h2 className="h2">Como protegemos a continuidade</h2></Reveal>
          <div className="grid grid-2">
            {switchRules.map((r, i) => (
              <Reveal key={r} delay={(i % 2) * 0.08} className="card compact">
                <p>{r}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
