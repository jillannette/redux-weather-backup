import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setWeatherList} from '../actions/weatherActions'

import axios from 'axios'

const WeatherSearch = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  

  function fetchUrl() {
      const api_key = ('86e957cca52080e9f092feff2a880737');
      const base_url = ('https://api.openweathermap.org/data/2.5/');
      
      
        return (`${base_url}weather?q=${query}&units=imperial&appid=${api_key}`)
  }
  async function fetchData() {  
    const result = await axios(fetchUrl(query));
    console.log(query)
    //need to add if else statement here to add catch for weather error 
    dispatch(setWeatherList(result.data));
    console.log(result)
  }
  
  return (
      <div className="input">
        <div>
      <input
          type="text"
          value={query}
          placeholder="Enter city name" onChange={e => setQuery(e.currentTarget.value)} />
          <button onClick={fetchData}>Search</button>
          </div>
      </div>
   );
};
export default WeatherSearch