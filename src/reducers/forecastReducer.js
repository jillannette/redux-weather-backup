import {SHOW_FORECAST} from '../actions/weatherActions'

const initialState = {

    forecast:[]
}

export default function showForecast(state = initialState, action){
  console.log('my forecast reducer ran')
  console.log(action.forecast)
     switch (action.type){
        case SHOW_FORECAST :
          return { 
             ...state,
             forecast:[...state.forecast, action.newItem]
             
            }

        default:return state
     }
}