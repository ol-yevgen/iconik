'use client'
import Image from "next/image";
import { Selector } from "@/components/index";
import '../../app/styles/ui/servicesFilters.scss';
import serviceFiltersIcon from "../../public/images/services/ic-services.svg"

export const ServicesGalleryFilters = ({activeFilter, servicesLength, allDataLength, filtersData, setActiveFilter }) => {

    const changeActiveFilter = (currentFilter) => {
        setActiveFilter(currentFilter)
    }

    return (
        <div className="services__filters">
            <div className="services__filters-left">
                <span className="services__filters-dec">
                    <Image src={serviceFiltersIcon} width={16} height={16} alt="services"/>
                </span>
                <Selector
                    data={filtersData}
                    style='selector__filters selector__filters-services'
                    changeActiveFilter={changeActiveFilter}
                />
            </div>
            <span >{`Found ${activeFilter === 'all services' ? allDataLength : servicesLength} services`}</span>
        </div>
    )
}