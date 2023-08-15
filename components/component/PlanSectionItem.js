'use client'
import { useState } from "react"
import { useResize } from "@/hooks/useResize";

import { checkMark, disabledMark } from '@/public/icons/checkMark';

export const PlanSectionItem = ({ plan }) => {
    const [show, setShow] = useState(false)
    const windowWidth = useResize()

    const renderDisabledList = (disabledItem) => {
        return (
            disabledItem.disabledPlans.map(item => {
                return <li
                    key={item.id}
                    className='plan__item plan__disabled'
                >
                    <div>{disabledMark}</div>
                    <div className='plan__text main__text'>{item.plan}</div>
                </li>
            })
        )
    }

    return (
        <>
            {
                plan.activePlans.map(item => {
                    return <li
                        key={item.id}
                        className='plan__item plan__active'
                    >
                        <div>{checkMark}</div>
                        <div className='plan__text'>{item.plan}</div>
                    </li>
                })
            }

            {
                show
                    ? renderDisabledList(plan)
                    : null
            }
            {
                windowWidth.isScreenLg
                    ? renderDisabledList(plan)
                    : <button
                        className="plan__all main__text-2"
                        onClick={() => setShow(!show)}>
                        
                        {show
                            ? <div className="plan__all-btn">
                                <span className="plan__all-short icon"></span>
                                <span>VIEW SHORT FEATURES</span>
                            </div>
                            : <div className="plan__all-btn">
                                <span className="plan__all-all"></span>
                                <span>VIEW ALL FEATURES</span>
                            </div>
                        }
                    </button>
            }
        </>
    )
}