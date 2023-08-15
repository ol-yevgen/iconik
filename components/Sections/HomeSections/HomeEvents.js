import Image from 'next/image';
import { getData } from '@/services/getData';
import { SectionTitle, Button, PlayButton, Slider } from '../../index';

export default async function HomeEvents() {
    const eventsData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}eventsList`)

    const renderCards = (cardData) => {
        const card = cardData.map(event => {
            return <div
                key={event.id}
                className='event'
                style={{ backgroundImage: `url(${event.path})` }}
            >
                {/* <Image src={event.path} width={360} height={450} alt="time" /> */}
                <PlayButton
                    white='white'
                    className='play__transparent'
                />
                <span className='main__next-5 event__title'>{event.title}</span>
            </div>
        })

        return card
    }

    const sliderElements = renderCards(eventsData)

    return (
        <section className='wrapper'>
            <SectionTitle
                title={'Iconik latest events'}
                className=''
            />

            <div className='events'>
                <div className='events__content'>
                    <Slider
                        data={sliderElements}
                        arrows={false}
                    />
                </div>
                <Button
                    text='Choose a plan'
                    link='/plans'
                    style={{ marginTop: '70px' }}
                />
            </div>
        </section>
    )
}
