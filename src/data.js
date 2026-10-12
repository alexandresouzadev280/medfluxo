// Todos os números do site vêm daqui, para ficarem iguais à proposta e à apresentação.

export const company = {
  product: 'MedFluxo',
  name: 'Medfluxo Saúde Digital Ltda.',
  cnpj: '34.821.906/0001-99',
  representative: 'Alexandre Souza Gonçalves',
  address: 'Rua Dr. Hélio Pimenta Garcia, 480, sala 302, Santa Mônica, Uberlândia/MG, CEP 38408-000',
  phone: '(34) 3236-5471',
  date: '12 de outubro de 2026',
}

export const tender = {
  number: 'Pregão Eletrônico 24/2026',
  city: 'Prefeitura de Jaguariaíva/PR',
  secretariat: 'Secretaria Municipal de Saúde (SEMUS)',
}

export const numbers = {
  price: 295747.96,
  ceiling: 328608.45,
  days: 60,
  availability: 99.5,
  hours: 772,
  validityDays: 90,
  warrantyMonths: 12,
}

export const fmtBRL = (v) =>
  v.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export const network = [
  { icon: 'cross', value: 13, label: 'Unidades de Atenção Primária' },
  { icon: 'hospital', value: 1, label: 'Hospital Municipal, urgência 24h' },
  { icon: 'heart', value: 1, label: 'Clínica de Fisioterapia' },
  { icon: 'home', value: 1, label: 'Secretaria Municipal de Saúde' },
]

export const moduleGroups = [
  { icon: 'heart', title: 'Atendimento clínico', items: ['Atendimento e prontuário eletrônico', 'Odontologia', 'Saúde da Família', 'Teleconsulta'] },
  { icon: 'hospital', title: 'Hospital', items: ['Centro de cirurgias', 'Agência transfusional', 'C.M.E. (central de materiais e esterilização)'] },
  { icon: 'cross', title: 'Apoio ao cuidado', items: ['Central de medicamentos', 'Laboratório', 'Transporte e TFD', 'Atendimento social'] },
  { icon: 'search', title: 'Acesso e regulação', items: ['Central de agendamentos e regulação', 'Serviços de saúde para uso do cidadão (portal web)'] },
  { icon: 'chart', title: 'Gestão e vigilância', items: ['Indicadores de saúde', 'Criação de relatórios', 'Controle epidemiológico', 'Aplicações de vacinas'] },
  { icon: 'verified', title: 'Faturamento e transparência', items: ['Faturamento', 'Certificações digitais', 'Portal Transparência'] },
]

export const apps = [
  { icon: 'users', name: 'Cidadão', platform: 'Android e iOS', text: 'Agendamento pelo próprio usuário, com o brasão do município (item 6.40).' },
  { icon: 'chart', name: 'Gestor da saúde', platform: 'Android e iOS', text: 'Indicadores atualizados do dia e atualização automática de versão (item 6.41).' },
  { icon: 'search', name: 'Agente de combate às endemias', platform: 'Android, uso offline', text: 'Acesso só à área do agente, com vistorias e registro fotográfico (item 6.39).' },
  { icon: 'home', name: 'Saúde da Família', platform: 'Android', text: 'Visitas domiciliares conforme e-SUS 4.1.12 ou superior, com geolocalização e assinatura (item 6.42).' },
]

export const architecture = [
  { icon: 'users', tag: 'Usuários', title: 'Web em React', text: 'e 4 aplicativos nativos' },
  { icon: 'code', tag: 'API', title: '.NET', text: 'Regras de negócio e integrações', hot: true },
  { icon: 'database', tag: 'Dados', title: 'PostgreSQL', text: 'Open source, com réplica' },
  { icon: 'globe', tag: 'Externo', title: 'Ministério da Saúde', text: 'e-SUS, CNES, RNDS e outros' },
]

export const integrations = [
  { icon: 'activity', name: 'e-SUS/PEC', text: 'Atenção Primária' },
  { icon: 'home', name: 'CNES', text: 'Cadastro de estabelecimentos' },
  { icon: 'database', name: 'SIHD', text: 'Informações hospitalares' },
  { icon: 'search', name: 'SISREG', text: 'Regulação de acesso' },
  { icon: 'globe', name: 'RNDS', text: 'Base nacional do Cartão SUS' },
  { icon: 'book', name: 'SIGTAP', text: 'Tabela de procedimentos' },
  { icon: 'cross', name: 'BNAFAR', text: 'Assistência farmacêutica' },
  { icon: 'verified', name: 'SI-PNI', text: 'Programa de imunização' },
]

