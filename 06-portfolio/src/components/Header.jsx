import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore';

// 메뉴로 들어갈 오브젝트 배열
const menus = [
    { key: "about", label: "소개" },
    {
        key: "portfolio", label: "포트폴리오",
        sub: [
            { key: "project1", label: "프로젝트1" },
            { key: "project2", label: "프로젝트2" }
        ]
    },
    { key: "skills", label: "스킬" },
    { key: "contact", label: "연락처" },
]
export const Header = () => {
    const { user, onLogout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        onLogout();
        navigate("/");
    }
    return (
        <header>
            <div className="inner">
                <div className="header-left">
                    <h1 className='logo'><Link to="/">로고</Link></h1>
                    <nav>
                        <ul className='main-menu'>
                            {menus.map((menu) => (
                                <li key={menu.key}>
                                    <Link to={`/${menu.key}`}>{menu.label}</Link>
                                    {menu.sub && (
                                        <ul>
                                            {menu.sub.map((sub, id) => (
                                                <li key={id}>
                                                    <Link to={`/${menu.key}/${sub.key}`}>{sub.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <ul className="gnb-list">
                        {user ? (
                            <>
                                <li><button onClick={handleLogout}>로그아웃</button></li>
                                <li><Link>내정보</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="login">login</Link></li>
                                <li><Link to="join">join</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}
