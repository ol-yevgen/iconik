'use client'
import { useState } from 'react';

export const Questions = ({ title, text }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className='questions__list-title'
                onClick={() => setOpen(!open)}
            >
                <h5 className={`${open ? 'questions__list-title--active' : ''}`}>{title}</h5>
                <div className={`questions__list-icon ${open ? 'questions__list-icon--active' : ''}`} >
                    <span>+</span>
                </div>
            </div>
            {open
            ? <p>{text}</p>
            : null}
        </>
    )
}
