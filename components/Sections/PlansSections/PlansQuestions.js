import Image from 'next/image';
import { getData } from '@/services/getData';
import { SectionTitle, Questions, Button } from "@/components/index";
import questionPic from "/public/images/plans/questions/questions.jpg"

export default async function PlansQuestions() {
    const questionsList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}questions`)

    return (
        <section
            className='plans__question'
        >
            <div className="questions__container">
                <div className='questions__left'>
                    <SectionTitle
                        title='Frequently asked Questions'
                        className='questions__title'
                    />
                    <span className='questions__left-line'></span>
                    <div className='questions__image' >
                        <Image src={questionPic} width={370} height={470} alt="question" />
                        <div className='questions__ask'>
                            <h6>{`Didn't find the answer to your question? Our managers will be happy to help you`}</h6>
                            <Button text='Ask a Question' link='/contacts' className='questions__btn' style={ {}}/>
                        </div>
                    </div>

                </div>

                <div className='questions__right'>
                    <ul className='questions__list'>
                        {questionsList.map(question => {
                            return <li
                                key={question.id}
                                className='questions__list-item'
                            >
                                <Questions
                                    title={question.title}
                                    text={question.question}
                                />
                            </li>
                        })}
                    </ul>
                </div>
            </div>

        </section>
    )
}