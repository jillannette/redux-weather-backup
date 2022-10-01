import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherList } from '../actions/weatherAction'


const SearchComponent = () => {

  const [query, setQuery] = useState('') 
  const cityName = useSelector(state => state.query)

  const dispatch = useDispatch();

  const updateWeather = () => {
    dispatch(getWeatherList(cityName))
  }

  const handleInput = (e) => {
    return (
    setQuery(query))
  }

   return (
      <div className="input">
        <div>
      <input
          type="text"
          placeholder="Enter city name" onChange={handleInput} />
          <button onClick={updateWeather}>Search</button>
          </div>
      </div>
  
   );
   
}

  export default SearchComponent