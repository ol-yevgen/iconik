import Image from 'next/image';
import { getData } from '@/services/getData';
import { SectionTitle, Slider } from "@/components/index";

export default async function PlansChoose() {
    const partnersList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}partners`)

    const renderCards = (data) => {
        const cards = data.map(card => {
            return <Image key={card.id} src={card.path} width={120} height={120} className='choose__partners-logo' alt="partner-logo" />
        })

        return cards
    }

    const sliderElements = renderCards(partnersList)

    return (
        <section
            className='plans__choose'
        >
            <div className='choose__content'>
                <SectionTitle
                    title='Why choose iconik?'
                    className='choose__title'
                />
                <h5 className="choose__text">
                    Our revolutionary concept was born to disrupt traditional hospitality as you know it, giving iconiK members an all-in-one solution to elevate their travel experience. We set out to create a unique product that could be passed down the generations – one that would exceed expectations and provide a range of services like no other.
                </h5>
            </div>

            <div className='choose__partners'>
                <span className='choose__partners-title'>OUR PARTNERS</span>
                <div className='choose__partners-list'>
                    <Slider
                        data={sliderElements}
                        arrows={false}
                        spaceBetween={50}
                    />
                </div>
            </div>

        </section>
    )
}