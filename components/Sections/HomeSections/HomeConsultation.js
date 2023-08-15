import { getData } from '@/services/getData';
import { SectionText, ConsultationForm } from '@/components/index';

export default async function HomeConsultation({ title, className }) {
    const phoneCodesData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}phoneCodeList`)

    return (
        <section className={`consultation container-full__width ${className}`}>
            <div className='title__container'>
                <h2>{title}</h2>
                <SectionText
                    style='text__center-small'
                    text='Leave a request and our managers will select the ideal tariff plan for you' />
            </div>
            <div className='consultation__form'>
                <div className='consultation__form-decoration consultation__form-decoration--contacts'></div>
                <ConsultationForm phoneCodesData={phoneCodesData} />
            </div>
        </section>
    )
}
