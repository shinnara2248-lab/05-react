import React, { useEffect, useState } from 'react'
// useEffect
// 컨포넌트가 화면에 렌더링된후 외부 시스템과 동기화하거나 
// 부수적인 효과를 처리할때 사용하는 Hook
// 기본문법
// useEffect(()=>{
//     실행할코드
//  return () => 실행할 코드 정리함수
// },[의존성배열])
// 타이머를 사용할때 정리함수를 사용한다

// 1. 의존성 배열이 없는 경우 : 매 렌더링 이후에 계속해서 실행
// 2. 의존성 배열이 있는데 [] : 마운트된 후 한번실행
// 3. 의존성 배열에 [변수, 메서드] : 마운트된후 변수, 메서드값이 변경될때 마다 실행
export const Basic10 = () => {
    // 1. 상태변수
    const [msg, setMsg] = useState("로딩중....")
    // useEffect
    useEffect(() => {
        setMsg("컴포넌트가 마운트되었다")
    }, [])
    // 3. 화면에 붙일내용
    return (
        <div>
            <h2>useEffect</h2>
            <p>{msg}</p>
        </div>
    )
}
