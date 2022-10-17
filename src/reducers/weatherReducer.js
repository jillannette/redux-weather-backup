export const getForecast = () => {
  const getData = () => {
    const data = [
      {
      city: '',
      tempList: [],
      pressureList: [],
      humidityList: [],
  }
];
}

 const showForecast = (data) => {
  const forecast = [
    data.forEach(el => {
      forecast.push(
        <div key={el.city}>
          tempList: {el.tempList}
          pressureList: {el.pressureList}
          humidityList: {el.humidityList}
        </div>
  )})]
      



return (
  <div>
    {forecast}
    console.log(forecast)
  </div>


)
}
  


    
const weatherReducer = (state = [], action) => {
  console.log('my reducer ran')
  switch(action.type) {
    case 'GET_WEATHER_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      }
    case 'GET_WEATHER_DATA_SUCCESS':
      return {
        ...state, 
        loading: false,
        data: getForecast(getData(data))
      }
    case 'SHOW_FORECAST':
      return {
        ...state,
        forecast: showForecast()
      }
    case 'GET_WEATHER_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
        data: [],
      }
      default: 
      return state
  }
};

export default weatherReducer; 