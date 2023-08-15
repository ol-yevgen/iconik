import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const offerList = [
        {
            id: uuidv4(),
            title: 'man',
            path: '/images/home/offer/man.webp',
            link: '/man'
        },
        {
            id: uuidv4(),
            title: 'woman',
            path: '/images/home/offer/woman.webp',
            link: '/man'
        },
        {
            id: uuidv4(),
            title: 'family',
            path: '/images/home/offer/family.webp',
            link: '/man'
        },
    ]

    return new Response(JSON.stringify(offerList))
}
