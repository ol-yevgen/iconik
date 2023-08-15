import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const galleryList = [
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-1.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-2.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-3.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-4.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-5.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-6.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-7.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-8.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-9.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-10.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-11.webp',
        },
    ]

    return new Response(JSON.stringify(galleryList))
}
