import { useState, useEffect } from "react"

export const useActiveFilter = (data) => {
    const [activeFilter, setActiveFilter] = useState('all services')
    const [services, setServices] = useState(data)

    useEffect(() => {
        if (activeFilter !== 'all services') {
            setServices([...data.filter(item => item.filter === activeFilter)])
        } else {
            setServices(data)
        }
    }, [activeFilter, data])

    return { activeFilter, services, setActiveFilter }
}