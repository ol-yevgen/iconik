'use client'
import { useLoadMore } from '@/hooks/useLoadMore';
import { useActiveFilter } from "@/hooks/useActiveFilter";
import { ServicesFilters, Gallery } from "@/components/index";

export const FilterGallery = ({ galleryFiltersData, galleryPageData, limit }) => {

    const { memoSlicedPictureData, setOffset, offset } = useLoadMore(galleryPageData, limit)
    const { services, activeFilter, setActiveFilter } = useActiveFilter(memoSlicedPictureData)

    return (
        <>
            <ServicesFilters
                activeFilter={activeFilter}
                filtersData={galleryFiltersData}
                setActiveFilter={setActiveFilter}
            />

            <Gallery
                pictureList={services}
                galleryPageData={galleryPageData.length}
                offset={offset}
                setOffset={setOffset}
                limit={limit}
            />
        </>
    )
}