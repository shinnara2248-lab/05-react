import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';

export const Logout = () => {
    const { handleLogin } = useContext(UserContext);
    return (
        <div>
            <button onClick={() => handleLogin("신나라")}>로그인</button>
        </div>
    )
}
