import { useSelector } from 'react-redux'
import CityRow from './CityRow'
import Container from 'react-bootstrap/Container'

const ShowForecast = () => {
  const {loading, data } = useSelector((state) => state.weather)
 
  return (
    <Container className="row">
      {data.length > 0 && (
      <>
        {data.map((item) => {
          return <CityRow cityName={item.cityName.toUpperCase()} data={item.forecast}/>
          }
        )}
        </>
      )}
    </Container>
  );       
};
   
export default ShowForecast;