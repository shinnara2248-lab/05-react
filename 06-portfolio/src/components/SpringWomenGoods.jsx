import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { springWomenData } from '../data/springWomenData'
import { Card } from './Card'

export const SpringWomenGoods = () => {
    return (
        <div className='list'>
            <Swiper
                slidesPerView={4}
                spaceBetween={32}
            >
                {springWomenData.map((item) => (
                    <SwiperSlide>
                        <Card sendItem={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}