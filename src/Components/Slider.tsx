import React, { useEffect, useState } from 'react'
import { weatherCard } from '../types/redux.types'
import WeatherCard from './WeatherCard'
import '../styles/index.css'
import ArrowLeft from './icons/ArrowLeft'
import ArrowRight from './icons/ArrowRight'
export default function Slider (props: any) {
  const weatherData = props.weather
  const cards = weatherData && weatherData.map((item: weatherCard) =>
        <WeatherCard key={item.date} data={item} />
  )
  const [index, setIndex] = useState(0)

  const handleLeftArrow = (): void => {
    if (index > 1) {
      setIndex(index - 1)
    }
  }
  const handleRightArrow = (): void => {
    const maxIndex = document.documentElement.clientWidth <= 715 ? 6 : 4
    if (index < maxIndex) {
      setIndex(index + 1)
    }
  }

  useEffect(() => {
    setIndex(0)
  }, [weatherData])
  return (
        <div className='Slider'>
            <div onClick={() => handleLeftArrow()}>
              <ArrowRight />
            </div>
            <div className='Slider__container'>
                <div>{cards[index]}</div>
                <div className='Slider__item_hidden'>{cards[index + 1]}</div>
                <div className='Slider__item_hidden'>{cards[index + 2]}</div>
            </div>
            <div onClick={() => handleRightArrow()}>
                <ArrowLeft />
            </div>
        </div>
  )
}
