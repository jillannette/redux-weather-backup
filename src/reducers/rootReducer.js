import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer'
import forecastReducer from './forecastReducer'

const rootReducer = combineReducers({
  weatherList: weatherReducer,
  forecastList: forecastReducer
})

export default rootReducer;