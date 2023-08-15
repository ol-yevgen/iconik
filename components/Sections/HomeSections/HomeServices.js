import { getData } from '@/services/getData';
import { SectionTitle, FilterServicesCards } from '../../index';

export default async function HomeServices() {
    const servicesFiltersData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}filters`)

    const servicesData = await getData(`${process.env.NEXT_PUBLIC_BASIC_API}servicesList`)

    return (
        <section className='wrapper'>
            <SectionTitle title={'popular services'} />
            <FilterServicesCards
                servicesFiltersData={servicesFiltersData}
                servicesData={servicesData}
            />
        </section>
    )
}
