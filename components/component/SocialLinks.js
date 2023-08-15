import Link from "next/link"
import Image from "next/image"

import arrow from '@/public/images/home/social/arrow-angle.svg'

export default function SocialLink({ socialList }) {

    return (
        <div className='social__links text'>
            {socialList.map(link => {
                return (<Link
                    key={link.id}
                    href={link.link}
                    target="_blank"
                >
                    <button
                        className='social__link'
                        aria-label={`social ${link.title}`}
                    >
                        {link.title}
                        <Image src={arrow} alt='arrow' />
                    </button>
                </Link>
                )
            })}
        </div>
    )
}
