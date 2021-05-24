import { getWeekWeatherApi } from "../api"
import { ActionTypes } from "../types/redux.types"

export const setWeekWeather = (weather: any) => {
    return ({ type: ActionTypes.SET_WEEK_WEATHER, payload: weather })
}

//thunk
export const getWeekWeather = (lat: number, log: number) => {
    return (dispatch: any) => {
        getWeekWeatherApi(lat, log)
            .then(
                (res) => {
                    console.log(res.daily)
                    const weatherCardsList = res.daily.map((day: any) => ({
                        date: new Date,
                        temp: day.temp.day,
                        conditionIcon: day.weather[0].icon,
                    })
                    )
                    console.log(weatherCardsList)
                    // dispatch(setWeekWeather(weatherCardsList))

                }
            )
    }
}