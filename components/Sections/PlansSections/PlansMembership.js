import { Button } from "@/components/index";

export default function PlansMembership({ bgImage, title, contentClass, titleClass }) {
    return (
        <section
            className={`hero ${bgImage}`}
        >
            <div className={`hero__content ${contentClass}`}>
                <h2 className={titleClass}>
                    {title.toUpperCase()}
                </h2>
                <div className="hero__play">
                    <Button
                        text='Get free consultation'
                        link='/contacts'
                        className='included__btn'
                        style={{}}
                    />
                </div>
            </div>

        </section>
    )
}