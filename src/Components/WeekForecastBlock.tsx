import React from 'react'
import { useSelector } from 'react-redux';
import { useAction } from '../hooks/useAction'
import { RootState } from '../redux/store';
import CloudIcon from './icons/CloudIcon'
import Slider from './Slider';

export default function WeekForecastBlock() {
    const { getWeekWeather } = useAction();
    const handleCity = (e: any) => {
        const [lat, log] = e.target.value.split(', ');
        getWeekWeather(lat, log);
    }
    const weatherData = useSelector<RootState>(state => state.weekWeather.weather)
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
            {weatherData ? <Slider weather={weatherData} /> : <div>
                <CloudIcon />
                <div>Fill in all the fields and the weather will be displayed</div>
            </div>
            }

        </div>
    )
}
