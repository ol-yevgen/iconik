import { getData } from '@/services/getData';
import { SectionTitle, FilterGallery } from '@/components/index';

export default async function GalleryMain() {
    const galleryFiltersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}galleryFilters`)

    const galleryPageData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}galleryPage`)

    return (
        <section className='wrapper'>
            <div className="gallery__container">
                <SectionTitle title='gallery' />
                <FilterGallery
                    galleryFiltersData={galleryFiltersData}
                    galleryPageData={galleryPageData}
                    limit={6}
                />
            </div>
        </section>
    )
}
