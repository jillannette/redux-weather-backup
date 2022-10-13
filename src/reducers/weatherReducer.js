const initialState = {
  data: [],
}
   


const weatherReducer = (state = initialState, action) => {
  console.log('my reducer ran')
  switch(action.type) {
    case 'GET_WEATHER_DATA':
      return {
        ...state,
        data: action.payload, 
      }
    case 'WEATHER_ERROR':
      return {
        error: 'No results found'
      }
      default: 
      return state
  }
};

export default weatherReducer; 