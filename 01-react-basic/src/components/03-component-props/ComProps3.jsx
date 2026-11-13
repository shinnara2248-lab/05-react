import React from 'react'

export const ComProps3 = (props) => {
    return (
        <div>
            <h2>부모로부터 객체 속성 값 전달받기</h2>
            <h3>{props.title}</h3>
            <p><img
                src={props.imgUrl}
                alt={props.imgAlt}
                width={props.imgSize}
            /></p>
        </div>
    )
}
