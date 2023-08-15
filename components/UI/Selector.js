'use client'
import { useState, useContext } from 'react';
import { Context } from '@/helpers/context';

import Image from 'next/image';

import '../../app/styles/ui/selector.scss';

export const Selector = ({ data, style, changeActiveFilter}) => {
    const setStartPhone = useContext(Context)
    const [arr, setArr] = useState(data)
    const [selectorToggle, setSelectorToggle] = useState(false)

    const onToggleSelector = () => () => {
        setSelectorToggle(!selectorToggle)
    }

    const changeSelector = (link) => () => {
        const remainSelectors = arr.filter(item => link.label !== item.label)
        setArr([link, ...remainSelectors])
        setSelectorToggle(!selectorToggle)
        changeActiveFilter(link.label)
        if (link.path) {
            setStartPhone(link.label)
        }
    }

    return (
        <ul className={`selector ${selectorToggle ? 'selector-open' : 'selector-close'} ${style}`}>
            <li className="selector-first  "
                onClick={onToggleSelector()}
            >
                {arr[0].path
                    ? <Image
                        src={arr[0].path}
                        width={29}
                        height={23}
                        className='selector__image'
                        alt={arr[0].alt} />
                    : null}
                {arr[0].path ? null : arr[0].label}
                <span className={`selector__arrow ${selectorToggle ? 'selector__arrow-up' : 'selector__arrow-down'}`}></span>
            </li >
            {
                selectorToggle
                    ? <div className={`selector-show ${selectorToggle ? 'selector-open' : 'selector-close'}`}>
                        {arr.slice(1).map(link => {
                            return <li
                                key={link.id}
                                className="selector-item"
                                onClick={changeSelector(link)}
                            >
                                {link.path
                                    ? <Image
                                        src={link.path}
                                        width={29}
                                        height={23}
                                        className='selector__image'
                                        alt={link.alt} />
                                    : null}
                                <span>{link.label}</span>
                            </li>
                        })
                        }
                    </div>
                    : null
            }

        </ul >
    )
}

