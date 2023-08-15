'use client'

import Image from 'next/image';
import loadMore from '@/public/images/home/social/load-more.svg'

import '@/app/styles/ui/loadMore.scss';

export const LoadMore = (props) => {

    const { className, offset, setOffset, limit } = props;

    const loadMoreData = () => () => {
        setOffset(offset + limit)
    }

    return (
        <button
            className={`${className} load__more`}
            onClick={loadMoreData()}
        >
            <Image
                className='load__more-icon'
                src={loadMore}
                width={16}
                height={16}
                alt='load' />
            Load more
        </button>
    )
}