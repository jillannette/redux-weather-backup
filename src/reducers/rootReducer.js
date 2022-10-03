import { combineReducers } from 'redux'
import cityReducer from './cityReducer'
import weatherReducer from './weatherReducer'
import forecastReducer from './forecastReducer'

const rootReducer = combineReducers({
  
  weatherList: weatherReducer,
  forecastList: forecastReducer
})

export default rootReducer;