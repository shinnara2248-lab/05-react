import React from 'react'

export const GoodsList = ({ name, imgUrl, cont, price }) => {
    return (
        <>
            <li>
                <p><img src={imgUrl} alt={name} /></p>
                <div className="text-box">
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <p>{cont}</p>
                </div>
            </li>
        </>
    )
}
