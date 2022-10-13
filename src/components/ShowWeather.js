import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ShowWeather = () => {
  const result = useSelector((state) => state.weather.data);
  
  return (<div>
    {result.map((data) => {
      return (
      <Container>
      <Row>         
          <Col>{data.name}</Col>
          <Col>{data.main.temp}</Col>
          <Col>{data.main.pressure}</Col>
          <Col>{data.main.humidity}</Col>
        </Row>
        </Container>
     
      )
    })}
    
     </div>
    
  )
}
 
      
  export default ShowWeather;