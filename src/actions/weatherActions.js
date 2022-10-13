import axios from 'axios'

const api_key = ('86e957cca52080e9f092feff2a880737');
const base_url = ('https://api.openweathermap.org/data/2.5/');

export const getWeatherData = (inputValue) => async (dispatch) => {
  dispatch({ type: 'GET_WEATHER_DATA_REQUEST' })
  try {
    const result = await axios.get(
      `${base_url}weather?&q=${inputValue}&units=imperial&appid=${api_key}`
      );
    dispatch({ type: 'GET_WEATHER_DATA_SUCCESS', payload: result.data })
  } catch (error) {
    dispatch({ type: 'GET_WEATHER_DATA_FAILURE', payload: error })
    alert('No data found')
    
  }
  //console.log(result.data)
  }
  
 
   
  
 
  