export const phases = [
  { icon: 'search', day: 10, title: 'Planejamento e parametrização', text: 'Levantamento de requisitos locais, mapeamento da infraestrutura de cada unidade, plano de migração e parametrização inicial da nuvem.', deliverable: 'Plano de Implantação e Migração aprovado pela SEMUS', owner: 'Gerente de projeto e analistas de implantação' },
  { icon: 'database', day: 25, title: 'Migração e homologação', text: 'Extração, carga, higienização e validação de prontuários, cadastros de cidadãos, Cartões SUS e históricos de atendimento.', deliverable: 'Relatório e Termo de Homologação e Validação do Banco de Dados', owner: 'Especialista em dados e migração' },
  { icon: 'cap', day: 45, title: 'Capacitação', text: 'Treinamento presencial e/ou remoto síncrono de médicos, enfermeiros, recepcionistas e gestores das 13 UBS, do hospital, da fisioterapia e da SEMUS.', deliverable: 'Listas de presença e certificados por unidade', owner: 'Instrutores' },
  { icon: 'bolt', day: 60, title: 'Operação assistida e virada', text: 'Entrada em produção com acompanhamento intensivo e descontinuação gradual do sistema legado.', deliverable: 'Termo de Recebimento Provisório da Implantação', owner: 'Toda a equipe de implantação' },
]

export const switchRules = [
  'O sistema legado só deixa de receber dados depois do Termo de Homologação da Migração de Dados, assinado pelo Coordenador de TI e pelo Gestor do Contrato (item 6.43.182).',
  'Fornecemos as ferramentas de extração e conferência para garantir 100% de integridade dos dados migrados (item 6.43.184).',
  'Nos 5 primeiros dias úteis da operação, técnicos in loco no Hospital Municipal Carolina Lupion e nas UBS urbanas (item 6.43.183).',
  'Os itens da prova de conceito fora dos 85% exigidos são atendidos em até 30 dias (item 5.3.15).',
]

export const sla = [
  { level: '1. Crítica', tone: 'crit', example: 'Indisponibilidade total ou de módulo essencial, como prontuário ou urgência do hospital', start: 'até 30 min', fix: 'até 2 h' },
  { level: '2. Alta', tone: 'high', example: 'Falha grave em funcionalidade relevante de uma UBS, sem contorno imediato', start: 'até 1 h', fix: 'até 4 h' },
  { level: '3. Média', tone: 'mid', example: 'Falha parcial em funcionalidade secundária, como um relatório', start: 'até 2 h', fix: 'até 12 h' },
  { level: '4. Baixa', tone: 'low', example: 'Dúvidas operacionais e pequenas incorreções de interface', start: 'até 4 h', fix: 'até 24 h' },
]

export const glosas = [
  ['Disponibilidade entre 99,0% e 99,49%', '2%'],
  ['Disponibilidade entre 98,0% e 98,99%', '5%'],
  ['Disponibilidade abaixo de 98,0%', '10% e processo administrativo'],
  ['Atraso na solução de chamado de severidade 1', '1% por hora excedente, até 15% por evento'],
  ['Atraso na solução de chamado de severidade 2', '0,5% por hora excedente, até 10% por evento'],
]

export const security = [
  { icon: 'cloud', title: 'Hospedagem', text: '100% em nuvem, centro de dados no Brasil, produção separada de testes e homologação.' },
  { icon: 'database', title: 'Backup', text: 'Cópia diária fora da produção. Perda máxima de 15 minutos e retorno em até 2 horas.' },
  { icon: 'key', title: 'Controle de acesso', text: 'Permissões por grupo, bloqueio por tentativas, encerramento por inatividade e biometria onde houver leitor.' },
  { icon: 'search', title: 'Auditoria', text: 'Registro de operador, operação, data, hora e espelho do dado incluído, alterado ou excluído.' },
  { icon: 'lock', title: 'Criptografia', text: 'Dados protegidos em trânsito e em repouso; senhas sempre armazenadas criptografadas.' },
  { icon: 'verified', title: 'LGPD', text: 'Uso só para a finalidade do contrato e comunicação de incidentes ao município em até 2 dias.' },
]

