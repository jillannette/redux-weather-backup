import React from 'react';
import Header from './containers/HeaderComponent'
import SearchComponent from './components/SearchComponent'
// import DisplayComponent from './components/DisplayComponent'
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
    <SearchComponent />
    {/* <DisplayComponent /> */}
    
    </div>
    
    
    </>
    
  )
  
    }

    export default App;



