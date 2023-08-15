'use client'

import { useSwiper } from 'swiper/react';

import {arrowLeft} from '../../public/icons/arrow-left'
import { arrowRight } from '../../public/icons/arrow-right'

import '../../app/styles/ui/sliderArrow.scss';

export const SliderArrows = ({arrowFull}) => {
    const swiper = useSwiper();

    return (
        <>
            <button
                className={`arrow arrow__left ${arrowFull}`}
                onClick={() => swiper.slidePrev()}
                aria-label='arrow_left'
            >
                {arrowLeft}
            </button>
            <button
                className={`arrow arrow__right ${arrowFull}`}
                onClick={() => swiper.slideNext()}
                aria-label='arrow_right'
            >
                {arrowRight}
            </button>
        </>
    )
}