export const team = [
  { icon: 'trust', name: 'Gerente de projeto', hours: 60, text: 'Conduz as 4 fases e o cronograma de 60 dias, faz reuniões semanais de marcos com a SEMUS e fecha o relatório mensal de SLA e IMR.' },
  { icon: 'search', name: 'Analista de implantação', hours: 300, text: 'Levanta requisitos e infraestrutura de cada unidade, parametriza o sistema e acompanha a virada, com reforço nos 5 primeiros dias úteis.' },
  { icon: 'database', name: 'Especialista em dados e migração', hours: 120, text: 'Extrai, higieniza, carrega e valida os dados do legado. Cada lote passa por conferência independente, antes da homologação.' },
  { icon: 'cap', name: 'Instrutor', hours: 240, text: 'Treina médicos, enfermeiros, recepcionistas e gestores, de forma presencial ou remota síncrona, e prepara o material de apoio.' },
  { icon: 'code', name: 'Time de desenvolvimento do produto', hours: 24, text: 'Configura e testa as integrações, garante a qualidade de cada liberação e aplica as atualizações normativas. Mantém os 4 aplicativos nativos.' },
  { icon: 'cloud', name: 'DevOps e SRE', hours: 24, text: 'Provisiona a nuvem com réplica do banco, backup com teste de restauração e monitoramento. Atua em sobreaviso para incidentes.' },
  { icon: 'lock', name: 'Encarregado de dados e segurança', hours: 4, text: 'Cuida da LGPD, dos termos de confidencialidade, do controle de acessos e dos logs, e conduz o fluxo de comunicação de incidentes.' },
]

export const priceItems = [
  { n: 1, desc: 'Serviço de implantação e treinamento, Saúde', unit: 'UN', qty: 1, price: 18750.0, total: 18750.0, ref: 20833.33,
    note: 'Cobre as 772 horas de equipe, deslocamentos, diárias e material de treinamento. Cobrado uma única vez.' },
  { n: 2, desc: 'Licença de uso de sistema web, Saúde', unit: 'MÊS', qty: 12, price: 13650.0, total: 163800.0, ref: 15166.67,
    note: 'Todos os módulos e aplicativos, manutenção evolutiva e corretiva e atualizações normativas sem custo adicional.' },
  { n: 3, desc: 'Hospedagem em nuvem, atualização e suporte técnico remoto', unit: 'MÊS', qty: 12, price: 2265.83, total: 27189.96, ref: 2517.59,
    note: 'Nuvem, backup, monitoramento, suporte remoto 24x7 em três níveis, atualizações de versão e relatório mensal de SLA.' },
  { n: 4, desc: 'Horas técnicas sob demanda', unit: 'HORA', qty: 200, price: 220.16, total: 44032.0, ref: 244.62,
    note: 'Cobradas só quando solicitadas e aprovadas por ordem de serviço, até o limite de 200 horas.' },
  { n: 5, desc: 'Customização sob demanda', unit: 'HORA', qty: 200, price: 209.88, total: 41976.0, ref: 233.2,
    note: 'Horas de desenvolvimento, cobradas só com ordem de serviço aprovada, até o limite de 200 horas.' },
]

export const poc = [
  ['Implantação e migração em até 60 dias corridos', 'Plano em 4 fases com marcos', '1.5.1 e 6.47'],
  ['100% de integridade dos dados migrados', 'Ferramentas de extração e termo de homologação', '6.43.184'],
  ['Suporte 24x7, primeiro retorno em menos de 10 min', 'Plantão N1 e N2 com sobreaviso N3', '6.44 e 6.46'],
  ['Disponibilidade mínima de 99,5% ao mês', 'Nuvem com réplica e monitoramento 24x7', '8.1.1'],
  ['Banco de dados open source', 'PostgreSQL', '6.5.10'],
  ['Aplicativos nativos, sem tecnologia web', '4 aplicativos Android e iOS', '6.39 a 6.42'],
  ['Preço global dentro do teto', 'R$ 295.747,96, abaixo de R$ 328.608,45', '8.2'],
]

export const conditions = [
  ['Validade da proposta', '90 dias a partir da sessão pública'],
  ['Prazo de implantação', 'Até 60 dias corridos após a ordem de serviço'],
  ['Vigência do contrato', '12 meses, prorrogável (Lei nº 14.133/2021)'],
  ['Garantia', '12 meses a partir do recebimento definitivo'],
  ['Pagamento', 'Ordem bancária em até 30 dias após a liquidação, que ocorre em até 30 dias após a nota'],
  ['Reajuste', 'INPC/IBGE, após 1 ano da data do orçamento'],
  ['Tributos', 'Microempresa optante pelo Simples Nacional'],
]

export const risks = [
  ['Dados do sistema legado incompletos ou duplicados', 'Higienização, validação por amostragem e Termo de Homologação antes da virada'],
  ['Conectividade das unidades, em especial UBS rurais', 'Levantamento na Fase 1, contingência e aplicativo de endemias com uso offline'],
  ['Prazo de 60 dias para 4 fases', 'Marcos semanais com a SEMUS e aviso imediato ao fiscal do contrato'],
  ['Indisponibilidade em serviço crítico', 'Réplica do banco, backup, plantão 24x7 e recuperação em até 2 horas'],
  ['Novas obrigações do Ministério da Saúde', 'Atualizações legais e normativas sem ônus, incluídas na licença'],
]
