import React from 'react'
import { Title } from './Title'
import { SpringWomenGoods } from './SpringWomenGoods'

export const SpringWomen = () => {
    return (
        <section>
            <div className='inner'>
                <Title
                    text="Spring Women"
                    caption="봄을 산뜻하게, 디테일이 만드는 새로운 클래식" />
                <SpringWomenGoods />
            </div>
        </section>
    )
}
