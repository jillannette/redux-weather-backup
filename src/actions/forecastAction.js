// import { SET_FORECAST, FORECAST_ERROR } from '../types'
// import axios from 'axios'

//     const api = {
//       key: "86e957cca52080e9f092feff2a880737",
//       base: "https://api.openweathermap.org/data/2.5/"
//     }

//     const forecastAction = (city) => async dispatch => {
//       try{
//     const res = await axios.get(
//       `${api.base}forecast?q=${city}&units=imperial&appid=${api.key}`)
//       dispatch( {
//         type: SET_FORECAST,
//         payload: res.data
//       })
//     }
//     catch(error) {
//       dispatch( {
//         type: FORECAST_ERROR,
//         payload: 'No results found'
//       })
//     }
//   };

//   export default forecastAction;