import { getData } from '@/services/getData';
import { TextWithSliderSection, SectionTitle, SectionText, AboutWhyText, PaginationSlider, Slider, SliderWithoutText } from '@/components/index';

export default async function AboutWhy() {
    const paginationSliderAbout = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}paginationSliderAbout`)

    return (
        <TextWithSliderSection
            mainTitle={false}
            mainTitleText=''
            bg={false}
            reverse='common__container-reverse'
            title={<SectionTitle
                title='Why us?'
                className='questions__title'
            />}
            text1={<SectionText
                style=''
                text='Our revolutionary concept was born to disrupt traditional hospitality as you know it, giving iconiK members an all-in-one solution to elevate their travel experience. We set out to create a unique product that could be passed down the generations – one that would exceed expectations and provide a range of services like no other.'
            />}
            text2={<AboutWhyText />}
            picture={false}
            picSrc=''
            play={false}
            line={true}
            slider={
                <PaginationSlider
                paginationSliderAbout={paginationSliderAbout}
                mobileSlider={
                    <Slider
                        data={<SliderWithoutText
                            data={paginationSliderAbout}    
                        />}
                        className='slide__card-center'
                    />
                }
            />}
        />
    )
}
