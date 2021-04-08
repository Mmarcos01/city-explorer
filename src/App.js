import './App.css';
import React from 'react';
import axios from 'axios';
import CityForm from './CityForm.js';
import City from './City.js';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchInput: false,
      citySearched: '',
    };
  }

handleSearch = async(citySearched) => {
  console.log('searched', citySearched);
  
  //request LocationIQ
  let responseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearched}&format=json`);
  console.log(responseData);
  this.setState({
    searchInput: true,
    citySearched: citySearched,
    locationData: responseData.data[0]
  });
  
}

  render() {
    return (
      <>
        <h1>City Explorer</h1>
        
        <City />
        <CityForm handleSearch={this.handleSearch} />
      </>
    );
  }
}

export default App;
