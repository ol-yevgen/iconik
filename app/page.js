import { HeroContent, HomeServices, HomeOffer, HomePart, HomePlans, HomeGallery, HomeEvents, HomeManagers, HomeConsultation, HomeSocial } from "@/components/index"

export const metadata = {
    title: 'Home | Iconik',
}

import '../app/styles/loading.scss'

export default function Home() {
    return (
        <>
            <HeroContent
                bgImage='home'
                title='LIFE IS SHORT, TREAT YOURSELF'
                titleClass='home__title'
                contentClass='hero__content-home'
            />
            <HomeServices />
            <HomeOffer />
            <HomePart title='How to become a part of iconik?' />
            <HomePlans
                title='iconik membership plans'
                className='' />
            <HomeGallery />
            <HomeEvents />
            <HomeManagers />
            <HomeConsultation
                title='Get free consultation'
                className=''
            />
            <HomeSocial/>
        </>
    )
}
