import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const servicesInner = [
        {
            id: uuidv4(),
            bgHero: '/images/services/inner/ride/slider/3.jpg',
            mainTitle: 'rent a ferrari f8 with exclusive pricing from uptown luxury cars',
            serviceInfo: [
                {
                    id: uuidv4(),
                    label: 'location',
                    info1: 'Zaya Nurai Island,',
                    info2: 'Abu Dhabi'
                },
                {
                    id: uuidv4(),
                    label: 'DATE AND TIME',
                    info1: 'June 20, 2023',
                    info2: '5: 30 PM - 11:00 PM'
                },
                {
                    id: uuidv4(),
                    label: 'Admission',
                    info1: 'USD 50,00 per person',
                    info2: 'USD 150.00 per person',
                }
            ],
            sliderTitle: 'The ride',
            text1: 'Promising the perfect backdrop to brunch with endless views over the ocean, Frangipani on Zaya Nurai Island welcomes you to its Friday feast, served both al fresco and indoors every weekend. You can now reserve your table online for a special price as a MyConcierge member. But brunch here is not all about the food. You also enjoy a speedboat ride to the island from the welcome centre on Saadiyat Island and back, as well as all-day access to the resort’s private beach and pool.',
            text2: 'If you’re looking for an island getaway at an exotic locale not too far from home, Zaya Nurai Island certainly fits the bill.Situated off the coast of Saadiyat Island, Abu Dhabi, the private island resort is the closest you can get to a slice of paradise in the UAE',
            images: [
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/4.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/1.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/2.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/3.jpg',
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/5.jpg',
                },
            ],
            serviceMoreTitle: 'the private island resort is the closest you can get to a slice of paradise in the UAE',
            serviceMoreText: 'Time stands still on the island. The sight of crystal clear water pervading you everywhere you look, the calming sounds of waves breaking at shore, the cool sea breeze and carpets of green grass, paint the perfect picture for a memorable daycation. Feel free to head to the beach for a stroll along the white sands and dip your toes in the bright blue waters. Lounge by the infinity pool or take a dip if you wish, you’ll never tire of the view. And if the little ones are accompanying you, they can keep busy at their very own kids’ club.',
            serviceMorePic: '/images/services/inner/ride/slider/5.jpg',
            serviceIncludedTitle: 'What’s Included',
            serviceIncludedList: [
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/1.jpg',
                    label: 'International dishes for brunch'
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/3.jpg',
                    label: 'Choice between packages for soft drinks, house beverages and Champagne'
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/experience/included/3.jpg',
                    label: 'Speedboat transfers to and from the island'
                },
                {
                    id: uuidv4(),
                    path: '/images/services/inner/ride/slider/4.jpg',
                    label: 'All-day beach and pool access'
                },
            ],
            detailTitle: 'the private island resort is the closest you can get to a slice of paradise in the UAE',
            detailText: 'Time stands still on the island. The sight of crystal clear water pervading you everywhere you look, the calming sounds of waves breaking at shore, the cool sea breeze and carpets of green grass, paint the perfect picture for a memorable daycation. Feel free to head to the beach for a stroll along the white sands and dip your toes in the bright blue waters. Lounge by the infinity pool or take a dip if you wish, you’ll never tire of the view. And if the little ones are accompanying you, they can keep busy at their very own kids’ club.',
            serviceInfoBg: '/images/services/inner/ride/slider/2.jpg',
            serviceInfoTitle: 'Take part in the event with a stunning discount',
        },
    ]

    return new Response(JSON.stringify(servicesInner))
}
