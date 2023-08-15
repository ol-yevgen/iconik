import { getData } from '@/services/getData';
import {ConsultationForm, FullForm} from '@/components/index';

export default async function AboutContact({title, text, className, form, formClass}) {
    const phoneCodesData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}phoneCodeList`)

    return (
        <section className={`about__contact ${className}`}>
            <div className='about__contact-content'>
                <div className='about__contact-manager'>
                    <div className='contact__manager'>
                        <span >Aliya Mir</span>
                        <span className='contact__manager-position text'>CEO IconiK</span>
                    </div>
                </div>
                
                <div className={`about__form ${formClass}`}>
                    <div className='about__form-title'>
                        {title}
                        {text}
                    </div>
                    <div className='consultation__form'>
                        <div className='consultation__form-decoration consultation__form-decoration--contacts'></div>
                        {form
                            ? <FullForm phoneCodesData={phoneCodesData} />
                            : <ConsultationForm phoneCodesData={phoneCodesData} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
