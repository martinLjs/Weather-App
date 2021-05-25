import { anyAction } from "../../types/redux.types"
import { weekWeatherState, ActionTypes } from '../../types/redux.types'


const initialState: weekWeatherState = {
    forecast: null,
}

export default (state = initialState, { type, payload }: anyAction) => {
    switch (type) {

        case ActionTypes.SET_WEEK_WEATHER:
            return { ...state, forecast: payload }

        default:
            return state
    }
}
