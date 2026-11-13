import React from 'react'

export const EventMouse1 = () => {
    // 상태변수
    // 매서드
    const handleClick = (e) => {
        console.log(e);
    }
    // 화면에 랜더링 내용
    return (
        <div>
            <h2>mouse event - click</h2>
            <button onClick={handleClick}>클릭</button>
        </div>
    )
}
