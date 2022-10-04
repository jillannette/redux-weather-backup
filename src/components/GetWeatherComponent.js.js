// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import axios from 'axios';
// import  { setWeatherList, weatherError } from '../actions/weatherAction'

// const GetWeather  = () => {
//   const dispatch = useDispatch();
//   const fetchWeatherData = async({city: string}) => {
//     const base_url = ('https://api.openweathermap.org/data/2.5/')
//     const api_key = ('86e957cca52080e9f092feff2a880737')
//     const response = await axios
//     .get(`${base_url}weather?q=${city}&units=imperial&appid=${api_key}`)
//     .catch((err) => {
//       console.log("Error: ", err);
//     });
    
 
//   // let [loading, setLoading] = useState(true)
  
//   useEffect(() => {
//   if (city && city !== '') 
//   dispatch(setWeatherList());
//   return () => {
//     dispatch(weatherError());
//   };
//  // eslint-disable-next-line react-hooks/exhaustive-deps
//  }, []);
 
// //   return (
// // <div>
// //     <Container>
// //         <Row>
// //             <Col><strong>City Name</strong></Col>
// //             <Col><strong>Temperature (F)</strong></Col>
// //             <Col><strong>Pressure (hPa)</strong></Col>
// //             <Col><strong>Humidity (%)</strong></Col>
// //         </Row>
// //         <Row>
// //             <Col>{city}</Col> 
// //             <Col>{temp}</Col>
// //             <Col>{pressure}</Col>
// //             <Col>{humidity}</Col>
// //         </Row>
// //       </Container>
     

// //   </div>

  

  

// };

  

// }
// export default GetWeather;