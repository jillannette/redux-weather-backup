// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getWeatherList } from '../actions/weatherAction'
// import getCity from './SearchComponent'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

// function DisplayComponent () {
//   let [loading, setLoading] = useState(true)
//   const newCity = useSelector(state => state.city)
//   const dispatch = useDispatch();
//   useEffect(() => {
//     let loadWeatherList = async () => {
//       setLoading(loading.true);
//        dispatch(getWeatherList(getCity(newCity)));
//       setLoading(loading.false);
      
//     };
//     loadWeatherList();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [dispatch])

//   return (
// <div>
//     <Container>
//         <Row>
//             <Col><strong>City</strong></Col>
//             <Col><strong>Temperature</strong></Col>
//             <Col><strong>Pressure</strong></Col>
//             <Col><strong>Humidity</strong></Col>
//         </Row>
//         <Row>
//             <Col>City</Col> 
//             <Col>Temp</Col>
//             <Col>Pressure</Col>
//             <Col>Humidity</Col>
//         </Row>
//       </Container>
     

//   </div>

//   )

  



  

// }
// export default DisplayComponent;