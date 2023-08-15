import Link from "next/link";
import Image from "next/image";
import { getData } from '@/services/getData'

import { Menu } from "../index";
import { HeaderBackground } from "../UI/HeaderBackground";

import logo from '../../public/images/logo.svg'

export default async function Header() {

    const navLinksData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}navLinks`)
    const langData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}langList`)

    return (
        <header className='header' >
            <HeaderBackground/>
            <div className='header__content'>
                <div className='header__logo'>
                    <Link href="/"
                    >
                        <Image
                            src={logo}
                            width={220}
                            height={33}
                            className="logo"
                            alt="logo" />
                    </Link>
                </div>
                <Menu
                    langData={langData}
                    navLinksData={navLinksData}
                />
                
            </div>
            
        </header>
    )
}
