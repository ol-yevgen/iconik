import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const paginationSliderAbout = [
        {
            id: uuidv4(),
            path: '/images/about/why/3.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/why/1.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/why/2.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/why/4.jpg',
        },
        {
            id: uuidv4(),
            path: '/images/about/why/5.jpg',
        },
    ]

    return new Response(JSON.stringify(paginationSliderAbout))
}
