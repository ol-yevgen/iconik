'use client'
import { useResize } from "@/hooks/useResize";
import { Selector } from "../index";
import '../../app/styles/ui/servicesFilters.scss';

export const ServicesFilters = ({ activeFilter, filtersData, setActiveFilter}) => {
    
    const windowWidth = useResize()

    const changeActiveFilter = (currentFilter) => {
        setActiveFilter(currentFilter)
    }

    return (
        windowWidth.isScreenLg 
            ? <ul className="filters">
                {filtersData.map(filter => {
                    return <li
                        key={filter.id}
                        className={`filters__item ${filter.label === activeFilter ? 'filter-active' : ''}`}
                        onClick={() => changeActiveFilter(filter.label)}
                    >
                        {filter.label.split(' ')[0].toUpperCase()}
                    </li>
                })}
            </ul>
            : <Selector
                data={filtersData}
                style='selector__filters'
                changeActiveFilter={changeActiveFilter}
            />
    )
}