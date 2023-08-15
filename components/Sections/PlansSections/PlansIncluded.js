import { getData } from '@/services/getData';
import { PlansIncludedResizeContent } from './PlansIncludedResizeContent';
import { checkMark } from '@/public/icons/checkMark';

export default async function PlansIncluded() {
    const offersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}plansList`)
    const oneOfferData = offersData[0]

    const renderListItems = (data) => {
        return (
            <ul className='included__list-items'>
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
        <section className='included'>
            <PlansIncludedResizeContent
                listItems={listItems}
            />
        </section>
    )
}