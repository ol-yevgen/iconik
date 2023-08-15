import { getData } from '@/services/getData';
import { SectionTitle, SectionText, Slider } from '../../index';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomeOffer() {
    const offersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}offerList`)

    const renderCards = (cardData) => {
        const card = cardData.map(card => {
            return <div
                key={card.id}
                className='offer__container'
            >
                <Link className='offer__item' href='/plans'>
                    <Image src={card.path} width={300} height={300} alt={card.title} />
                    <h3 className='offer__item-title'>{card.title}</h3>
                </Link>

            </div>
        })

        return card
    }

    const sliderElements = renderCards(offersData)
    
    return (
        <section className='wrapper'>
            <div className='title__container'>
                <SectionTitle
                    title={'we have special offer for you'}
                    className=''
                />
                <SectionText
                    style='section__text'
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.'} />
            </div>

            <div>
                <Slider
                    data={sliderElements}
                    arrows={false}
                />
            </div>
        </section>
    )
}
