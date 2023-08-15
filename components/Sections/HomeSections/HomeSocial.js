import Image from 'next/image';
import { getData } from '@/services/getData';

import { PhotoGallery, FollowLink } from '../../index';
import SocialLink from '../../component/SocialLinks'
import infoIcon from '@/public/images/home/social/info.png'

export default async function HomeSocial() {
    const socialList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}socialList`)
    const socialGalleryList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}socialGalleryList`)

    return (
        <section className='wrapper'>

            <div className='container container-margin'>
                <div className="social">
                    <div className="social__left">
                        <h2 className='section__title-start'>
                            We are on social media
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                        <SocialLink
                            socialList={socialList}
                        />
                    </div>
                    <div className="social__right">
                        <div className="social__header">
                            <Image src={infoIcon} width={50} height={50} alt='info'/>
                            <div className="social__header-text text">
                                <span>@iconik_event_atelier</span>
                                <span className="social__header-description">Description here</span>
                            </div>
                            <FollowLink/>
                        </div>
                        <PhotoGallery
                            pictureList={socialGalleryList}
                            limit={6}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
