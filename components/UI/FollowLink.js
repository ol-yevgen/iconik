'use client'
import Link from "next/link"
import { useResize } from "@/hooks/useResize";


export const FollowLink = () => {
    const windowWidth = useResize()

    return (
        <Link href='https://www.instagram.com/' target='_blank'>
            {windowWidth.isScreenL ? "Follow" : "+"}
        </Link>
   )
}