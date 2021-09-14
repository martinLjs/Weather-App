export enum ActionTypes {
    SET_WEEK_WEATHER = 'SET_WEEK_WEATHER',
    SET_DAY_WEATHER = 'SET_DAY_WEATHER',
}
export interface anyAction {
    type: string,
    payload: any,
}

export interface weekWeatherState {
    forecast: weatherCard[] | null,
}
export interface DayForecastState {
    forecast: weatherCard | null,
}
export interface weatherCard {
    date: Date,
    temp: number,
    conditionIcon: string,
}
export type stringState = string | null;
export type numberState = number | null;
