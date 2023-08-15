import Image from "next/image"
import { Fragment } from "react"
import { SectionTitle } from "@/components/index"

export default function ServiceInnerIncluded({ data }) {
    return (
        <section className="service__inner-included">
            <SectionTitle
                title={data.serviceIncludedTitle}
                className='section__title-mt0'
            />
            <ul className='service__included '>
                {data.serviceIncludedList.map(part => {
                    return <Fragment key={part.id}>
                        <li
                            className='service__included-item'
                        >
                            <div className='service__included-image'>
                                <Image
                                    src={part.path}
                                    width={220}
                                    height={220}
                                    alt='pic' />
                            </div>
                            <h5 className=''>
                                {part.label}
                            </h5>
                        </li>

                    </Fragment>
                })}
            </ul>
        </section>
    )
}
