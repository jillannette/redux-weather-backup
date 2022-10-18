import axios from 'axios'

export const GET_WEATHER_DATA_REQUEST = 'GET_WEATHER_DATA_REQUEST'
export const GET_WEATHER_DATA_SUCCESS = 'GET_WEATHER_DATA_SUCCESS'
export const GET_WEATHER_DATA_FAILURE = 'GET_WEATHER_DATA_FAILURE'

const api_key = ('86e957cca52080e9f092feff2a880737');
const base_url = ('https://api.openweathermap.org/data/2.5/');

export const getWeatherData = (inputValue) => async (dispatch, getState) => {
  dispatch({ type: 'GET_WEATHER_DATA_REQUEST' })
  try {
    const result = await axios.get(
      `${base_url}forecast?&q=${inputValue}&units=imperial&appid=${api_key}`
      );
      dispatch({ type: 'GET_WEATHER_DATA_SUCCESS', payload: {cityName: inputValue, forecast: result.data.list}})
      console.log('++++',result.data.list)
   } catch (error) {
    dispatch({ type: 'GET_WEATHER_DATA_FAILURE', payload: error })
    alert('No data found')
    
  }
}