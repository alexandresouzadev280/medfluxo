import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Solucao from './pages/Solucao.jsx'
import Implantacao from './pages/Implantacao.jsx'
import Operacao from './pages/Operacao.jsx'
import Equipe from './pages/Equipe.jsx'
import Proposta from './pages/Proposta.jsx'

function Page({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.main>
  )
}

export default function App() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <motion.div className="orb orb-a" aria-hidden="true" animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="orb orb-b" aria-hidden="true" animate={{ y: [0, -40, 0], x: [0, 25, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/solucao" element={<Page><Solucao /></Page>} />
          <Route path="/implantacao" element={<Page><Implantacao /></Page>} />
          <Route path="/operacao" element={<Page><Operacao /></Page>} />
          <Route path="/equipe" element={<Page><Equipe /></Page>} />
          <Route path="/proposta" element={<Page><Proposta /></Page>} />
          <Route path="*" element={<Page><Home /></Page>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}
