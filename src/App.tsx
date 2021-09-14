import React from 'react'
import DayForecastBlock from './Components/DayForecastBlock'
import WeekForecastBlock from './Components/WeekForecastBlock'
import './styles/index.css'
export default function App () {
  return (
        <div className='App'>
            <header className='Header'>
                <h1 className='Header__title'>
                    <span>Weather</span>
                    <span className='Header__subtitle'>forecast</span>
                </h1>
            </header>
            <section className='Content'>
                <WeekForecastBlock />
                <DayForecastBlock />
            </section>
            <footer className='Footer'> from Martin to Mercury with love </footer>
        </div>
  )
}
