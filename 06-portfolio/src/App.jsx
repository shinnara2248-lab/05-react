import { Route, Routes } from 'react-router-dom'
import './App.css'
import "./App.scss"
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { ContactUs } from './pages/ContactUs'
import { Login } from './pages/Login'
import { Member } from './pages/Member'
import { Portfolio } from './pages/Portfolio'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='skills' element={<Skills />} />
          <Route path='contact' element={<ContactUs />} />

          <Route path='login' element={<Login />} />
          <Route path='member' element={<Member />} />
        </Route>
      </Routes>
    </>
  )
}

export default App