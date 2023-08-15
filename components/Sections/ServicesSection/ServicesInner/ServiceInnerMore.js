import { TextWithSliderSection, SectionTitle, SectionText} from "@/components/index"

export default function ServiceInnerMore({ data }) {
    return (
        <section className="service__inner-more">
            <div
                className="service__more-container"
            >
                <SectionTitle
                    title={data.serviceMoreTitle}
                    className='section__title-mt0 section__title-start section__title-more'
                />
                <TextWithSliderSection
                    mainTitle={false}
                    mainTitleText=''
                    bg={false}
                    reverse=''
                    title=''
                    text1={<SectionText
                        style=''
                        text={data.serviceMoreText}
                    />}
                    text2=''
                    picture={true}
                    picSrc={data.serviceMorePic}
                    play={false}
                    line={true}
                    slider={false}
                />
            </div>
        </section>
    )
}
