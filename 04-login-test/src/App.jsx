import './App.css'
import { Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Member } from './pages/Member'
import { MyInfo } from './pages/MyInfo'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/member" element={<Member />} />
        <Route path='/myinfo' element={<MyInfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
