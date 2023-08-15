import { v4 as uuidv4 } from 'uuid';
import { checkMark } from '@/public/icons/checkMark';

const data = [
    {
        id: uuidv4(),
        text: 'Here are some advantages. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    },
    {
        id: uuidv4(),
        text: 'Here are some advantages. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: uuidv4(),
        text: 'Here are some advantages. Lorem ipsum dolor',
    },
]

export default function AboutWhyText() {
    return <ul className='plans__list'>
        {data.map(text => {
            return <li
                key={text.id}
                className='plan__item plan__active'
            >
                <div>{checkMark}</div>
                <p className='plan__text'>{text.text}</p>
            </li>
        })}
    </ul>
}
