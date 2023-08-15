import { getData } from '@/services/getData';
import { SectionTitle, ServicesEventsList } from '@/components/index';

export default async function ServicesEvents() {
    const galleryPageData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}galleryPage`)

    return (
        <section className='wrapper'>
            <div className="gallery__container">
                <SectionTitle title='Latest events' />
                <ServicesEventsList
                    galleryPageData={galleryPageData}
                    limit={4}
                />
            </div>
        </section>
    )
}
