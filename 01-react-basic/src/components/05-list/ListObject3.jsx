import React from 'react'
import { products } from '../../data/drinkData'
import { GoodsList } from './GoodsList'

export const ListObject3 = () => {
    return (
        <div>
            <h2>음료 리스트</h2>
            <ul className="drink-list">
                {products.map((drink, id) =>
                    <GoodsList
                        key={id}
                        name={drink.name}
                        imgUrl={drink.imgSrc}
                        cont={drink.description}
                        price={drink.price}
                    />
                )}
            </ul>
        </div>
    )
}
