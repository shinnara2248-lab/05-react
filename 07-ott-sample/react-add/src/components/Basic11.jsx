import React, { useEffect, useState } from 'react'

export const Basic11 = () => {
    // 1. 상태
    const [msg, setMsg] = useState("로딩중....")
    const [count, setCount] = useState(0);

    // 2. 
    const handlePlus = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setMsg(`마운트되었습니다 ${count}`)
    }, [count])

    return (
        <div>
            <h2>수량 변경 감지</h2>
            <strong>{count}개</strong>
            <button onClick={handlePlus}>+</button>
            <p>{msg}</p>
        </div>
    )
}
