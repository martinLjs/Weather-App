import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useAction } from '../hooks/useAction'
import { RootState } from '../redux/store'
import { numberState, stringState } from '../types/redux.types'
import WeatherCard from './WeatherCard'
import '../styles/index.css'
import Warning from './Warning'

export default function DayForecastBlock () {
  const { getDayForecast } = useAction()
  const forecastData = useSelector<RootState>(state => state.dayWeather.forecast)
  const [date, setDate] = useState<numberState>(null)
  const [city, setCity] = useState<stringState>(null)

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = +new Date(e.target.value) / 1000
    setDate(time)
  }
  const handleCity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value)
  }

  useEffect(() => {
    if (city && date) {
      const [lat, lon] = city.split(', ')
      getDayForecast(+lat, +lon, date)
    }
  }, [city, date])

  return (
        <div className='DayForecast'>
            <h2 className='DayForecast__title'>Forecast for a Date in the Past</h2>
            <div className='DayForecast__form'>
                <select className='CitySelect' onChange={(e) => handleCity(e)} name="" id="">
                    <option disabled>Выберите город</option>
                    <option value="53.195873, 50.100193">Самара</option>
                    <option value="53.507836, 49.420393">Тольятти</option>
                    <option value="51.533557, 46.034257">Саратов</option>
                    <option value="55.796127, 49.106405">Казань</option>
                    <option value="45.035470, 38.975313">Краснодар</option>
                </select>
                <input className='DatePicker' onChange={(e) => handleDate(e)} type="date" />
            </div>
                {forecastData ? <div className="DayForecast__content"><WeatherCard data={forecastData} /> </div> : <Warning />}
        </div>
  )
}
