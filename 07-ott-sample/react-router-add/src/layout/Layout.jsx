import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        {/* 메뉴를 클릭했을때 해당 컴포넌트가 변경되는 영역 */}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
