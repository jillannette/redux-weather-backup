import { SET_WEATHER_LIST, WEATHER_ERROR } from '../types'

export const setWeatherList = (result) => {
  return {
    type: SET_WEATHER_LIST,
    payload: result.data 
  };
};

export const weatherError = (error) => {
  return {
    type: WEATHER_ERROR,
    payload: error,
  };
};

// export const createCity = (city) => {
 

//   return {
//     type: CITY_NEW,
//     payload: city
//   };
// };


        

       