import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const servicesFilters = [
        { id: uuidv4(), label: 'all services'},
        { id: uuidv4(), label: 'dine'},
        { id: uuidv4(), label: 'ride'},
        { id: uuidv4(), label: 'discover'},
        { id: uuidv4(), label: 'relax'},
        { id: uuidv4(), label: 'experience'}
    ]

    return new Response(JSON.stringify(servicesFilters))
}