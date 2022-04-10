import React from 'react'
import {Navigation,A11y, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Slider = () => {
    return (
        <div className="slider">
            <Swiper 
              modules={[Navigation, A11y,Autoplay]}
              spaceBetween={0}
              slidesPerView={1}    
              autoplay
             >
                 <SwiperSlide>
                    <img style={{ width: "100%" }} src="/image/1.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img style={{ width: "100%" }} src="/image/2.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img style={{ width: "100%" }} src="/image/3.jpg" alt="" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img style={{ width: "100%" }} src="/image/3.jpg" alt="" />
                 </SwiperSlide>

            </Swiper>
            
        </div>
    );
};

