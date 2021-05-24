import React, { useEffect, useState } from 'react'
import { weatherCard } from '../types/redux.types';
import WeatherCard from './WeatherCard';

export default function Slider(props: any) {
    const weatherData = props.weather;
    const cards = weatherData && weatherData.map((item: weatherCard) =>
        <WeatherCard key={item.date} data={item} />
    )
    const [index, setIndex] = useState(0)

    const handleLeftArrow = (): void => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    const handleRightArrow = (): void => {
        if (index < 4) {
            setIndex(index + 1);
        }
    }

    useEffect(() => {
        setIndex(0);
    }, [weatherData])
    return (
        <div>

            <div onClick={() => handleLeftArrow()}>left</div>
            {
                cards[index]
            }
            {
                cards[index + 1]
            }
            {
                cards[index + 2]
            }
            <div onClick={() => handleRightArrow()}> right</div>
        </div>
    )
}
