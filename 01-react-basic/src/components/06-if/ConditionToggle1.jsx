import React, { useState } from 'react'

export const ConditionToggle1 = () => {
    // 1.변수=>상태변수
    // let [변수명,메서드] = useState(값);
    let [isToggle, setToggle] = useState(true);

    // 2.매서드
    let toggle = () => {
        console.log("토글함수 호출");
        // setToggle(이전상태를 저장할 변수 => 변경할 내용)
        setToggle(prev => !prev);
    }
    // 3.화면에 뿌려질 내용
    return (
        <div>
            <h2>조건문</h2>
            <p>버튼을 클릭하세요</p>
            <button onClick={toggle}>{isToggle ? "ON" : "OFF"}</button>
        </div>
    )
}
