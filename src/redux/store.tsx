
import { createStore, applyMiddleware, combineReducers } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

import weekWeatherReducer from './reducers/weekWeather.reducer'
import dayWeatherReducer from './reducers/dayWeather.reducer'

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  weekWeather: weekWeatherReducer,
  dayWeather: dayWeatherReducer

})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>

export default store
