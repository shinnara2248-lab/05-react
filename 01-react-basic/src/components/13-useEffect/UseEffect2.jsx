import React, { useEffect } from 'react'

export const UseEffect2 = () => {
    useEffect(() => {
        console.log("처음에 한번만 실행")
    }, [])
    return (
        <div>
            <h2>useEffect</h2>
            <p>마운트 - 컴포넌트가 화면에 나타날때</p>
            <p>마운트 될때 한번 실행</p>
            <p>1. 외부데이터 불러올때</p>
            <p>2. 값을 초기화 설정할때</p>
            <p>3. 애니메이션이 시작될때</p>
        </div>
    )
}
