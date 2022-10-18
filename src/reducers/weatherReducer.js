const initialState = {
  data: []
}

  const weatherReducer = (state = initialState, action) => {
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
        loading: false,
        data: [action.data]
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