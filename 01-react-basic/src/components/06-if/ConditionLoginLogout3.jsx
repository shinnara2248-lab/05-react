import React, { useState } from 'react'

// 로그인 상태를 보여줄 컴포넌트
function Login() {
    return (
        <div>
            <button>로그아웃</button>
            <p>환영합니다</p>
        </div>
    )
}
// 로그아웃 상태를 보여줄 컴포넌트
function Logout() {
    return (
        <div>
            <button>로그인</button>
        </div>
    )
}
export const CondotionLoginLofout3 = () => {
    // 1. 로그인 상태를 체크할 상태변수
    let [login, setLogin] = useState(true);
    return (
        <div className='login-test'>
            <h2>로그인 예제</h2>
            {login ? <Login /> : <Logout />}
        </div>
    )
}
