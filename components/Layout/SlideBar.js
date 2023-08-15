import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Selector } from "../index";

import '@/app/styles/layout/slideBar.scss';

import servicesIcon from "../../public/icons/ic-services.svg"

export const SlideBar = ({ navLinks, data, openCloseMenu }) => {
    const pathname = usePathname()

    return (
        <div className='mobile__menu'>
            <Selector
                data={data}
                style='selector-mobile'
                changeActiveFilter={() => {}}
            />

            <ul >
                {navLinks.map(link => {
                    const isActive = pathname === link.href
                    const servicesLabel = link.label === 'Services'

                    return <li
                        key={link.label}
                        className='mobile__menu-item'
                    >
                        <Link
                            href={link.href}
                            className={isActive ? "active nav" : "nav"}
                            onClick={openCloseMenu()}
                        >
                            {servicesLabel ? <Image src={servicesIcon} className="services-icon" alt="services" /> : null}
                            <h3>{link.label.toUpperCase()}</h3>
                        </Link>
                    </li>
                })}

            </ul>

        </div>
                
    )
}