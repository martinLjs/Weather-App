import React from 'react'
import DayForecastBlock from './Components/DayForecastBlock'
import WeekForecastBlock from './Components/WeekForecastBlock'
import './styles/index.css'
export default function App() {
    return (
        <div className='App__wrapper'>
            <header>
                <h1 className='App__title'>
                    <span>Weather</span>
                    <span className='App__title-sub'>forecast</span>
                </h1>
            </header>
            <section className='Content__wrapper'>
                <WeekForecastBlock />
                <DayForecastBlock />
            </section>
            <footer className='App__footer'> from Martin to Mercury with love </footer>
        </div>

    )
}
