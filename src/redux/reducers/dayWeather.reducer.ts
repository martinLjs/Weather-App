import { anyAction, dayForecastState } from './../../types/redux.types'
import { ActionTypes } from '../../types/redux.types'

const initialState: dayForecastState = {
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
