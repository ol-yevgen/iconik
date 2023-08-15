import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const footerSocialList = [
        {
            id: uuidv4(),
            alt: 'instagtam',
            link: 'https://www.instagram.com/',
            icon: '/images/footer/instagram.svg',
            iconHovered: '/images/footer/instagramHovered.svg'
        },
        {
            id: uuidv4(),
            alt: 'telegram',
            link: 'https://telegram.org/',
            icon: '/images/footer/telegram.svg',
            iconHovered: '/images/footer/telegramHovered.svg'
        },
        {
            id: uuidv4(),
            alt: 'facebook',
            link: 'https://www.facebook.com/',
            icon: '/images/footer/facebook.svg',
            iconHovered: '/images/footer/facebookHovered.svg'
        },
        {
            id: uuidv4(),
            alt: 'linkedin',
            link: 'https://www.linkedin.com/',
            icon: '/images/footer/linkedin.svg',
            iconHovered: '/images/footer/linkedinHovered.svg'
        },
        {
            id: uuidv4(),
            alt: 'email',
            link: 'https://mail.google.com/',
            icon: '/images/footer/mail.svg',
            iconHovered: '/images/footer/mailHovered.svg'
        },
    ]

    return new Response(JSON.stringify(footerSocialList))
}
