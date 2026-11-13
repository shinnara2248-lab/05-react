import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { newData } from '../data/newData'
import { Card } from './Card'
import { Navigation } from 'swiper/modules'

import "swiper/css";
import "swiper/css/navigation";

export const NewArrivalGoods = () => {
    return (
        <div className='list'>
            <Swiper
                modules={[Navigation]}
                slidesPerView={5}
                spaceBetween={32}
                loop={true}
                navigation
            >
                {newData.map((item) => (
                    <SwiperSlide>
                        <Card sendItem={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
