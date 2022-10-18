import Chart from '../components/Chart'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const CityRow = ({cityName, data}) => {
  const makeForecast = () => {
    const forecast = [];
    for (let i = 5; i < data.length; i+=8) {
      forecast.push(data[i])
    }
    return forecast;
  };
  
  const sparklinesTempData = data.map((item) => {
    return item.main.temp.toFixed(0)
  });
  
  const sparklinesPressureData = data.map((item) => {
    return item.main.pressure
  });
  
  const sparklinesHumidityData = data.map((item) => {
    return item.main.humidity
  });

  return (
     <Row>
        <Col>{cityName}'s current/forecast:</Col>
        <Col>
          <h3>{data[0].main.temp.toFixed(0)}</h3>
          <Chart color='orange' data={sparklinesTempData}/>
        </Col>
        <Col>
          <h3>{data[0].main.pressure}</h3>
          <Chart color='teal' data={sparklinesPressureData}/>
        </Col>
        <Col>
          <h3>{data[0].main.humidity}</h3>
          <Chart color='brown' data={sparklinesHumidityData}/>
        </Col>
       </Row> 
  );
};

export default CityRow;