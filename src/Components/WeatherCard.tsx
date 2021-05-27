import React from 'react'
import { weatherCard } from '../types/redux.types';
import '../styles/index.css'

export default function WeatherCard(props: any) {
    const weather: weatherCard = props.data;
    const iconUrl = (icon: string): string => `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <div className='WeatherCard'>
            <div className='WeatherCard__date'>{weather.date}</div>
            <div className='WeatherCard__icon'><img src={iconUrl(weather.conditionIcon)} alt="" />
            </div>
            <div className='WeatherCard__temp'>{weather.temp + '°'}</div>
        </div>
    )
}
