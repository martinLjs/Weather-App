import { anyAction, DayForecastState } from './../../types/redux.types'
import { ActionTypes } from '../../types/redux.types'

const initialState: DayForecastState = {
  forecast: null
}

export default (state = initialState, { type, payload }: anyAction) => {
  switch (type) {
    case ActionTypes.SET_DAY_WEATHER:
      return { ...state, forecast: payload }

    default:
      return state
  }
}
export { }
