import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ShowWeather = () => {
  const state = useSelector((state) => state.weather);
  
  const renderWeather = () => {
    if (state.loading) {
      return <h2>Loading</h2>
    }
  
  return state.data.map((el) => {
      return (
      <Container>
      <Row>         
          <Col>{el.name}</Col>
          <Col>{el.main.temp}</Col>
          <Col>{el.main.pressure}</Col>
          <Col>{el.main.humidity}</Col>
        </Row>
        </Container>
      )})
  }
           
      return (
        <div>
          {renderWeather()}
          </div>
      )
    }

  
  
   
  
  
  
  
  

 
      
  export default ShowWeather;