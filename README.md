# MedFluxo · Proposta Pregão 24/2026

Site front-end (React 18 + Vite + framer-motion), sem back-end.

## Rodar
```
npm install
npm run dev       # desenvolvimento em http://localhost:5173
npm run build     # gera a pasta dist/ (estático, pode ser hospedado em qualquer lugar)
npm run preview   # serve o dist/
```

## Estrutura
- `src/data.js` – fonte única dos números e textos (preços, SLA, fases, equipe)
- `src/pages/` – Home, Solução, Implantação, Operação, Equipe, Proposta
- `src/components/` – Nav, Footer, Reveal, CountUp, Ecg, Icon, PageHero
- `src/styles.css` – tokens de cor e estilos (tema escuro)

Rotas com HashRouter e `base: './'`, funciona em hospedagem estática sem configuração.
