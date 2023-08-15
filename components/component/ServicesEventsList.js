'use client'
import { useLoadMore } from '@/hooks/useLoadMore';
import { Gallery } from "@/components/index";

export const ServicesEventsList = ({ galleryPageData, limit }) => {

    const { memoSlicedPictureData, setOffset, offset } = useLoadMore(galleryPageData, limit)

    return (
        <>
            <Gallery
                pictureList={memoSlicedPictureData}
                galleryPageData={galleryPageData.length}
                offset={offset}
                setOffset={setOffset}
                limit={limit}
            />
        </>
    )
}