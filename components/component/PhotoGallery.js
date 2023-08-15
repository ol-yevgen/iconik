'use client'
import { useLoadMore } from '@/hooks/useLoadMore';

import Image from 'next/image';
import { LoadMore } from '@/components/index';
import '@/app/styles/components/photoGallery.scss';

export default function PhotoGallery({ pictureList, limit }){

    const {memoSlicedPictureData, setOffset, offset } = useLoadMore(pictureList, limit)

    return (
        <div className='social__gallery'>
            <ul className='social__photos'>
                {memoSlicedPictureData.map(photo => {
                    return <li
                        key={photo.id}
                        className='social__photo'
                    >
                        <Image src={photo.path} width={130} height={130} alt='photo' />
                    </li>

                })}
            </ul>
            {offset >= pictureList.length
                ? null
                : <LoadMore
                    offset={offset}
                    setOffset={setOffset}
                    limit={limit}
                />}
        </div>
    )
}