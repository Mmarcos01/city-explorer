
// constructor(props) {
//   super(props);

//   this.state = {
//     searchInput: false,
//     citySearched: '',
//     alertMessage: false,
//     weatherData: [],
//     weatherSearch: '',

//   };

//   getWeatherData = (e) => {
//     e.preventDefault();
//     axios.get(`${process.env.REACT_APP_BACKEND_URL}/weatherbit`,
//       {
//         params: {
//           weatherLat: this.state.weatherSearch.lat,
//           weatherLon: this.state.weatherSearch.lon,
//         }
//       })
//       .then(weather => {
//         this.setState({
//           weatherData: weather.data,
//           searchInput: true,
//         })
//       })
//      catch (error) {
//       this.setState({ alertMessage: error.message })

//     };
