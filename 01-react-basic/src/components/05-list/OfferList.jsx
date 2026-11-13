import React from 'react'

export const OfferList = ({offer}) => {
    return (
        <li>
            <div className="img-box">
                <img src={offer.imgSrc} alt="" />
            </div>
            <div className="text-box">
                <h3>{offer.title}</h3>
                <div>
                    {offer.kind}, {offer.discount}
                </div>
                <p>{offer.desc}</p>
                <p>{offer.period}</p>
            </div>
        </li>
    )
}
