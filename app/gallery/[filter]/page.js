import { getData } from '@/services/getData';
import { FullScreenSlider, HomeConsultation, Gallery, SectionTitle } from '@/components/index'

export async function generateMetadata({ params }) {
    const filter = params.filter

    return {
        title: `${filter.charAt(0).toUpperCase() + filter.slice(1)} | Iconik`,
    }
}

export default async function Plans({ params }) {
    const galleryInner = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}galleryInner/${params.filter}`)
    const galleryPageData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}galleryPage`)

    return (
        <section className='gallery__inner'>
            <FullScreenSlider galleryInner={galleryInner[0]} />
            <div className='gallery__container'>
                <SectionTitle
                    title='other events'
                    className=''
                />
                <Gallery
                    pictureList={galleryPageData.slice(0, 2)}
                    galleryPageData={0}
                    offset={3}
                    setOffset=''
                    limit={0}
                />
            </div>
            <HomeConsultation
                title='how to become an iconik member?'
                className='consultation__gallery'
            />
        </section>
    )
}