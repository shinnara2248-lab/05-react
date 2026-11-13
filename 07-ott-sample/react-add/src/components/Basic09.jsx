import React, { useState } from 'react'

// 상태 끌어올리기
// 부모 컴포넌트가 가지는 변수, 메서드를 자식 컴포넌트에 전달해서 사용하기

// 첫번째 자식
// 수량, 버튼
const CountInput = ({ sendCount, sendPlus }) => {
    return (
        <div>
            <h2>첫번째 자식</h2>
            <p>{sendCount}잔</p>
            <button onClick={sendPlus}>추가</button>
        </div>
    )
}

// 두번째 자식
// 계산된 결과 수량 *4000
const Total = ({ sendCount }) => (
    <p>결제 금액: {sendCount * 4000}</p>
)

export const Basic09 = () => {
    // 1. 수량 상태변수
    const [count, setCount] = useState(1);
    // 2. 수량 증가할 메서드
    const handlePlus = () => setCount(count + 1);
    return (
        <div>
            <CountInput sendCount={count} sendPlus={handlePlus} />
            <Total sendCount={count} />
        </div>
    )
}
