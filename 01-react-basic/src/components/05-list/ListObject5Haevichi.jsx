import React from 'react'
import { offerData } from '../../data/offerData'
import { OfferList } from './OfferList'

export const ListObject5Haevichi = () => {
    return (
        <section>
            <div className="inner">
                <div className="title-box">
                    <h2 className="section-title">OFFER</h2>
                    <div className="title-right">
                        <p>다양한 혜택과 함께 특별한 휴식을 완성해보세요</p>
                        <a href="" className='more-btn'>오퍼 전체보기</a>
                    </div>
                </div>
                <div>
                    <ul className='offer-list'>
                        {offerData.map((p, id) =>
                        <OfferList offer={p} key={id} />
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}
