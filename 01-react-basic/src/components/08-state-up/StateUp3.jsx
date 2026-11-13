import React, { useState } from 'react'

// 자식 컴포넌트
// 자식 컴포넌트의 버튼을 클릭하면 부모의 handleMsg가 실행되어서 msg 내용이 변경되도록
function Child({ changeMsg }) {
    return (
        <div>
            <button onClick={changeMsg}>변경</button>
        </div>
    )
}
export const StateUp3 = () => {
    // 1.상태변수
    let [msg, setMsg] = useState("나는 부모");
    // 2.메서드
    let handleMsg = () => {
        setMsg("자식이 보내는 메세지")
    }
    // 3.화면에 붙일 내용
    return (
        <div>
            <h2>부모의 상태함수 전달</h2>
            <p>{msg}</p>
            <Child changeMsg={handleMsg} />
        </div>
    )
}
