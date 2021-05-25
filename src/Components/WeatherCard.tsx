import React from 'react'
import { weatherCard } from '../types/redux.types';
import '../styles/index.css'

export default function WeatherCard(props: any) {
    const weather: weatherCard = props.data;
    const iconUrl = (icon: string): string => `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <div className='WeatherCard'>
            <div className='WeatherCard__date'>{weather.date}</div>
            <img src={iconUrl(weather.conditionIcon)} alt="" />
            <div className='WeatherCard__temp'>{weather.temp + ' C°'}</div>
        </div>
    )
}
