import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const galleryInner = [
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Party',
            text: 'Leave a request and our managers will select the ideal tariff plan for you, as well as provide the best vacation in the most vibrant city Dubai',
            images: [
                {
                    id: uuidv4(),
                    path: '/images/gallery/5.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/party/2.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/experience/1.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/party/4.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/party/5.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/party/6.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/party/7.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/gallery/inner/party/2.jpg',
                },
            ]
        },
    ]

    return new Response(JSON.stringify(galleryInner))
}
