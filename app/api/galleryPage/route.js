import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const galleryPage = [
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/1.jpg',
            filter: 'shopping'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/2.jpg',
            filter: 'relax'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/3.jpg',
            filter: 'party'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/4.jpg',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/5.jpg',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/6.jpg',
            filter: 'party'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/1.jpg',
            filter: 'shopping'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/2.jpg',
            filter: 'relax'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/3.jpg',
            filter: 'party'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/4.jpg',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/5.jpg',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/6.jpg',
            filter: 'party'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/1.jpg',
            filter: 'shopping'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/2.jpg',
            filter: 'relax'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/3.jpg',
            filter: 'party'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/4.jpg',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/5.jpg',
            filter: 'experience'
        },
        {
            id: uuidv4(),
            title: 'Dubai Marina Yacht Tour with Barbecue Lunch - exclusive Yachts',
            path: '/images/gallery/6.jpg',
            filter: 'party'
        },
    ]

    return new Response(JSON.stringify(galleryPage))
}
