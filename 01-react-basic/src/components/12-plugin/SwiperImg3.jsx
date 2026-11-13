import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// 외부 데이터
import { products } from '../../data/drinkData'
import { Autoplay } from 'swiper/modules'

export const SwiperImg3 = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay]}
                slidesPerView={4}
                spaceBetween={32}
                loop={true}
                autoplay={true}

            >
                {products.map((item, id) =>
                    <SwiperSlide>
                        <div>
                            <img src={item.imgSrc} alt="" />
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.가격}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    )
}
