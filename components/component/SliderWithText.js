import { SectionTitle, ServicesCards } from '@/components/index'

export default function SliderWithText({ data, title}) {

    return (
        <div className='home__services-slider'>
            <SectionTitle
                title={title}
                className='section__title-mt0'
            />
            <ServicesCards
                data={data}
                slider={true}
                className=''
            />
        </div>
    )
}