'use client'
import { useState } from 'react';
import '../../app/styles/ui/playButton.scss';
import { playIcon, playStartIcon, whitePlayIcon, whitePlayStartIcon } from '../../public/icons/play';

export const PlayButton = (props) => {
    const { white, className } = props;

    const [play, setPlay] = useState(false)

    const startPlay = () => () => {
        setPlay(!play)
    }

    return (
        <button
            className={`play ${className}`}
            onClick={startPlay()}
            aria-label='playButton'
        >
            {white === 'white'
                ? play ? whitePlayStartIcon : whitePlayIcon
                : play ? playStartIcon : playIcon
        }
        </button>
    )
}