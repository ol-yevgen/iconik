import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const aboutGallery = [
        {
            id: uuidv4(),
            path: '/images/about/gallery/1.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/2.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/3.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/4.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/5.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/6.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/7.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/8.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/9.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/gallery/10.jpg',
        },
    ]

    return new Response(JSON.stringify(aboutGallery))
}
