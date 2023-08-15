import { getData } from '@/services/getData';
import { ServiceInnerHero, TextWithSliderSection, SectionTitle, SliderWithText, SectionText, PaginationSlider, Slider, SliderWithoutText, ServiceInnerMore, ServiceInnerIncluded, ServiceInnerInfo } from '@/components/index'

export async function generateMetadata({ params }) {
    const filter = params.filter

    return {
        title: `${filter.charAt(0).toUpperCase() + filter.slice(1)} | Iconik`,
    }
}

export default async function ServicesInner({ params }) {

    const servicesInnerData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}servicesInner/${params.filter}`)
    const servicesData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}servicesList`)
    const otherEventData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}otherEvents`)

    const servicesInner = servicesInnerData[0]

    return (
        < >
            <ServiceInnerHero data={servicesInner} />
            <TextWithSliderSection
                mainTitle={false}
                mainTitleText=''
                bg={false}
                reverse='common__container-reverse'
                title={<SectionTitle
                    // title={`the ${params.filter}`}
                    title={servicesInner.sliderTitle}
                    className='questions__title'
                />}
                text1={<SectionText
                    style=''
                    text={servicesInner.text1}
                />}
                text2={<SectionText
                    style=''
                    text={servicesInner.text2}
                />}
                picture={false}
                picSrc=''
                play={false}
                line={true}
                slider={
                    <PaginationSlider
                        paginationSliderAbout={servicesInner.images}
                        mobileSlider={
                            <Slider
                                data={<SliderWithoutText
                                    data={servicesInner.images}
                                />}
                                className='slide__card-center'
                            />
                        }
                    />}
            />
            <ServiceInnerMore data={servicesInner} />
            <ServiceInnerIncluded data={servicesInner} />
            <ServiceInnerInfo data={servicesInner} />
            <div className='wrapper gallery__inner'>
                <SliderWithText
                    title='Upcoming Events'
                    data={servicesData}
                />
                <SliderWithText
                    title='other events'
                    data={otherEventData}
                />
            </div>
        </>
    )
}