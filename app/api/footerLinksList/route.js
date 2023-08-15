import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const footerLinksList = [
        {
            id: uuidv4(),
            title: 'SERVICES',
            links: [
                {
                    id: uuidv4(),
                    label: 'Events',
                    path: '/services',
                },
                {
                    id: uuidv4(),
                    label: 'Dine',
                    path: '/services/dine',
                },
                {
                    id: uuidv4(),
                    label: 'Ride',
                    path: '/services/ride',
                },
                {
                    id: uuidv4(),
                    label: 'Discover',
                    path: '/services/discover',
                },
                {
                    id: uuidv4(),
                    label: 'Relax',
                    path: '/services/relax',
                },
                {
                    id: uuidv4(),
                    label: 'Experience',
                    path: '/services/experience',
                },
            ]
        },
        {
            id: uuidv4(),
            title: 'EXPLORE',
            links: [
                {
                    id: uuidv4(),
                    label: 'Plans',
                    path: '/plans',
                },
                {
                    id: uuidv4(),
                    label: 'About',
                    path: '/about',
                },
                {
                    id: uuidv4(),
                    label: 'Gallery',
                    path: '/gallery',
                },
                {
                    id: uuidv4(),
                    label: 'Contacts',
                    path: '/contacts',
                },
                {
                    id: uuidv4(),
                    label: 'Privacy policy',
                    path: '/about',
                },
            ]
        },
        {
            id: uuidv4(),
            title: 'OFFERS FOR YOU',
            links: [
                {
                    id: uuidv4(),
                    label: 'For man',
                    path: '/plans',
                },
                {
                    id: uuidv4(),
                    label: 'For woman',
                    path: '/plans',
                },
                {
                    id: uuidv4(),
                    label: 'For family',
                    path: '/plans',
                },
            ]
        },
    ]

    return new Response(JSON.stringify(footerLinksList))
}
