import { getData } from '@/services/getData';
import { SectionTitle } from '../../index';

import { ManagersCards } from '@/components/component/ManagersCards';

export default async function HomeManagers() {
    const managersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}managersList`)

    return (
        <section className='wrapper'>
            <div className='container container__managers'>
                <SectionTitle
                    title={'Iconik managers will provide you with the best experience'}
                    className=''
                />
                <ManagersCards data={managersData} />
            </div>
        </section>
    )
}
