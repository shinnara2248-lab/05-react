import React from 'react'

export const ProductList = ({ product }) => {
  return (
    <li>
      <div className="img-box">
        <img src={product.image} alt="" />
        <div className="badges">
          {product.badges.includes("품절") ? <span>품절</span> : null}
        </div>
      </div>
      <div className="text-box">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </li>
  )
}
