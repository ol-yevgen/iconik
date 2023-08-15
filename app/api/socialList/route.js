import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const socialList = [
        {
            id: uuidv4(),
            title: 'INSTAGRAM',
            link: 'https://www.instagram.com/',
        },
        {
            id: uuidv4(),
            title: 'FACEBOOK',
            link: 'https://www.facebook.com/',
        },
        {
            id: uuidv4(),
            title: 'LINKEDIN',
            link: 'https://www.linkedin.com/',
        },
    ]

    return new Response(JSON.stringify(socialList))
}
