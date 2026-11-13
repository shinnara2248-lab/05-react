import React from 'react'
// 일반함수
function greeting() {
    return "리액트는 자바스크립트가 기본입니다. 자바스크립트 문법이 중요합니다"
}
const Function2 = () => {
    return (
        <div>
            <h2>jsx에서 함수 사용하기</h2>
            <p>{greeting()}</p>
        </div>
    )
}

export default Function2
