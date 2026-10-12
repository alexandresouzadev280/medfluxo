import { Link } from 'react-router-dom'
import latina from '../assets/latina-mark.png'
import { company, tender } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-title">Med<b>Fluxo</b></p>
          <p className="muted">Sistema de gestão da saúde pública, proposto para o {tender.number} da {tender.city}.</p>
        </div>
        <div>
          <p className="footer-head">Proponente</p>
          <p className="muted">{company.name}<br />CNPJ {company.cnpj}<br />{company.address}<br />{company.phone}</p>
        </div>
        <div>
          <p className="footer-head">Navegação</p>
          <ul className="footer-links">
            <li><Link to="/solucao">Solução</Link></li>
            <li><Link to="/implantacao">Implantação</Link></li>
            <li><Link to="/operacao">Operação e segurança</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
            <li><Link to="/proposta">Proposta e preços</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-credit">
        <img src={latina} alt="Latina Trade" width="36" height="30" />
        <span>Prova técnica · Latina Trade Tecnologia · Transformando Governos e Empresas. Conectando Pessoas.</span>
      </div>
    </footer>
  )
}
