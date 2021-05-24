import React from 'react'
import { getWeekWeather } from '../redux/actionCreators'
import CloudIcon from './icons/CloudIcon'

export default function WeekForecastBlock() {
    const handle = () => {
        getWeekWeather(53.195873, 50.100193);
    }
    return (
        <div>
            <h2>7 Days Forecast</h2>
            <CloudIcon />
            <div onClick={() => handle()} >Fill in all the fields and the weather will be displayed</div>
        </div>
    )
}
