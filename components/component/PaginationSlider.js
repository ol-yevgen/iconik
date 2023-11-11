'use client'
import { useResize } from "@/hooks/useResize";
import { SliderArrows } from "@/components/index";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../app/styles/components/paginationSlider.scss';

import { Pagination, Navigation } from 'swiper/modules';

export default function PaginationSlider ({ paginationSliderAbout, mobileSlider }) {
    const windowWidth = useResize()

    return (
        windowWidth.isScreenL
            ? <div className='common__swiper'>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    modules={[Pagination, Navigation]}
                >

                    {paginationSliderAbout.map(slide => {
                        return (
                            <SwiperSlide key={slide.id} className='common__slide' >
                                <Image src={slide.path} width={945} height={700} className='common__swiper-image' alt="time" />
                            </SwiperSlide>
                        )
                    })}
                    <div className='common__swiper-decor'>
                        <div className='swiper__navigation-common'>
                            <SliderArrows
                                arrowFull='arrow-common'
                            />
                        </div>
                    </div>

                </Swiper>

            </div>
            : <div className="common__swiper">
                {mobileSlider}
            </div>

    );
}
