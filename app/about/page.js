import { AboutGallery, AboutWho, AboutWhy, AboutContact, HomePlans, SectionTitle, SectionText } from "@/components/index"

export const metadata = {
    title: 'About | Iconik',
}

export default function About() {
    return (
        <>
            <AboutGallery />
            <AboutWho />
            <AboutWhy />
            <AboutContact
                className=''
                title={
                    <SectionTitle
                        title='The contact person'
                        className='section__title-form'
                    />}
                text={<SectionText
                    style='section__text-left'
                    text='Here is the speech of the contact person, or other additional information... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...' />}
                form={false}
                formClass=''
            />
            <HomePlans
                title='our products'
                className='about__plans-bg'
            />
        </>
    )
}
