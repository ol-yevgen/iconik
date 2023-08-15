'use client'
import Link from 'next/link'
import { useResize } from "@/hooks/useResize";
import { useState } from 'react';

export const FooterLinks = ({ list }) => {
    const [open, setOpen] = useState(false)
    const windowWidth = useResize()

    const renderLinksList = (listLink) => {
        return listLink.links.map(link => {
            return <li
                key={link.id}
                className='footer__list-item'
                onClick={() => setOpen(false)}
            >
                <span className='main__text-6'>
                    <Link href={link.path}>
                        {link.label}
                    </Link>
                </span>

            </li>
        })
    }

    const listLinks = renderLinksList(list)

    return (
        <ul
            className='footer__list'
        >
            <li className={`footer__list-title main__text-2 ${open ? '' : "footer__list-mb"}`}
                onClick={() => setOpen(!open)}
            >
                <span>{list.title}</span>
                {windowWidth.isScreenMd
                    ? null
                    : open
                        ? <span className='minus'></span>
                        : <span className='plus'></span>
                }
            </li>
            {windowWidth.isScreenMd
                ? listLinks
                : open
                    ? listLinks
                    : null
            }
        </ul>
    )
}
