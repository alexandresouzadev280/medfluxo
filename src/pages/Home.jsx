import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Ecg from '../components/Ecg.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import Icon, { Badge } from '../components/Icon.jsx'
import { company, tender, numbers, network } from '../data.js'

const pillars = [
  { icon: 'cloud', title: 'Uma plataforma só', text: 'Web em React, API em .NET e PostgreSQL, em nuvem no Brasil, com 4 aplicativos nativos.' },
  { icon: 'globe', title: 'Conectada ao SUS', text: 'e-SUS/PEC, CNES, SIHD, SISREG, RNDS, SIGTAP, BNAFAR e SI-PNI.' },
  { icon: 'clock', title: 'Em produção em 60 dias', text: 'Planejamento, migração, capacitação e virada, com marcos semanais.' },
  { icon: 'trust', title: 'Suporte que não para', text: 'Atendimento 24x7, retorno em menos de 10 minutos e prazos do edital.' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <motion.p className="pill" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              Proposta comercial · {tender.number}
            </motion.p>
            <motion.h1 className="hero-title gradient-text" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              MedFluxo
            </motion.h1>
            <Ecg className="hero-ecg" />
            <motion.p className="lead" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              Toda a rede de saúde de Jaguariaíva em um único sistema: implantação em {numbers.days} dias e suporte 24x7.
            </motion.p>
            <motion.div className="cta-row" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <Link to="/proposta" className="btn btn-primary">Ver proposta e preços <ArrowRight size={20} /></Link>
              <Link to="/solucao" className="btn btn-ghost">Conhecer a solução</Link>
            </motion.div>
          </div>
          <motion.div className="hero-rings" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9 }} aria-hidden="true">
            <motion.span className="ring ring-1" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 5, repeat: Infinity }} />
            <span className="ring ring-2" />
            <motion.span className="hero-heart" animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
              <Icon name="heart" size={84} strokeWidth={1.5} />
            </motion.span>
          </motion.div>
        </div>
      </section>

      <section className="strip">
        <div className="container strip-grid">
          <Reveal className="stat stat-price">
            <span className="stat-label">Preço global · 12 meses</span>
            <strong><CountUp to={numbers.price} decimals={2} prefix="R$ " /></strong>
            <span className="muted">Cerca de 10% abaixo do teto de R$ 328.608,45</span>
          </Reveal>
          <Reveal className="stat" delay={0.1}><span className="stat-label">Implantação</span><strong><CountUp to={numbers.days} suffix=" dias" /></strong><span className="muted">da ordem de serviço à produção</span></Reveal>
          <Reveal className="stat" delay={0.2}><span className="stat-label">Disponibilidade</span><strong><CountUp to={numbers.availability} decimals={1} suffix="%" /></strong><span className="muted">por mês, em regime 24x7</span></Reveal>
          <Reveal className="stat" delay={0.3}><span className="stat-label">Suporte</span><strong>24x7</strong><span className="muted">retorno em menos de 10 minutos</span></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Entendimento da demanda</p><h2 className="h2">Um serviço que não pode parar</h2>
            <p className="lead">A {tender.secretariat} precisa de informação integrada em tempo real, envio de dados aos sistemas oficiais do SUS, migração sem perda e proteção dos dados de saúde.</p></Reveal>
          <div className="grid grid-4">
            {network.map((n, i) => (
              <Reveal key={n.label} delay={i * 0.08} className="card">
                <Badge name={n.icon} />
                <p className="big-number"><CountUp to={n.value} /></p>
                <p className="card-title">{n.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="note">O edital cita 13 unidades, mas lista 4 UBS urbanas e 5 rurais. Dimensionamos para 13 e confirmamos o número exato na Fase 1.</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Como respondemos</p><h2 className="h2">Quatro compromissos</h2></Reveal>
          <div className="grid grid-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="card card-hover">
                <Badge name={p.icon} />
                <h3 className="card-title">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2 className="h2">Pronto para a demonstração</h2>
            <p className="lead">{company.name} · {company.representative}</p>
            <div className="cta-row">
              <Link to="/proposta" className="btn btn-primary">Ver proposta completa <ArrowRight size={20} /></Link>
              <Link to="/equipe" className="btn btn-ghost">Conhecer a equipe</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
