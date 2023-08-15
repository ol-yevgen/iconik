import { SectionTitle, ServiceInfo, Button } from "@/components/index"

export default function ServiceInnerHero({ data }) {
    return (
        <section className="service__inner-hero">
            <div
                className="service__inner-bg"
                style={{ backgroundImage: `url(${data.bgHero})` }}
            >
                <SectionTitle
                    title={data.mainTitle}
                    className='section__title-inner'
                />
            </div>
            <div className="service__inner-info">
                <ServiceInfo data={data} />
            </div>
        </section>
    )
}
