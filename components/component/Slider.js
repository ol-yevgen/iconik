'use client'
import { useResize } from "@/hooks/useResize";

import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderArrows } from "../UI/SliderArrow";

import 'swiper/css';
import '@/app/styles/components/slider.scss';

export const Slider = ({ data, arrows, spaceBetween = 20 }) => {
    
    const windowWidth = useResize()

    return (
        <Swiper
            spaceBetween={spaceBetween}
            slidesPerView={'auto'}
        >
            {data.map((slide, index) => {
                return (
                    <SwiperSlide
                        key={index}>{slide}</SwiperSlide>
                )
            })}
            {arrows
                ? windowWidth.isScreenLg
                    ? < SliderArrows
                        arrowFull=''
                    />
                    : null
                : null
            }
            
        </Swiper>
    );
};
