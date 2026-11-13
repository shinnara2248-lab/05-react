import React, { useState } from 'react'
import { UserContext } from '../../context/UserContext';
import { Login } from './Login';
import { Logout } from './Logout';

export const UseContext3 = () => {
    // 사용자 정보를 저장할 상태변수
    const [user, setUser] = useState("");

    // 사용자 정보를 변경할 메서드
    // 로그인
    const handleLogin = (username) => {
        setUser(username);
    }
    // 로그아웃
    const handleLogout = () => {
        setUser("");
    }
    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
            <div></div>
            {user ? <Login /> : <Logout />}
        </UserContext.Provider>
    )
}
