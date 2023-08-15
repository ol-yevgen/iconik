'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import servicesIcon from "../../public/icons/ic-services.svg"

export const Navigation = ({ navLinks }) => {
    const pathname = usePathname()
    return (
        <ul>{navLinks.map(link => {
            const isActive = pathname === link.href
            const servicesLabel = link.label === 'Services'

            return <li key={link.label} className={servicesLabel ? "header__services" : ""}>
                <Link
                    href={link.href}
                    className={isActive ? "active nav" : "nav"}
                >
                    {servicesLabel ? <Image src={servicesIcon} className="services-icon" alt="services" /> : null}
                    {link.label.toUpperCase()}
                </Link>
            </li>
        })}</ul>
    )
}