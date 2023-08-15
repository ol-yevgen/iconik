import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const galleryList = [
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-1.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-2.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-3.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-4.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-5.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-6.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-7.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-8.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-9.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-10.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/home/gallery/gallery-11.jpg',
        },
    ]

    return new Response(JSON.stringify(galleryList))
}
