import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export const Header = () => {
    //
    const { user, onLogout } = useAuthStore();
    //페이지 이동하기
    const navigate = useNavigate();

    //로그아웃 버튼 클릭시 실행할 메서드
    const handleLogout = () => {
        onLogout();
        navigate("/")
    }
    return (
        <header>
            <div className="inner">
                <h1 className="logo">
                    <Link to="/">logo</Link>
                </h1>
                <ul className="gnb-list">
                    {user ? (
                        <>
                            <li>
                                <p>{user.displayName || user.email || user.nickname}</p>
                                <button onClick={handleLogout}>로그아웃</button>
                            </li>
                            <li><Link to="/myinfo">내정보</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/login">로그인</Link></li>
                            <li><Link to="/member">회원가입</Link></li>
                        </>
                    )
                    }
                </ul >
            </div >
        </header >
    )
}
