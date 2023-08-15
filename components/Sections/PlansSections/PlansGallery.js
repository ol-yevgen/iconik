import { getData } from '@/services/getData';

import { SectionTitle, Slider, SliderWithoutText } from "@/components/index";

export default async function PlansGallery() {
    const plansGallery = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}plansGallery`)

    return (
        <section className='wrapper'>
            <SectionTitle
                title='Gallery'
                className='section__title-mt0'
            />
            <Slider
                data={<SliderWithoutText
                    data={plansGallery}
                    className=''
                />}
                arrows={true}
            />
        </section>
    )
}