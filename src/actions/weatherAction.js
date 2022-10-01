import { SET_CITY, SET_WEATHER_RESULT, WEATHER_ERROR } from '../types'
import axios from 'axios'

export const getWeatherList = () => async dispatch =>{
  try{
    const cityName = "Boulder"
    const api_key = "86e957cca52080e9f092feff2a880737"
    const api_base = "https://api.openweathermap.org/data/2.5/"
    const response = await axios.get(
      `${api_base}forecast?q=${cityName}&cnt=40&units=imperial&appid=${api_key}`);
    dispatch({
          type: SET_WEATHER_RESULT,
          payload: response.data
        })
    dispatch({
          type: SET_CITY,
          payload: response.data.name
          
    })
    
  }      
      catch(error) {
        dispatch({
          type: WEATHER_ERROR,
          payload: 'No results found'
        })
      }
    }

     
        

       