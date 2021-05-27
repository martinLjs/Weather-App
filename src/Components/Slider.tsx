import React, { useEffect, useState } from 'react'
import { weatherCard } from '../types/redux.types';
import WeatherCard from './WeatherCard';
import '../styles/index.css'
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight'
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
        <div className='Slider'>
            <div onClick={() => handleLeftArrow()}><ArrowRight /></div>
            <div className='Slider__container'>
                {
                    cards[index]
                }
                {
                    cards[index + 1]
                }
                {
                    cards[index + 2]
                }
            </div>
            <div onClick={() => handleRightArrow()}>
                <ArrowLeft />
                {/* <img src={require('../assets/icons/24/chevron-left.png')} alt="" /> */}
            </div>
        </div>
    )
}
