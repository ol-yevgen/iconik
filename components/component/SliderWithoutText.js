import Image from 'next/image';

export default function SliderWithoutText({ data, className }) {
    return (
        data.map(card => {
            return <ul
                key={card.id}
                className='services__card plans__card' >
                <li className='services__card-image'>
                    <Image
                        src={card.path}
                        width={360}
                        height={450}
                        className={className}
                        alt="time" />
                </li>
            </ul >
        }))
}