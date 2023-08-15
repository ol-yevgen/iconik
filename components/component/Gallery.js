'use client'

import Image from 'next/image';
import Link from 'next/link'
import { LoadMore } from '@/components/index';

import '@/app/styles/components/photoGallery.scss';

export const Gallery = ({ pictureList, limit, offset, setOffset, galleryPageData }) => {

    return (
        <>
            <div className='gallery__list'>
                {pictureList.map(photo => {
                    return (
                        
                        <Link
                            key={photo.id}
                            href={`/gallery/${photo.filter}`}
                        >
                            <div
                                className='gallery__list-item'
                            >
                                <Image
                                    src={photo.path}
                                    width={570}
                                    height={400}
                                    className='gallery__list-image'
                                    alt='photo' />
                                <div className='gallery__list-content'>
                                    <span className='gallery__list-filter'>{photo.filter}</span>
                                    <h5 className='gallery__list-title'>{photo.title}</h5>
                                </div>
                            </div>
                        </Link>
                    )

                })}
            </div>
            {
                offset >= galleryPageData
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