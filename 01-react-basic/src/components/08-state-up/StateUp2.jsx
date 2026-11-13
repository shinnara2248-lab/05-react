import React from 'react'
// 자식 컴포넌트
function Child({ onAlert }) {
    return (
        <div>
            <button onClick={onAlert}>경고창</button>
        </div>
    )
}
// 자식이 가진 버튼을 클릭하면 부모안에 있는 경고창이 보이는 함수 실행

export const StateUp2 = () => {
    const handleAlert = () => {
        alert("자식을 클릭하면 부모함수 실행")
    }
    return (
        <div>
            <h2>state 끌어올리기</h2>
            <p>자식요소에서 이벤트를 발생시 부모가 가진 변수 또는 메서드를 실행</p>
            <Child onAlert={handleAlert} />
        </div>
    )
}
