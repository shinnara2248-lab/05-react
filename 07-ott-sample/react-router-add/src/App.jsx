import { Route, Routes } from 'react-router-dom'
// 기존 코드 삭제
// import "./App.scss"
import "./App.scss"
import { Layout } from './layout/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { ContactUs } from './pages/ContactUs'
import { Portfolio } from './pages/Portfolio'
import { Skills } from './pages/Skills'
import { NotFound } from './pages/NotFound'
import { PortfolioDetail } from './pages/PortfolioDetail'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="portfolio/:id" element={<PortfolioDetail />} />

          <Route path="skills" element={<Skills />} />
          <Route path="contactus" element={<ContactUs />} />

          <Route path="notfound" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
