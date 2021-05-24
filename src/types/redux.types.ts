export enum ActionTypes {
    SET_WEEK_WEATHER = 'SET_WEEK_WEATHER'
}
export interface anyAction {
    type: string,
    payload: any,
}

export interface weekWeatherState {
    weather: weatherCard[] | null,
}

export interface weatherCard {
    date: Date,
    temp: number,
    conditionIcon: string,
} 
