import React from 'react'
import Header from './containers/HeaderComponent'
import WeatherSearch from './components/WeatherSearch'
import ShowWeather from './components/ShowWeather'
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const App = () => {
  return (<>
    <div>
      <Header/>
    </div>
    <br></br>
    <div>
      <WeatherSearch />
      <div>
      <Container>
        <Row>
          <Col><strong>City Name</strong></Col>
          <Col><strong>Temperature (F)</strong></Col>
          <Col><strong>Pressure (hPa)</strong></Col>
          <Col><strong>Humidity (%)</strong></Col>
        </Row>
       
        </Container>
      <ShowWeather />
    </div>
    </div>
    </>
  )
}   
  


export default App;
   


