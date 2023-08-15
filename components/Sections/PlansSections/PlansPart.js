import { getData } from '@/services/getData';
import { checkMark } from '@/public/icons/checkMark';
import Image from 'next/image';
import { Button, SectionTitle } from '@/components/index';

import cards from '@/public/images/plans/Part/partCards.jpg';

export default async function PlansPart() {
    const offersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}plansList`)
    const oneOfferData = offersData[0]

    const renderListItems = (data) => {
        return (
            <ul className='plans__part-list'>
                {
                    data.activePlans.map(item => {
                        return <li
                            key={item.id}
                            className='plan__item plan__active'
                        >
                            <div>{checkMark}</div>
                            <div className='plan__text'>{item.plan}</div>
                        </li>
                    })
                }
                {
                    data.disabledPlans.map(item => {
                        return <li
                            key={item.id}
                            className='plan__item plan__active'
                        >
                            <div>{checkMark}</div>
                            <div className='plan__text main__text'>{item.plan}</div>
                        </li>
                    })}
            </ul>
        )
    }

    const listItems = renderListItems(oneOfferData)

    return (
        <section className='wrapper'>
            <SectionTitle
                title='become a part of iconik'
                className=''
            />
            <div className='container container__plans-part'>
                <Image src={cards} width={790} height={675} className='plans__part-cards' alt='car' />
                <div className='plans__part-list'>
                    
                    {listItems}
                    <Button
                        text='Apply for membership'
                        link='/contacts'
                        className=' plans__part-btn'
                        style={{}}
                    />
                </div>
            </div>
        </section>
    )
}