import React, { useState } from 'react'

export const ConditionLoginLogout4 = () => {
    let [login, setLogin] = useState(false);

    const loginChange = () => {
        setLogin(prev => !prev);
    }
    return (
        <div>
            <h2>삼항조건연산자-로그인/로그아웃</h2>
            <button onClick={loginChange}>{login ? "로그아웃" : "로그인"}</button>
            <p>{login ? "홍길동 환영합니다!" : ""}</p>
        </div>
    )
}
