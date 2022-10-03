import {SET_CITY, SET_WEATHER_RESULT, WEATHER_ERROR} from '../types';

const initialState = {
  weatherList: [],
  loading: true
}


const weatherReducer = (state = initialState, action) => {
  console.log(state, action)
  switch(action.type) {
    case SET_CITY:
      return {
        ...state, 
        city: action.city,
      }
    case SET_WEATHER_RESULT:
      return {
        ...state,
        city: action.city,
        weatherList: action.weatherList,
        loading: true
      }
    
    case WEATHER_ERROR:
      return {
        loading: false,
        error: 'No results found'
      }
      default: 
      return state
        
  }
  
}

export default weatherReducer;
