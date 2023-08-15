import { getData } from '@/services/getData';
import { SectionTitle, CardWithInfo } from '@/components/index';

export default async function ServicesGallery() {
    const servicesGalleryData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}servicesGallery`)

    const servicesFiltersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}filters`)

    return (
        <section className='wrapper'>
            <SectionTitle
                title='Upcoming'
                className=''
            />

            <CardWithInfo
                servicesFiltersData={servicesFiltersData}
                servicesGalleryData={servicesGalleryData}
                limit={15}
            />
        </section>
    )
}
