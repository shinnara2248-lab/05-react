import React from 'react'
import { Title } from './Title'
import { NewArrivalGoods } from './newArrivalGoods'

export const NewArrival = () => {
    return (
        <section>
            <div className='inner'>
                <Title
                    text="Arrivals"
                    textPre="New"
                    caption="가장 먼저 만나 보는 신상품 컬렉션" />
                <NewArrivalGoods />
            </div>
        </section>
    )
}
