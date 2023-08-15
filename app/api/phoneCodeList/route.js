import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const phoneCodeList = [
        {
            id: uuidv4(),
            alt: 'usa',
            label: '+1',
            path: '/images/home/consultation/flags/usa.png',
        },
        {
            id: uuidv4(),
            alt: 'ukr',
            label: '+38',
            path: '/images/home/consultation/flags/ukraine.png',
        },
        {
            id: uuidv4(),
            alt: 'uae',
            label: '+971',
            path: '/images/home/consultation/flags/uae.png',
        },
        {
            id: uuidv4(),
            alt: 'chi',
            label: '+86',
            path: '/images/home/consultation/flags/china.png',
        },
    ]

    return new Response(JSON.stringify(phoneCodeList))
}
