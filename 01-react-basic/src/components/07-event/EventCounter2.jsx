import React, { useState } from 'react'

export const EventCounter2 = () => {
    // 1.변수선언
    let num = 0;
    let [count, setCount] = useState(0);
    // 2.메서드
    const handleCount = () => {
        console.log(count, num)
        ++num;
        setCount(count + 1);
        console.log("증가후", count, num)
        // react에서 일반별수는 추적대상이 아님
        // react할때마다 일반변수는 초기값으로 초기화됨
    }
    // 3.화면에 불러질 내용
    return (
        <div>
            <h2>값 변경 - click</h2>
            <p>일반변수:{num}</p>
            <p>상태변수:{count}</p>
            <button onClick={handleCount}>증가</button>
        </div>
    )
}
