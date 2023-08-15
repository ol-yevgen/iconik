import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const socialGalleryList = [
        {
            id: uuidv4(),
            path: '/images/home/social/party1.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/sunset.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/party.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/hotel.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/unsplash.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/pool.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/party1.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/sunset.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/party.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/hotel.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/unsplash.webp',
        },
        {
            id: uuidv4(),
            path: '/images/home/social/pool.webp',
        },
    ]

    return new Response(JSON.stringify(socialGalleryList))
}
