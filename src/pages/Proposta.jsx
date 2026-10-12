import { motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import Icon, { Badge } from '../components/Icon.jsx'
import { company, numbers, fmtBRL, priceItems, poc, conditions, risks } from '../data.js'

function Donut({ percent }) {
  const r = 70
  const c = 2 * Math.PI * r
  return (
    <svg viewBox="0 0 180 180" className="donut" role="img" aria-label={`${percent}% dos itens de cada módulo na demonstração`}>
      <circle cx="90" cy="90" r={r} fill="none" stroke="#0B2A6B" strokeWidth="20" />
      <motion.circle
        cx="90" cy="90" r={r} fill="none" stroke="#0091FC" strokeWidth="20" strokeLinecap="round"
        transform="rotate(-90 90 90)" strokeDasharray={c}
        initial={{ strokeDashoffset: c }} whileInView={{ strokeDashoffset: c * (1 - percent / 100) }}
        viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  )
}

export default function Proposta() {
  return (
    <>
      <PageHero icon="chart" eyebrow="Proposta de preços" title="R$ 295.747,96 em 12 meses" lead="Cerca de 10% abaixo do teto de R$ 328.608,45, com todos os valores unitários abaixo dos de referência do edital. O preço inclui encargos, tributos, deslocamentos, diárias e material de treinamento." />

      <section className="section">
        <div className="container">
          <Reveal className="price-hero">
            <span className="stat-label">Preço global</span>
            <strong><CountUp to={numbers.price} decimals={2} prefix="R$ " duration={2} /></strong>
            <span className="muted">Referência do edital: R$ {fmtBRL(numbers.ceiling)}</span>
          </Reveal>
          <Reveal className="table-wrap">
            <table className="table table-price">
              <thead><tr><th>Item</th><th>Descrição</th><th>Unid.</th><th className="r">Qtde</th><th className="r">Unitário (R$)</th><th className="r">Total (R$)</th><th className="r">Referência (R$)</th></tr></thead>
              <tbody>
                {priceItems.map((p) => (
                  <tr key={p.n}>
                    <td>{p.n}</td><td>{p.desc}</td><td>{p.unit}</td><td className="r">{p.qty}</td>
                    <td className="r">{fmtBRL(p.price)}</td><td className="r"><b>{fmtBRL(p.total)}</b></td><td className="r muted">{fmtBRL(p.ref)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot><tr><td colSpan="5">Preço global</td><td className="r"><b>{fmtBRL(numbers.price)}</b></td><td className="r muted">{fmtBRL(numbers.ceiling)}</td></tr></tfoot>
            </table>
          </Reveal>
          <div className="grid grid-3">
            {priceItems.map((p, i) => (
              <Reveal key={p.n} delay={(i % 3) * 0.08} className="card compact">
                <p className="tag">Item {p.n}</p>
                <h3 className="card-title">{p.desc}</h3>
                <p className="muted">{p.note}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="note">A planilha detalhada de composição de custos fica à disposição da SEMUS, caso seja solicitada na análise de exequibilidade (item 8.5.1).</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Prova de conceito e conformidade</p><h2 className="h2">Meta: superar os 85% exigidos</h2></Reveal>
          <div className="poc-grid">
            <Reveal className="card poc-card">
              <div className="donut-wrap"><Donut percent={85} /><span className="donut-label"><CountUp to={85} suffix="%" /></span></div>
              <p className="muted">dos itens de cada módulo na demonstração presencial na SEMUS; os 15% restantes em até 30 dias (item 5.3.15).</p>
            </Reveal>
            <Reveal className="table-wrap" delay={0.1}>
              <table className="table">
                <thead><tr><th>Exigência</th><th>Como atendemos</th><th>Item</th></tr></thead>
                <tbody>{poc.map(([a, b, c]) => <tr key={a}><td>{a}</td><td>{b}</td><td className="nowrap">{c}</td></tr>)}</tbody>
              </table>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="card">
              <div className="card-head"><Badge name="checkcircle" /><h3 className="card-title">Condições comerciais</h3></div>
              <dl className="meta stack">{conditions.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
            </Reveal>
            <Reveal className="card" delay={0.1}>
              <div className="card-head"><Badge name="warning" /><h3 className="card-title">Riscos e tratamento</h3></div>
              <dl className="meta stack">{risks.map(([a, b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl>
            </Reveal>
          </div>
          <Reveal className="note">Premissas: a SEMUS designa o Coordenador de TI e o Gestor do Contrato e dá acesso aos dados do sistema legado. Pedimos esclarecimento sobre dois valores divergentes no edital (total do item 2 e valor global do item 11.1).</Reveal>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <h2 className="h2">Obrigado</h2>
            <p className="lead">Estamos à disposição da Secretaria Municipal de Saúde de Jaguariaíva para esclarecimentos e para a demonstração do MedFluxo.</p>
            <p className="signature"><b>{company.representative}</b><br />{company.name} · CNPJ {company.cnpj}<br />Uberlândia/MG, {company.date}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
