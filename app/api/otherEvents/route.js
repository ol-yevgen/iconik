import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const otherEvents = [
        {
            id: uuidv4(),
            title: '99-minute Speed-boat Tour with The Yellow Boats',
            href: '/images/services/list/1.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'boat',
            time: '1',
            filter: 'ride'
        },
        {
            id: uuidv4(),
            title: 'Take off on a private dune buggy adventure through the desert',
            href: '/images/services/list/2.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'buggy',
            time: '1',
            filter: 'ride'
        },
        {
            id: uuidv4(),
            title: 'Beach and pool access at Zaya Nurai Island, Abu Dhabi',
            href: '/images/services/list/3.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'island',
            time: '1',
            filter: 'discover'
        },
        {
            id: uuidv4(),
            title: 'Spa Treatments with Beach & Pool Access and Lunch at Aloft Palm ...',
            href: '/images/services/list/4.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'spa',
            time: '1',
            filter: 'relax'
        },
        {
            id: uuidv4(),
            title: 'Dinner in the Sky Weekday Packages',
            href: '/images/services/list/5.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'dinner',
            time: '1',
            filter: 'dine'
        },
        {
            id: uuidv4(),
            title: 'rent a ferrari f8 with exclusive pricing from uptown luxury cars',
            href: '/images/home/services/service-ferrari.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'ferrari',
            time: '1',
            filter: 'ride'
        },
        {
            id: uuidv4(),
            title: 'brunch with pool access at rooftop, the burj club',
            href: '/images/home/services/service-pool.jpg',
            price: '2,000.00',
            discount: '4,000.00',
            currency: 'USD',
            alt: 'pool',
            time: '1',
            filter: 'relax'
        },
    ]

    return new Response(JSON.stringify(otherEvents))
}
