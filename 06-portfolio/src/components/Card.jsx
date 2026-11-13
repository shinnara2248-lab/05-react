import React from 'react'

export const Card = ({ sendItem }) => {
    let disCount = 0;

    let disCountPrice = 0;

    if (sendItem.price) {
        const disCount = sendItem.sale * 100;
        const priceNum = Number(sendItem.price.replace(",", ""));
        const disCountPrice = priceNum * (1 - sendItem.sale);
    }

    return (
        <div className='card-item'>
            <div className='img-box'>
                <img src={`./images/${sendItem.imgUrl}`} alt="" />
            </div>
            <div className='text-box'>
                <h3>{sendItem.title}</h3>
                {sendItem.price && (
                    <div>
                        <strong className='sale'>{disCount}%</strong>
                        <span>{sendItem.price}원</span>
                        {/* <strong>{disCountPrice}</strong> */}
                        <strong>{disCountPrice.toLocaleString()}</strong>
                    </div>
                )}
            </div>
        </div>
    )
}
