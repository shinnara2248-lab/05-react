import React from 'react'

export const Variable1 = () => {
    let uName = "신나라";

    return (
        <div>
            <h2>jsx에서 변수 사용하기</h2>
            <p>안녕 {uName} 반가워!</p>
        </div>
    )
}