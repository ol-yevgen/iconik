import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const plansGallery = [
        {
            id: uuidv4(),
            path: '/images/plans/gallery/1.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/plans/gallery/2.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/plans/gallery/3.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/plans/gallery/4.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/plans/gallery/5.jpg',
        },
    ]

    return new Response(JSON.stringify(plansGallery))
}
