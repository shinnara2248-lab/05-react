import React, { createContext, useContext, useState } from 'react'
// 1. useContext 생성자 생성하기
const ToggleContext = createContext();

export const UseContext1 = () => {
    // 상태변수
    let [onoff, setOnoff] = useState(false);
    // 메서드
    const handleToggle = () => {
        setOnoff(!onoff);
    }
    // 화면에 랜더링
    return (
        // 2. 조상요소의 제공자 선언하기
        <ToggleContext.Provider value={{ onoff, handleToggle }}>
            <div>
                <h2>useContext</h2>
                <p>부모에서 제공된 변수와 메서드를 자식이 이용할 수 있도록</p>
                <ShowStatus />
                <ToggleButton />
            </div>
        </ToggleContext.Provider>
    )
}

// 버튼 자식
function ToggleButton() {
    let { onoff, handleToggle } = useContext(ToggleContext);
    return (
        <button className='bg-gray border-1' onClick={handleToggle}>
            {onoff ? "on" : "off"}
        </button>
    )
}
// 텍스트 자식
function ShowStatus() {
    let { onoff } = useContext(ToggleContext);
    return (
        <p>현재 상태 : {onoff ? "켜짐" : "꺼짐"}</p>
    )
}
