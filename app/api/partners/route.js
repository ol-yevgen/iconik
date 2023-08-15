import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const partners = [
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo1.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo2.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo3.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo1.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo2.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo3.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo1.png',
        },
        {
            id: uuidv4(),
            path: '/images/plans/choose/logo2.png',
        },
    ]

    return new Response(JSON.stringify(partners))
}
