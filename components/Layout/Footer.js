import { getData } from '@/services/getData'
import Image from 'next/image';
import Link from 'next/link';
import { SocialAll, FooterLinks } from '@/components/index';

import map from '@/public/images/footer/Map.webp'

export default async function Footer() {
    const footerLinksList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}footerLinksList`)

    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className="footer__content">
                    <div className="footer__header">
                        <div className="footer__header-left">
                            <span>STAY IN TOUCH</span>
                            <h2>+971 55 230 8085</h2>
                        </div>
                        <div className="footer__header-right">
                            <SocialAll/>
                        </div>
                    </div>
                    <div className="footer__links">
                        {footerLinksList.map(list => {
                            return (
                                <FooterLinks
                                    key={list.id}
                                    list={list}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="footer__map">
                    <Image src={map} width={640} height={640} alt='map' />
                </div>
            </div>
            <div className='footer__bottom'>
                <span className='main__text-2'>
                    © 2023 All rights reserved.
                </span>
                <div className='footer__bottom-policy'>
                    <Link href='/about'>Privacy policy</Link>
                    <span>/</span>
                    <Link href='/about'>Club rules</Link>
                </div>
            </div>
        </footer>
    )
}
