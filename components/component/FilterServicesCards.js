'use client'

import { useActiveFilter } from "@/hooks/useActiveFilter";
import { ServicesFilters, ServicesCards } from "@/components/index";

function FilterServicesCards({ servicesFiltersData, servicesData }) {
    const { services, activeFilter, setActiveFilter } = useActiveFilter(servicesData)

    return (
        <>
            <ServicesFilters
                activeFilter={activeFilter}
                filtersData={servicesFiltersData}
                setActiveFilter={setActiveFilter}
            />
            <ServicesCards
                data={services}
                className=''
                slider={true}
            />
        </>
    )
}

export default FilterServicesCards