import React from 'react'

export const Basic01 = () => {
    const drink = { title: "아메리카노", price: 4000 }
    const { title, price } = drink;

    const doublePrice = price * 2;

    return (
        <div>
            <h2>{title}</h2>
            <p>한잔 가격은 : {price}</p>
            <p>두잔 가격은 : {doublePrice}</p>
        </div>
    )
}
