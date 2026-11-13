import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const MainSwiper = () => {
    return (
        <>
            <Swiper className='hero-swiper'
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                autoplay={{
                    delay: 2000
                }}
                pagination
                navigation
            >
                <SwiperSlide><img src="./images/main_slider_02.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/main_slider_03.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/main_slider_04.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/main_slider_05.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/main_slider_07.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </>
    )
}
