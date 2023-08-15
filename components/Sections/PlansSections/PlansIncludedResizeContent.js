'use client'

import Image from 'next/image';
import { useResize } from "@/hooks/useResize";
import { Button, SectionTitle } from '@/components/index';

import car from '@/public/images/plans/included/car.jpg';
import card from '@/public/images/plans/included/card.jpg';

export const PlansIncludedResizeContent = ({ listItems }) => {
    const windowWidth = useResize()

    return (
        windowWidth.isScreenXl
            ? <div className='included__content-desktop'>
                <Image src={car} width={945} height={700} className='included__car' alt='car' />
                <div className='included__list'>
                    <SectionTitle
                        title='What is included?'
                        className='included__list-title'
                    />
                    {listItems}
                    <Button
                        text='Get free consultation'
                        link='/contacts'
                        className='included__btn'
                        style={{}}
                    />
                </div>
                <Image src={card} width={300} height={400} alt='card' />
            </div>
            : <div className='included__content-mobile'>
                <div className='included__list'>
                    <SectionTitle
                        title='What is included?'
                        className='included__list-title'
                    />
                    {listItems}
                    <Button
                        text='Get free consultation'
                        link='/contacts'
                        className='included__btn'
                        style={{}}
                    />
                </div>
                <div className='included__photos'>
                    <Image src={car} width={645} height={400} className='included__car' alt='car' />
                    <Image src={card} width={300} height={400} className='included__card' alt='card' />
                </div>
            </div>
       
   )
}