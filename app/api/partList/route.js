import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const partList = [
        {
            id: uuidv4(),
            title: 'You leave a request online',
            path: '/images/home/part/1.webp',
            index: '1'
        },
        {
            id: uuidv4(),
            title: 'Consultation with the manager',
            path: '/images/home/part/2.webp',
            index: '2'
        },
        {
            id: uuidv4(),
            title: 'Presentation or discussion of conditions remotely',
            path: '/images/home/part/3.webp',
            index: '3'
        },
        {
            id: uuidv4(),
            title: 'We conclude a contract',
            path: '/images/home/part/4.webp',
            index: '4'
        },
        {
            id: uuidv4(),
            title: 'You enjoy all the benefits of membership',
            path: '/images/home/part/5.webp',
            index: '5'
        },
    ]

    return new Response(JSON.stringify(partList))
}
