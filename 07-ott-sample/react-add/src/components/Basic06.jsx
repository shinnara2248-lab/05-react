import React from 'react'
// 상품 정보를 저장할 배열만들기
const goods = [
    { id: 1, name: "커피", category: "커피", price: 3000, soldOut: false },
    { id: 2, name: "라테", category: "커피", price: 3500, soldOut: false },
    { id: 3, name: "녹차", category: "차", price: 3000, soldOut: false },
    { id: 4, name: "유자차", category: "차", price: 3500, soldOut: false },
    { id: 5, name: "자몽차", category: "차", price: 4000, soldOut: true },
]

export const Basic06 = () => {
    return (
        <div>
            <ul>
                {goods.map(item => <li>{item.name} / {item.price}</li>)}
            </ul>
        </div>
    )
}
