import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Autoplay, Navigation } from 'swiper/modules';
// css
import 'swiper/css';
import 'swiper/css/navigation';


export const SwiperTest2 = () => {
    return (
        <div className='slider-list'>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 2000
                }}
                loop={true}
                navigation={true}
            >
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 2</SwiperSlide>
                <SwiperSlide>slide 3</SwiperSlide>
                <SwiperSlide>slide 4</SwiperSlide>
            </Swiper>
        </div>
    )
}
