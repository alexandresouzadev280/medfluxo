import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import Icon, { Badge } from '../components/Icon.jsx'
import { sla, glosas, security } from '../data.js'

export default function Operacao() {
  return (
    <>
      <PageHero icon="chat" eyebrow="Operação, suporte e segurança" title="Suporte 24x7 com os prazos do edital" lead="Atendemos chamados 24 horas por dia, 7 dias por semana, inclusive feriados e fins de semana, com primeiro retorno em menos de 10 minutos e prazos de solução por severidade iguais aos do edital (item 7.1.3)." />

      <section className="section">
        <div className="container">
          <Reveal><h2 className="h2">Severidades e prazos</h2></Reveal>
          <Reveal className="table-wrap">
            <table className="table">
              <thead><tr><th>Severidade</th><th>Impacto</th><th>Início do atendimento</th><th>Solução ou contorno</th></tr></thead>
              <tbody>
                {sla.map((s) => (
                  <tr key={s.level}>
                    <td><span className={`sev sev-${s.tone}`}>{s.level}</span></td>
                    <td>{s.example}</td>
                    <td className="nowrap">{s.start}</td>
                    <td className="nowrap"><b>{s.fix}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <div className="grid grid-3">
            <Reveal className="card"><Badge name="activity" /><p className="big-number"><CountUp to={99.5} decimals={1} suffix="%" /></p><p className="card-title">Disponibilidade mínima por mês</p><p className="muted">No máximo 3 h 36 min de indisponibilidade em um mês de 30 dias. Manutenções avisadas com 48 horas de antecedência, fora do horário de expediente.</p></Reveal>
            <Reveal className="card" delay={0.1}><Badge name="clock" /><p className="big-number">&lt; <CountUp to={10} /> min</p><p className="card-title">Primeiro retorno</p><p className="muted">Canais: telefone, aplicativo de mensagens e acesso remoto (item 6.46). Plantão de analistas N1 e N2, com desenvolvedores de sobreaviso (N3).</p></Reveal>
            <Reveal className="card" delay={0.2}><Badge name="verified" /><p className="big-number">IMR</p><p className="card-title">Relatório mensal de SLA</p><p className="muted">O gerente de projeto escala os chamados críticos e entrega todo mês o relatório de SLA e IMR para o atesto das faturas.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Glosas aceitas (item 8.1.3), já consideradas no preço</p><h2 className="h2">Compromisso com a disponibilidade</h2></Reveal>
          <Reveal className="table-wrap">
            <table className="table">
              <thead><tr><th>Descumprimento</th><th>Desconto sobre a parcela mensal</th></tr></thead>
              <tbody>{glosas.map(([a, b]) => <tr key={a}><td>{a}</td><td><b>{b}</b></td></tr>)}</tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal><p className="eyebrow">Hospedagem, segurança e LGPD</p><h2 className="h2">Nuvem no Brasil, dados protegidos</h2>
            <p className="lead">O sistema roda 100% em nuvem, sem servidor local (itens 5.1.5 e 5.3.21), e trata os dados de saúde conforme a Lei nº 13.709/2018.</p></Reveal>
          <div className="grid grid-3">
            {security.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className="card card-hover">
                <Badge name={s.icon} />
                <h3 className="card-title">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="note"><Icon name="lock" size={20} /> Um encarregado de dados e segurança acompanha o contrato, mantém os termos de confidencialidade da equipe e revisa os acessos todo mês.</Reveal>
        </div>
      </section>
    </>
  )
}
