'use client'

import Image from "next/image";
import { Slider } from "../index";

export const ManagersCards = ({ data }) => {

    const renderCards = (cardData) => {
        const card = cardData.map(manager => {
            return <ul
                key={manager.id}
                className='manager__card' >
                <li>
                    <Image src={manager.href} width={370} height={450} alt="manager" />
                </li>
                <li className='manager__card-name'>
                    <span className='main__next-5'>{manager.name}</span>
                </li>
                <li className='manager__card-title main__text-2'>{manager.title}</li>
            </ul >
        })

        return card
    }

    const sliderElements = renderCards(data)
    return (
        <div className='home__services'>
            <Slider
                data={sliderElements}
                arrows={true}
            />
        </div>
    )
}