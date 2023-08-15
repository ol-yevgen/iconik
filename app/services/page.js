import { ServicesHero, ServicesGallery, ServicesEvents } from "@/components/index"

export const metadata = {
    title: 'Services | Iconik',
}

export default function Services() {
    return (
        <>
            <ServicesHero />
            <ServicesGallery/>
            <ServicesEvents/>
        </>
    )
}

