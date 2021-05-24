import { getWeekWeatherApi } from "../api"
import { ActionTypes } from "../types/redux.types"

export const setWeekWeather = (weather: any) => {
    return ({ type: ActionTypes.SET_WEEK_WEATHER, payload: weather })
}

//thunk
export function getWeekWeather(lat: number, log: number) {
    return async (dispatch: any) => {
        try {
            const res = await getWeekWeatherApi(lat, log)
            const weatherCardsList = res.daily.map((day: any) => ({
                date: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
                temp: day.temp.day,
                conditionIcon: day.weather[0].icon,
            })
            )
            console.log(weatherCardsList)
            dispatch(setWeekWeather(weatherCardsList))
        } catch (error) {
            console.log(error)
        }


    }
}