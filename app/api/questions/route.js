import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
    const questions = [
        {
            id: uuidv4(),
            title: 'How can I get a membership?',
            question: 'Making a complaint against this company regarding non-payment, cancellation of contract, incomplete works and faults with building works carried out, and the subsequent costs incurred by bringing in another builder to complete the works. The builders walked out on incomplete works as they wanted to be paid the final payment but we explained that as to contract the final payment should be paid on completion of works.'
        },
        {
            id: uuidv4(),
            title: 'Which membership is right for me? Who can I speak to about membership at IconiK?',
            question: 'Making a complaint against this company regarding non-payment, cancellation of contract, incomplete works and faults with building works carried out, and the subsequent costs incurred by bringing in another builder to complete the works. The builders walked out on incomplete works as they wanted to be paid the final payment but we explained that as to contract the final payment should be paid on completion of works.'
        },
        {
            id: uuidv4(),
            title: 'Can I change my membership during the year?',
            question: 'Making a complaint against this company regarding non-payment, cancellation of contract, incomplete works and faults with building works carried out, and the subsequent costs incurred by bringing in another builder to complete the works. The builders walked out on incomplete works as they wanted to be paid the final payment but we explained that as to contract the final payment should be paid on completion of works.'
        },
        {
            id: uuidv4(),
            title: 'Can I attend all the events at IconiK by becoming a member?',
            question: 'Making a complaint against this company regarding non-payment, cancellation of contract, incomplete works and faults with building works carried out, and the subsequent costs incurred by bringing in another builder to complete the works. The builders walked out on incomplete works as they wanted to be paid the final payment but we explained that as to contract the final payment should be paid on completion of works.'
        },
        {
            id: uuidv4(),
            title: 'How can I get a membership?',
            question: 'Making a complaint against this company regarding non-payment, cancellation of contract, incomplete works and faults with building works carried out, and the subsequent costs incurred by bringing in another builder to complete the works. The builders walked out on incomplete works as they wanted to be paid the final payment but we explained that as to contract the final payment should be paid on completion of works.'
        },
    ]

    return new Response(JSON.stringify(questions))
}
