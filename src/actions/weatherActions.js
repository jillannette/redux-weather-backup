import { GET_WEATHER_DATA, WEATHER_ERROR  } from '../types'
import axios from 'axios'

const api_key = ('86e957cca52080e9f092feff2a880737');
const base_url = ('https://api.openweathermap.org/data/2.5/');

export const getWeatherData = (inputValue) => {
  return async (dispatch, getState) => {
    const result = await axios(
      `${base_url}weather?&q=${inputValue}&units=imperial&appid=${api_key}`
      )
     //need conditional to handle error
      dispatch({
        type: GET_WEATHER_DATA, 
        payload: [result.data]
        
  })
  console.log(result.data)
 }
   
  }
 
  