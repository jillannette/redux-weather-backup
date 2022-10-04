import {SET_WEATHER_LIST, WEATHER_ERROR} from '../types';


const weatherReducer = (state = [], action) => {
  switch(action.type) {
    case SET_WEATHER_LIST:
      return {
        ...state,
        weatherList: [action.weatherList]
      }
    case WEATHER_ERROR:
      return {
        error: 'No results found'
      }
      default: 
      return state
  }
};

export default weatherReducer; 