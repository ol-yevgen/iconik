import { TextWithSliderSection, SectionTitle, SectionText } from '@/components/index';
import whoPic from '@/public/images/about/who/who-we-are.jpg'

export default async function AboutWho() {
    return (
        <TextWithSliderSection
            mainTitle={false}
            mainTitleText=''
            bg={true}
            reverse=''
            title={<SectionTitle
                title='Who we are?'
                className='questions__title'
            />}
            text1={<SectionText
                style=''
                text='Our revolutionary concept was born to disrupt traditional hospitality as you know it, giving iconiK members an all-in-one solution to elevate their travel experience. We set out to create a unique product that could be passed down the generations – one that would exceed expectations and provide a range of services like no other.'
            />}
            text2={<SectionText
                style=''
                text='We make lifestyle experiences unforgettable for our members by looking after every detail of their stay. And for that extra special touch, we tailor their itineraries to ensure they experience the best of the destination. iconiK members receive access to an online shopping platform showcasing special rates on high end products and unique offers from world famous fashion and retail brands.'
            />}
            picture={true}
            picSrc={whoPic}
            play={false}
            line={true}
            slider=''
        />
    )
}
