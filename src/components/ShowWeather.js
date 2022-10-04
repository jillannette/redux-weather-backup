import React from 'react'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const ShowWeatherComponent = () => {

  
  
  const weatherResult = useSelector((state) => state.weatherList);
  const renderList = weatherResult.map((result => {
      
    
  
 
    return (
<div>
    <Container>
        <Row>
            <Col><strong>City</strong></Col>
            <Col><strong>Temperature</strong></Col>
            <Col><strong>Pressure</strong></Col>
            <Col><strong>Humidity</strong></Col>
        </Row>
        <Row>
            <Col>{result.data.city}</Col> 
            <Col>{result.data.temp}</Col>
            <Col>{result.data.pressure}</Col>
            <Col>{result.data.humidity}</Col>
        </Row>
      </Container>
      </div>
    )
  }
  )
  )
  
  
  
  
   return <>{renderList}</>
 }


export default ShowWeatherComponent;