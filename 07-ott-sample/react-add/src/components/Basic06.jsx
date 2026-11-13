import React from 'react'

// 상품 정보를 저장할 배열 만들기
const goods = [
    { id: 1, name: "아메리카노", category: "커피", price: 2000, soldOut: false },
    { id: 2, name: "바닐라라떼", category: "커피", price: 6000, soldOut: false },
    { id: 3, name: "녹차라떼", category: "논커피-라떼", price: 5500, soldOut: false },
    { id: 4, name: "딸기라떼", category: "논커피-라떼", price: 5500, soldOut: false },
    { id: 5, name: "유자차", category: "티", price: 3500, soldOut: true },
]

export const Basic06 = () => {
    return (
        <div>
            <ul>
                {goods.map(item => <li>{item.name}/{item.price}</li>)}
            </ul>
        </div>
    )
}
