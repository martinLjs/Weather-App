import { requestWeekForecast, requestDayForecast } from "../api"
import { ActionTypes, weatherCard } from "../types/redux.types"

export const setWeekWeather = (weather: any) => {
    return ({ type: ActionTypes.SET_WEEK_WEATHER, payload: weather })
}
export const setDayWeather = (weather: any) => {
    return ({ type: ActionTypes.SET_DAY_WEATHER, payload: weather })
}

//thunk
export function getWeekWeather(lat: number, log: number) {
    return async (dispatch: any) => {
        try {
            const res = await requestWeekForecast(lat, log);
            const weatherCardsList: weatherCard = res.daily.map((item: any) => {
                const forecastDate = new Date(item.dt * 1000)
                    .toLocaleDateString();
                return ({
                    date: forecastDate,
                    temp: item.temp.day.toFixed(1),
                    conditionIcon: item.weather[0].icon,
                })
            })
            dispatch(setWeekWeather(weatherCardsList))
        } catch (error) {
            console.log(error)
        }


    }
}
export function getDayForecast(lat: number, log: number, date: number) {
    return async (dispatch: any) => {
        try {
            const res = await requestDayForecast(lat, log, date);
            const forecastData = {
                date: new Date(res.current.dt * 1000).toLocaleDateString(),
                temp: res.current.temp.toFixed(1),
                conditionIcon: res.current.weather[0].icon
            }
            dispatch(setDayWeather(forecastData));
        } catch (error) {
            console.log(error)
        }


    }
}
