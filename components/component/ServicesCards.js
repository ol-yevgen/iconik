'use client'

import Image from "next/image";
import { Slider, Button } from "@/components/index";
import clock from '@/public/icons/clock.svg';

export default function ServicesCards({ data, slider, className}) {

    const renderCards = (cardData) => {
        const card = cardData.map(service => {
            return <ul
                key={service.id}
                className='services__card' >
                <li className='services__card-image'>
                    <Image src={service.href} width={360} height={450} alt="time" />
                    <Button
                        text='Find out more'
                        link={`/services/${ service.filter}`}
                        className='btn__services' />
                </li>
                <li className='services__card-title'>{service.title}</li>
                <li className='services__card-price'>
                    <span className="price-current">{`${service.currency} ${service.price}`}</span>
                    <span className="price-discount">{`${service.currency} ${service.discount}`}</span>
                    <span className='services__card-hour'>
                        <Image src={clock} width={14} height={14} alt="time" />
                        {service.time}h
                    </span>
                </li>
            </ul >
        })

        return card
    }

    const sliderElements = renderCards(data)
    
    return (
        <div className={`home__services ${className}`}>
            {slider
                ? <Slider
                    data={sliderElements}
                    arrows={true}
                />
                : sliderElements
            }
        </div>
    )
}

