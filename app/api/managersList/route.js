import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const managersList = [
        {
            id: uuidv4(),
            name: 'Mahammed Naqvi',
            href: '/images/home/managers/manager-1.webp',
            title: 'Iconik lifestyle manager',
        },
        {
            id: uuidv4(),
            name: 'Aliya Mir',
            href: '/images/home/managers/manager-2.webp',
            title: 'Iconik lifestyle manager',
        },
        {
            id: uuidv4(),
            name: 'Unais el-Baccus',
            href: '/images/home/managers/manager-3.webp',
            title: 'Iconik lifestyle manager',
        },
        {
            id: uuidv4(),
            name: 'Mahammed Naqvi',
            href: '/images/home/managers/manager-1.webp',
            title: 'Iconik lifestyle manager',
        },
    ]

    return new Response(JSON.stringify(managersList))
}
