'use client'

import { useState } from "react";
import Link from "next/link"
import Image from "next/image";

export const SocialLink = ({link}) => {
    const [hover, setHover] = useState(false)

   return (
       <Link
           href={link.link}
           target='_blank'
           className="footer__social-link"
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
       >
           {hover
               ? <Image
                   className="footer__social-icon"
                   src={link.iconHovered}
                   width={16}
                   height={16}
                   alt={link.alt}
               />
               : <Image
                   className="footer__social-icon"
                   src={link.icon}
                   width={16}
                   height={16}
                   alt={link.alt}
               />
           }

       </Link>
   )
}