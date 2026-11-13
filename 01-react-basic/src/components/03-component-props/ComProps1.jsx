import React from 'react'

export const ComProps1 = (props) => {
    return (
        <div>
            <h2>속성전달 방법</h2>
            <p>1. 통으로 받기</p>
            <p>2. 각각 받기</p>
            <p>안녕~ {props.name}야 너는 나이가 {props.age}맞니?</p>
        </div>
    )
}