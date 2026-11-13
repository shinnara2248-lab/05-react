import React from 'react'

export const ComProps4 = (props) => {
    // return (
    //     <div>
    //         <h2>부모로부터 객체 속성 값 전달받기</h2>
    //         <p>부모가 한꺼번에 전달</p>
    //         <h3>{props.fruits.kind}</h3>
    //         <p><img
    //             src={props.fruits.imageUrl}
    //             alt={props.fruits.imageAlt}
    //             width={props.fruits.imageSize}
    //         /></p>
    //     </div>
    // )
    const { kind, imageUrl, imageAlt, imageSize } = props.fruits;
    return (

        <div>
            <h2>부모로부터 객체 속성 전달받기</h2>
            <p>구조 분해 할당으로 받기</p>
            <h3>{kind}</h3>
            <p><img src={imageUrl} alt={imageAlt} /></p>
        </div>
    )
}
