import { GetSocial, AboutContact, SectionTitle, SectionText,HomePlans } from "@/components/index"


export const metadata = {
    title: 'Contacts | Iconik',
}

export default function Contacts() {
    return (
        <>
            <GetSocial/>
            <AboutContact
                className='about__contact-contacts'
                title={
                    <SectionTitle
                        title='Contact us'
                        className='section__title-form'
                    />}
                text={<SectionText
                    style='section__text-left'
                    text='Leave a request and we will answer all your questions' />}
                form={true}
                formClass='about__form-contacts'
            />
        </>
    )
}