import { getData } from '@/services/getData';
import { SectionTitle } from '../../index';
import Image from 'next/image';

export default async function HomeGallery() {
    const galleryData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}galleryList`)

    return (
        <section className='wrapper gallery-wrapper'>
            <SectionTitle
                title={'iconik lifestyle'}
                className=''
            />

            <div className='images'>
                <ul className='gallery'>
                    {galleryData.map(picture => {
                        return <li
                            key={picture.id}
                            className='gallery__item'
                        >
                            <Image src={picture.path} width={300} height={300} alt='pic' />
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}
