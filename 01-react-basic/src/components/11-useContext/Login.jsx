import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

export const Login = () => {
    const { user, handleLogout } = useContext(UserContext);
    return (
        <div>
            <p>안녕하세요 {user}님</p>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    )
}
