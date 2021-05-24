import React from 'react'
import { weatherCard } from '../types/redux.types';

export default function WeatherCard(props: any) {
    const weather: weatherCard = props.data;
    const iconUrl = (icon: string): string => `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <div>
            <div>{weather.date}</div>
            <img src={iconUrl(weather.conditionIcon)} alt="" />
            <div>{weather.temp + ' C'}</div>
        </div>
    )
}
