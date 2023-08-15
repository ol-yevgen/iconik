import { getData } from '@/services/getData';
import { SectionTitle, PartSectionItem } from '../../index';

export default async function HomePart({title}) {
    const partList = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}partList`)

    return (
        <section className='wrapper'>
            <div>
                <SectionTitle
                    title={title}
                    className=''
                />
            </div>
            <div className='container'>
                <ul className='part '>
                    <PartSectionItem data={partList} />
                </ul>
            </div>
        </section>
    )
}
