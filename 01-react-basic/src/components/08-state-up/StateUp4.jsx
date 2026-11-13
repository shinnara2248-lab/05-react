import React, { useState } from 'react'

function Child({ sname, setChange }) {
    return (
        <>
            <input type="text"
                value={sname}
                onChange={(e) => setChange(e.target.value)} />
        </>
    )
}
export const StateUp4 = () => {
    // 1.상태변수
    const [name, setName] = useState("");
    // 2.메서드
    const handleName = (e) => {
        setName(e);
    }
    // 3.화면에 붙일 내용
    return (
        <div>
            <h2>자식 input 데이터를 부모에 전달</h2>
            <p>입력한 이름은 : {name}</p>
            <Child sname={name} setChange={handleName} />
        </div>
    )
}
