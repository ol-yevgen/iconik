import Image from 'next/image';
import { SectionTitle, PlayButton } from '@/components/index';

export default async function TextWithSliderSection(
    { bg,
        mainTitle,
        mainTitleText,
        reverse,
        title,
        text1,
        text2,
        picture,
        picSrc,
        play,
        line,
        slider }) {

    return (
        <section className='common'>
            {mainTitle
                ? <SectionTitle
                    title={mainTitleText}
                    className='section__title-contacts'
                />
                : null}
            <div className={`common__container ${reverse}`}>
                {bg ? <div className='common-bg'></div> : null}
                {picture
                    ? <div className="common__slider">
                        <Image
                            src={picSrc}
                            width={945}
                            height={700}
                            className='common__image'
                            alt='photo' />
                        {play
                            ? <PlayButton
                                white='white'
                                className='play__transparent play__contacts' />
                            : null}
                    </div>

                    : slider
                }

                <div className="common__content">
                    {title}
                    {line
                        ? <span className='questions__left-line'></span>
                    : null}
                    <div className='common__content-text' >
                        {text1}
                        {text2}
                    </div>

                </div>

            </div>
        </section>
    )
}