import { SectionTitle, ServiceInfo } from "@/components/index"

export default function ServiceInnerInfo({ data }) {
    return (
        <section className="service__inner-hero">
            <div
                className="service__inner-bg service__info-bg"
                style={{ backgroundImage: `url(${data.serviceInfoBg})` }}
            >
                <div className="service__info-container">
                    <SectionTitle
                        title={data.serviceInfoTitle}
                        className=''
                    />
                    <div className="service__info-content">
                        <ServiceInfo data={data} />
                    </div>
                </div>
            </div>
        </section>
    )
}
