import React, { useEffect, useState } from 'react'

// useEffect= 컴포넌트가 화면에 렌더링 된 후 외부 시스템과 동기화하거나 부수적인 효과를 처리할 때 사용하는 Hook
// 기본문법
// useEffect(() => {실행할 코드 }, [의존열 배열])
// 1. 의존성 배열이 없는 경우 : 매 렌더링 이후에 계속해서 실행
// 2. 의존성 배열이 있는데 [] : 카운트된 후 한번 실행
// 3. 의존성 배열에 [변수, 메서드] : 마운드된후 변수, 메서드 값이 변경될때 마다 실행

export const Basic10 = () => {
    const [msg, setMsg] = useState("로딩중...")
    useEffect(() => { 
        setMsg("컴포넌트가 마운트되었다")
    }, [])
    return (
        <div>
            <h2>useEffect</h2>
            <p>{msg}</p>
        </div>
    )
}
