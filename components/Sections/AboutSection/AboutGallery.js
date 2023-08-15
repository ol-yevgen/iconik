import { getData } from '@/services/getData';
import { SectionTitle } from '../../index';
import Image from 'next/image';

export default async function AboutGallery() {
    const aboutGallery = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}aboutGallery`)

    return (
        <section className='wrapper gallery-wrapper about-wrapper'>
            <SectionTitle
                title='what is iconik?'
                className=''
            />

            <div className='images about__images'>
                <ul className='about__gallery'>
                    {aboutGallery.map(picture => {
                        return <li
                            key={picture.id}
                            className='about__gallery-item'
                        >
                            <Image src={picture.path} width={300} height={300} alt='pic' />
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}
