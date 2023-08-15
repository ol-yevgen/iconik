'use client'

import {useState, useEffect, useCallback } from "react"

export const HeaderBackground = () => {
    const [windowScrollY, setWindowScrollY] = useState(0)

    const scroll = useCallback(() => {
        setWindowScrollY(scrollY)
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        };
    }, [scroll])

   return (
       <div className={`${windowScrollY > 30 ? "header__scrolled" : ''}`}></div>
   )
}
