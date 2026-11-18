
import React from 'react'
import { Link } from 'react-router-dom'

// 메뉴
const menus = [
  { path: "/", title: "홈" },
  { path: "about", title: "소개" },
  { path: "portfolio", title: "포트폴리오" },
  { path: "skills", title: "스킬" },
  { path: "contactus", title: "연락처" },
]

export const Header = () => {
  return (
    <header>
      <div className="inner flex">
        <h1 className="logo">
          <Link to="/">신나라</Link>
        </h1>
        <nav>
          <ul>
            {menus.map(({ path, title }) => (
              <li key={path}>
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button></button>
      </div>
    </header>
  )
}
