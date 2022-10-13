import {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { getWeatherData } from '../actions/weatherActions'

const WeatherSearch = () => {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  }

  console.log(inputValue)

  const fetchWeatherData = () => {  
    dispatch(getWeatherData(inputValue))
     
  }

  return (
    <div className="input">
      <input
        type='text'
        placeholder='enter city name'
        onChange={onChangeHandler}
        value={inputValue}
      />
        <button onClick={fetchWeatherData}>Search</button> 
      </div>
  );
}
 
export default WeatherSearch