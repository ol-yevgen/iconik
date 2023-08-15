'use client'
import { useEffect, useState } from "react";
import { useResize } from "@/hooks/useResize";

import { Navigation, Button, Selector, Burger, SlideBar } from "../index";

export function Menu({ navLinksData, langData }) {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const openCloseMenu = () => () => {
        setBurgerMenu(!burgerMenu)
    }

    const windowWidth = useResize()

    useEffect(() => {
        const bodyScrollToggle = document.querySelector('html')
        if (burgerMenu) {
            bodyScrollToggle.classList.add('scrollOff')
        }

        return () => bodyScrollToggle.classList.remove('scrollOff')
    }, [burgerMenu])

    return (
        windowWidth.isScreenXl
            ? <nav className="header__menu">
                <Navigation navLinks={navLinksData} />
                <div className="header__consultation">
                    <Button
                        text="Get a consultation"
                        link='/contacts'
                        className=''
                    />
                </div>
                <div className="header__lang">
                    <Selector
                        data={langData}
                        style=''
                        changeActiveFilter={() => { }}
                    />
                </div>
            </nav>
            : <>
                {
                    burgerMenu
                        ? <SlideBar
                            navLinks={navLinksData}
                            data={langData}
                            openCloseMenu={openCloseMenu}
                        />
                        : null
                }
                <div className="header__lang">
                    <Burger
                        burgerMenu={burgerMenu}
                        openCloseMenu={openCloseMenu}
                    />

                </div>
            </>

    )
}
