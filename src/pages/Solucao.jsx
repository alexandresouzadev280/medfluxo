import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon, { Badge } from '../components/Icon.jsx'
import { architecture, moduleGroups, apps, integrations } from '../data.js'

export default function Solucao() {
  return (
    <>
      <PageHero icon="code" eyebrow="Solução" title="Uma plataforma, quatro aplicativos" lead="Interface em React, API em .NET e banco PostgreSQL (open source, como exige o item 6.5.10), com integração aos sistemas do Ministério da Saúde." />

      <section className="section">
        <div className="container">
          <Reveal><h2 className="h2">Arquitetura</h2></Reveal>
          <div className="flow">
            {architecture.map((a, i) => (
              <div className="flow-item" key={a.title}>
                <Reveal delay={i * 0.12} className={`card${a.hot ? ' card-hot' : ''}`}>
                  <Badge name={a.icon} hot={a.hot} />
                  <p className="tag">{a.tag}</p>
                  <h3 className="card-title">{a.title}</h3>
                  <p className="muted">{a.text}</p>
                </Reveal>
                {i < architecture.length - 1 && (
                  <motion.span className="flow-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.12 }}>
                    <ArrowRight size={28} />
                  </motion.span>
                )}
              </div>
            ))}
          </div>
          <Reveal className="chips">
            <span className="chip"><Icon name="cloud" size={20} /> Nuvem com centro de dados no Brasil</span>
            <span className="chip"><Icon name="lock" size={20} /> Backup diário</span>
            <span className="chip"><Icon name="activity" size={20} /> Monitoramento 24x7</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Módulos do Termo de Referência</p><h2 className="h2">20 módulos</h2></Reveal>
          <div className="grid grid-3">
            {moduleGroups.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 0.08} className="card card-hover">
                <Badge name={g.icon} />
                <h3 className="card-title">{g.title}</h3>
                <ul className="list">{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Aplicativos móveis</p><h2 className="h2">4 aplicativos nativos</h2>
            <p className="lead">O edital veda aplicativos baseados em tecnologia web (WebView, HTML, CSS). Por isso os aplicativos são nativos e independem da interface React.</p></Reveal>
          <div className="grid grid-4">
            {apps.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.08} className="card card-hover">
                <Badge name={a.icon} />
                <h3 className="card-title">{a.name}</h3>
                <p className="tag">{a.platform}</p>
                <p className="muted">{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Integrações</p><h2 className="h2">Conectado ao Ministério da Saúde</h2></Reveal>
          <div className="grid grid-4">
            {integrations.map((n, i) => (
              <Reveal key={n.name} delay={(i % 4) * 0.07} className="card card-hover compact">
                <Icon name={n.icon} size={30} />
                <h3 className="card-title">{n.name}</h3>
                <p className="muted">{n.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="note">Também SIH/SUS (AIH) e APAC, além da exportação de dados ao Ministério da Saúde exigida na prova de conceito (item 5.3.17).</Reveal>
        </div>
      </section>
    </>
  )
}
