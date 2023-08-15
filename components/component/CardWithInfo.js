'use client'

import { useLoadMore } from '@/hooks/useLoadMore';
import { useActiveFilter } from "@/hooks/useActiveFilter";
import { ServicesCards, ServicesGalleryFilters, LoadMore } from "@/components/index";

export default function CardWithInfo({ servicesFiltersData, servicesGalleryData, limit }) {
    const { memoSlicedPictureData, setOffset, offset } = useLoadMore(servicesGalleryData, limit)
    const { services, activeFilter, setActiveFilter } = useActiveFilter(memoSlicedPictureData)

    return (
        <>
            <ServicesGalleryFilters
                activeFilter={activeFilter}
                filtersData={servicesFiltersData}
                setActiveFilter={setActiveFilter}
                servicesLength={services.length}
                allDataLength={servicesGalleryData.length}
            />
            <ServicesCards
                data={services}
                className='services__gallery'
                slider={false}
            />
            {
                offset >= servicesGalleryData.length
                    ? null
                    : <LoadMore
                        offset={offset}
                        setOffset={setOffset}
                        limit={limit}
                        className='gallery__list-more'
                    />
            }
        </>
    )
}

