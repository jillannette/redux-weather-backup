import React from 'react';
import Header from './containers/HeaderComponent'
import WeatherSearch from './components/WeatherSearch'
import ShowWeather from './components/ShowWeather'

import './App.css';
import './index.css';


function App () {
  return (
    <>
    <div>
      <Header/>
    </div>
    <br></br>
    <div>
    <WeatherSearch />
    <ShowWeather />
   
    
    </div>
    
    
    </>
    
  )
  
    }

    export default App;



