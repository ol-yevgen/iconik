import Link from 'next/link'
import Image from 'next/image';
import { SectionTitle, Button } from '@/components/index';
import '../app/styles/components/404.scss';
import main from '../public/images/404/404-hero-img.png';
// import decorPic1 from '../public/images/404/1.png';
// import decorPic2 from '../public/images/404/2.png';
// import decorPic3 from '../public/images/404/3.png';

export default function NotFound() {
    return (
        <section className='not-found'>

            <div className='not-found-content'>
                <Image src={main} width={870} height={650} className='not-found--main' alt='404' />
                <SectionTitle
                    title='Well, you have been lost!'
                    className='section__title-mt0'
                />
                <Button
                    text='Back to Home'
                    link='/'
                    className=''
                    style={{}}
                />
                {/* <Image src={decorPic1} width={327} height={425} className='not-found--dec1' alt='404' />
                <Image src={decorPic2} width={240} height={315} className='not-found--dec2' alt='404' />
                <Image src={decorPic3} width={170} height={215} className='not-found--dec3' alt='404' /> */}
            </div>
        </section>
    )
}