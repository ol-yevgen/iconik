import { getData } from '@/services/getData'
import { SocialLink } from '@/components/index';

export default async function SocialAll() {

    const footerSocialList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}footerSocialList`)

    return (
        <ul className="footer__social">
            {footerSocialList.map(link => {
                return <li
                    key={link.id}
                    className="footer__social-item"
                >
                    <SocialLink link={link} />
                </li>
            })}
        </ul>
    )
}
