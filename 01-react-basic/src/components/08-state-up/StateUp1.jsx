import React, { useState } from 'react'
// 자식 컴포넌트
function Child({ mmsg }) {
    return (
        <div>
            <h3>여기는 자식영역</h3>
            <p>부모의 인사말:{mmsg}</p>
        </div>
    )
}
export const StateUp1 = () => {
    let [msg, setMsg] = useState("안녕 나 부모!!");
    return (
        <div>
            <h2>부모가 가진 값 자식에게 전달</h2>
            <Child mmsg={msg} />
        </div>
    )
}
