import React from 'react'
import DayForecastBlock from './Components/DayForecastBlock'
import WeekForecastBlock from './Components/WeekForecastBlock'

export default function App() {
    return (
        <div>
            <header><h1>Weather Forecast</h1></header>
            <section className='Content__wrapper'>
                <WeekForecastBlock />
                <DayForecastBlock />
            </section>
            <footer> from Martin to Mercury with love </footer>
        </div>

    )
}
