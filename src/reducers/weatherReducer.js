import {SET_WEATHER_RESULT, WEATHER_ERROR} from '../types';

const initialState = {
  weatherList: [],
  loading: true
}


const weatherReducer = (state = initialState, action) => {
  console.log(state, action)
  switch(action.type) {
    case SET_WEATHER_RESULT:
      return {
        ...state,
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
