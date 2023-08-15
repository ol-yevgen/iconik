import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const eventsList = [
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/home/events/1.webp',
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/home/events/2.webp',
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/home/events/1.webp',
        },
    ]

    return new Response(JSON.stringify(eventsList))
}
