import React from 'react'
const newGoods = [
    { id: 1, goodsTitle: "수박주스", price: "5,500", imgUrl: "./images/goods2.png", sale: "" },
    { id: 2, goodsTitle: "수박소르베", price: "3,900", imgUrl: "./images/goods3.png", sale: "10%" },
    { id: 3, goodsTitle: "자몽슬러쉬", price: "6,600", imgUrl: "./images/goods4.png", sale: "" },
    { id: 4, goodsTitle: "망고파르페", price: "5,800", imgUrl: "./images/goods5.png", sale: "15%" },
    { id: 5, goodsTitle: "자몽파르페", price: "3,600", imgUrl: "./images/goods6.png", sale: "" },
]

function ListItem({ product }) {
    return (
        <>
            <div className='img-box'>
                <img src={product.imgUrl} alt={product.goodsTitle} />
            </div>
            <div className='text-box'>
                <h3 className='font-bold text-xl'>{product.goodsTitle}</h3>
                <div><strong className='text-red-500 mr-3'>{product.sale}</strong><span>{product.price}</span></div>
            </div>
        </>
    )
}
export const StyleTailwind10 = () => {
    return (
        <div>
            <div className='text-center mb-5'>
                <h2 className='text-3xl font-black'><span className='text-red-500'>New</span>Arrivals</h2>
                <p>가장 먼저 나오는 신상품</p>
            </div>
            <ul className='flex gap-5'>
                {newGoods.map((good, i) =>
                    <li className='border'>
                        <ListItem product={good} />
                    </li>
                )}
            </ul>
        </div>
    )
}
