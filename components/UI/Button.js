'use client'
import Link from "next/link";
import '../../app/styles/ui/button.scss';

export const Button = (props) => {
    const { text, link, className, style } = props;
    return (
        <Link
            href={link}
            className={`btn ${className}`}
            style={style}
        >{text}</Link>
    )
}