import './App.css';
import React from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CitySearch from './CitySearch.js';
import City from './City.js';
import Weather from './Weather.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: false,
      citySearched: '',
      alertMessage: false,
      weatherData: [],
    };
  }
  //Search input is initially set at false because user has not entered anything
  showSearch = () => {
    this.setState({ searchInput: false });
  }

  handleSearch = async (citySearched) => {
    try {
      let responseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearched}&format=json`);

      this.setState({
        searchInput: true,
        citySearched: citySearched,
        cityData: responseData.data[0],
      })
      this.getWeatherData();

    } catch (error) {
      this.setState({ alertMessage: error.message })
    }
  };

  refreshPage = () => {
    window.location.reload();
  }

  getWeatherData = async () => {
    try {
      const weatherData = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/weather`,
        {
          params:
            { lat: this.state.cityData.lat, lon: this.state.cityData.lon }
        });
      console.log('proof of life', weatherData);
      this.setState({
        weatherData: weatherData.data,
      })
      console.log(this.state);
    } catch (error) {
      this.setState({ alertMessage: error.message })
    }
  };

  render() {
    if (this.state.alertMessage) {
      return (
        <>
          <Alert variant="secondary">
            <Alert.Heading class="err-msg">Error!</Alert.Heading>
            <p>
              {this.state.alertMessage}
            </p>
          </Alert>
          <Button variant="outline-light" size="lg" type="button" onClick={this.refreshPage}>Try again!</Button>
        </>
      )
    }

    return (

      <>
        <h1>City Explorer</h1>

        {this.state.searchInput ?
          <City showSearch={this.showSearch}
            displayData={this.state.cityData} /> :
          <CitySearch handleSearch={this.handleSearch} />}

        {this.state.searchInput ?
          <Weather weatherData={this.state.weatherData} /> :
          ''}
      </>
    );
  }
};


export default App;
