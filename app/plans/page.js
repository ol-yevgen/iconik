import { HeroContent, PlansIncluded, HomePart, HomeConsultation, PlansGallery, PlansMembership, PlansPart, PlansChoose, PlansQuestions } from "@/components/index"

export const metadata = {
    title: 'Plans | Iconik',
}

export default function Plans() {
    return (
        <>
            <HeroContent
                bgImage='plans__hero'
                title='LIVE THE BILLIONAIRE LIFE FOR A DAY IN DUBAI'
                titleClass='plans__hero-title'
                contentClass='hero__content-plans'
            />
            <PlansIncluded/>
            <HomePart title='How to get this service?' />
            <PlansGallery />
            <HomeConsultation
                title='how to become an iconik member?'
                className=''
            />
            <PlansMembership
                bgImage='plans__membership'
                title='An all-encompassing membership in one of the world’s most vibrant cities'
                titleClass='plans__hero-title plans__membership-title'
                contentClass='hero__content-plans'
            />
            <PlansQuestions/>
            <PlansChoose/>
            <PlansPart/>
        </>
    )
}