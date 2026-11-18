import React from 'react'

export const Basic01 = () => {
    //1. 변수
    const drink = { title: "아메리카노", price: 4000 }
    const { title, price } = drink;
    // 수식
    const doublePrice = price * 2;
    //2. 메서드
    // 3. 화면에 붙일 내용
    return (
        <div>
            <h2>{title}</h2>
            <p>한잔 가격은 :{price}</p>
            <p>두잔 가격은 :{doublePrice}</p>
        </div>
    )
}
