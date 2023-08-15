'use client'
import { useResize } from "@/hooks/useResize";
import { Fragment } from "react";

export const PartSectionItem = ({data}) => {
    const windowWidth = useResize()

    return (
        data.map(part => {
            return <Fragment key={part.id}>
                <li
                    
                    className={`part__item part__item-${part.index}`}
                >
                    <div className='part__image'
                        style={{ backgroundImage: `url(${part.path})` }}>
                        <div className='part__image-gradient'>
                            {windowWidth.isScreenLg
                                ? <span className='main__next-5 part__title'>{part.title}</span>
                                : null
                            }
                        </div>
                        <span className='part__image-index'>{part.index}</span>
                    </div>

                </li>
                {!windowWidth.isScreenLg
                    ? <span className='main__next-5 part__title part__title-mobile'>{part.title}</span>
                    : null
                }
            </Fragment>
        })
   )
}