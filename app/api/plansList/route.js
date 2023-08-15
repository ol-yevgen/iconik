import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const plansList = [
        {
            id: uuidv4(),
            title: 'basic',
            path: '/images/home/plans/plan-header.webp',
            activePlans: [
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Members Experience Portal'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Concierge services Complimentary'
                },
                {
                    id: uuidv4(),
                    plan: 'iKoins to spend on Dezerved platform (on a yearly basis) Complimentary iKoins to spend on iconiK'
                }
            ],
            disabledPlans: [
                {
                    id: uuidv4(),
                    plan: 'Worldwide (on a yearly basis)'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary VIP meet & greet services'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary airport pick up and drop off'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Lifestyle services'
                }
            ]
        },
        {
            id: uuidv4(),
            title: 'standard',
            path: '/images/home/plans/plan-header.webp',
            activePlans: [
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Members Experience Portal'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Concierge services Complimentary'
                },
                {
                    id: uuidv4(),
                    plan: 'iKoins to spend on Dezerved platform (on a yearly basis) Complimentary iKoins to spend on iconiK'
                }
            ],
            disabledPlans: [
                {
                    id: uuidv4(),
                    plan: 'Worldwide (on a yearly basis)'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary VIP meet & greet services'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary airport pick up and drop off'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Lifestyle services'
                }
            ]
        },
        {
            id: uuidv4(),
            title: 'individual',
            path: '/images/home/plans/plan-header.webp',
            activePlans: [
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Members Experience Portal'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Concierge services Complimentary'
                },
                {
                    id: uuidv4(),
                    plan: 'iKoins to spend on Dezerved platform (on a yearly basis) Complimentary iKoins to spend on iconiK'
                }
            ],
            disabledPlans: [
                {
                    id: uuidv4(),
                    plan: 'Worldwide (on a yearly basis)'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary VIP meet & greet services'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary airport pick up and drop off'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Lifestyle services'
                }
            ]
        },
        {
            id: uuidv4(),
            title: 'super star',
            path: '/images/home/plans/plan-header.webp',
            activePlans: [
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Members Experience Portal'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Concierge services Complimentary'
                },
                {
                    id: uuidv4(),
                    plan: 'iKoins to spend on Dezerved platform (on a yearly basis) Complimentary iKoins to spend on iconiK'
                }
            ],
            disabledPlans: [
                {
                    id: uuidv4(),
                    plan: 'Worldwide (on a yearly basis)'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary VIP meet & greet services'
                },
                {
                    id: uuidv4(),
                    plan: 'Complimentary airport pick up and drop off'
                },
                {
                    id: uuidv4(),
                    plan: 'Access to iconiK Lifestyle services'
                }
            ]
        },
    ]

    return new Response(JSON.stringify(plansList))
}
