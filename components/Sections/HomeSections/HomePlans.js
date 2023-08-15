import { getData } from '@/services/getData';
import { Button,  PlanSectionItem } from '@/components/index';

export default async function HomePlans({title, className}) {
    const offersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}plansList`)

    return (
        <section className={`plans container-full__width ${className}`}>
            <h2 className='plans__title'>{ title}</h2>
            <ul className='plans__cards'>
                {
                    offersData.map(plan => {
                        return (
                            <li
                                key={plan.id}
                                className='plan'
                            >
                                <div className='plan__header' style={{ backgroundImage: `url(${plan.path})` }} />
                                <div className='plan__content'>
                                    <span className='plan__title main__text-4'>{plan.title}</span>

                                    <ul className='plans__list'>
                                        <PlanSectionItem plan={plan} />
                                    </ul>

                                </div>
                                <Button
                                    text="Get a consultation"
                                    link='/contacts'
                                    className='btn__full'
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
