// import React from 'react';
// import axios from 'axios';
// import Jumbotron from 'react-bootstrap/Jumbotron';

// class Weather extends React.Component {

//   handleWeatherBtnClick = async () => {
//     let weatherData = await axios.get('http://localhost:3002/weather-data')
//     console.log(weatherData);
//     this.setState({
//       data: weatherData.data,
//       lat: weatherData.lat,
//       lon: weatherData.lon,
//     });

//     render() {
//       return (
//         <>
//           <Jumbotron>
//             <h1>Weather Data</h1>

//             <button onClick={this.handleWeatherBtnClick}>How's the weather?</button>
//             {
//               this.state.data ? (
//                 <p>{this.state.weatherData[0]}</p>
//               ) : ''}
//           </Jumbotron>
//         </>
//       )
//     }
//   }
// }

// export default Weather;
