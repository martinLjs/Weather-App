import React from 'react'
import { useAction } from '../hooks/useAction'
import { getWeekWeather } from '../redux/actionCreators'
import CloudIcon from './icons/CloudIcon'

export default function WeekForecastBlock() {
    const { getWeekWeather } = useAction();
    const handleCity = (e: any) => {
        const [lat, log] = e.target.value.split(', ');
        getWeekWeather(lat, log);
    }
    return (
        <div>
            <h2>7 Days Forecast</h2>
            <select onChange={(e) => handleCity(e)} name="" id="">
                <option disabled>Выберите город</option>
                <option value="53.195873, 50.100193">Самара</option>
                <option value="53.507836, 49.420393">Тольятти</option>
                <option value="51.533557, 46.034257">Саратов</option>
                <option value="55.796127, 49.106405">Казань</option>
                <option value="45.035470, 38.975313">Краснодар</option>
            </select>
            <CloudIcon />
            <div>Fill in all the fields and the weather will be displayed</div>
        </div>
    )
}
