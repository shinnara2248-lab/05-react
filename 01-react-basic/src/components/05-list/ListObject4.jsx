import React from 'react'
import { productData } from '../../data/productData'
import { ProductList } from './ProductList'

export const ListObject4 = () => {
    return (
        <div>
            <h2>상품목록</h2>
            <ul className="product-list">
                {productData.map((p, id) =>
                    <ProductList product={p} key={id} />
                )}
            </ul>
        </div>
    )
}
