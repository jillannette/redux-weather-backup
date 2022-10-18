import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showForecast } from '../actions/weatherActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ShowForecast = () => {
  
const city = useSelector((state) => state.inputValue)
const dispatch = useDispatch();


  // const tempAvg = forecast.tempAvg = Math.floor(average(forecast.tempList));
  // const pressureAvg = forecast.pressureAvg = Math.floor(average(forecast.pressureList));
  // const humidityAvg = forecast.humidityAvg = Math.floor(average(forecast.humidityList));

useEffect(() => {
  dispatch(showForecast())
  }, [dispatch]
)


  return (
        
    
        <div>
          <Container>
            <Row>
              <Col>{city}</Col>
              {/* <Col>{tempAvg}</Col>
              <Col>{pressureAvg}</Col>
              <Col>{humidityAvg}</Col> */}
              
            </Row>
          </Container>
        </div>
  )
  }

export default ShowForecast;
