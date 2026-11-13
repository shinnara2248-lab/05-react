import React, { useState } from 'react'

export const Style4 = () => {
    // 1.버튼의 toggle 상태를 체크할 변수
    let [active, setActive] = useState(false);
    // 2.toggle 상태를 변경할 메서드
    const handleToggle = () => {
        setActive(!active);
        console.log(active);
    }
    return (
        <div>
            <h2>조건에 따른 class 적용</h2>
            <div className={`box ${active ? "active" : ""}`}>현재상태 : {active ? "dark" : "light"}</div>
            <button onClick={handleToggle}>토글</button>
        </div>
    )
}
