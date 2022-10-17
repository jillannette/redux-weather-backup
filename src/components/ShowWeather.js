import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const ShowWeather = () => {
  const state = useSelector((state) => state)
  const city = useSelector((state) => state.inputValue)
  console.log(state)
  
     
    if (state.loading) {
      return <h2>Loading</h2>
    }

   if (state.forecast) {
  
        return (
          <div>
        <Container className="sparklines">
      <Row>         
          <Col className="col">{city}</Col>
          <Col> 
          <Sparklines
              data={state.tempList}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
              
              <SparklinesLine style={{ fill: 'none' }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            </Col>
          <Col>
          <Sparklines
              data={state.tempList}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
            
              <SparklinesLine style={{ fill: 'none' }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            </Col>
            <Col>
          <Sparklines
            data={state.humidityList}
              limit={5}
              width={100}
              height={50}
              margin={5}
            >
            
              <SparklinesLine style={{ fill: 'none' }} />
              <SparklinesReferenceLine type="avg" />
            </Sparklines>
            </Col>
          
        </Row>
        </Container>
        </div>
    )}
  }
   
         
           
     
    
  
 
  export default ShowWeather;