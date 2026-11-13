import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Portfolio } from './pages/Portfolio'
import { Skill } from './pages/Skill'
import { Contact } from './pages/Contact'
import { PortfolioUiux } from './pages/PortfolioUiux'
import { PortfolioFront } from './pages/PortfolioFront'
import { ProducDetail } from './pages/ProducDetail'

function App() {
  return (
    <>
      {/* header */}
      {/* main */}
      {/* footer */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />}>
          <Route path='uiux' element={<PortfolioUiux />} />
          <Route path='front' element={<PortfolioFront />} />
        </Route>
        <Route path='skill' element={<Skill />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product/:id' element={<ProducDetail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
