import React, { useState } from 'react'
// 숫자 증감
export const Basic03 = () => {
    //1. 상태
    const [count, setCount] = useState(1)
    // 변수
    // 한잔 가격 5000
    const price = 5000
    // 수량에 따는 합계를 계산하는 수식
    const total = price * count
    //2. 메서드
    const handlePlus = () => setCount(prev => prev + 1)
    const handleMinus = () => {
        setCount(prev => Math.max(1, prev - 1))
    }
    //3. 화면에 붙일 내용
    return (
        <div>
            <div>
                <button onClick={handleMinus}>-</button>
                <strong>{count}잔</strong>
                <button onClick={handlePlus}>+</button>
            </div>
            <p>합계 : {total} </p>
        </div>
    )
}
