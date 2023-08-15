'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderArrows } from "@/components/index"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../app/styles/components/fullScreenSlider.scss';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export const FullScreenSlider = ({ galleryInner }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='swiper__container'>
            <Swiper
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper__full"
            >
                {galleryInner.images.map(image => {
                    return (
                        <SwiperSlide
                            key={image.id}
                            className='swiper__full-item'>
                            <Image
                                src={image.path}
                                width={570}
                                height={400}
                                className=''
                                alt='photo' />
                        </SwiperSlide>
                    )
                })}
                <div className='gallery__inner-content'>
                    <div className='gallery__inner-info'>
                        <h4 className='gallery__inner-title'>{galleryInner.title}</h4>
                        <p className='gallery__inner-text main__text'>{galleryInner.text}</p>
                    </div>
                    <div className='swiper__navigation'>
                        <SliderArrows
                            arrowFull='arrow-full'
                        />
                    </div>
                </div>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="swiper__prescreen"
            >
                {galleryInner.images.map(image => {
                    return (
                        <SwiperSlide
                            key={image.id}
                            className='swiper__prescreen-item'>
                            <Image
                                src={image.path}
                                width={217}
                                height={145}
                                alt='photo' />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    );
}
