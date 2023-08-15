import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const langList = [
        {
            id: uuidv4(),
            label: 'Eng'
        },
        {
            id: uuidv4(),
            label: 'Ukr'
        },
        {
            id: uuidv4(),
            label: 'Ara'
        },
        {
            id: uuidv4(),
            label: 'Chi'
        },
    ]

    return new Response(JSON.stringify(langList))
}