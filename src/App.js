import './App.css';
import React from 'react';
import axios from 'axios';
import CitySearch from './CitySearch.js';
import City from './City.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: false,
      citySearched: '',
      // cityData: {},
    };
  }
  //Search input is initially set at false because user has not entered anything
  showSearch = () => {
    this.setState({ searchInput: false });
  }

  handleSearch = async (citySearched) => {
    let responseData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${citySearched}&format=json`);
    // console.log(responseData);
    this.setState({
      //user has entered a city, search becomes true
      searchInput: true,
      //citySearched will be whatever the user inputs, this must go into axios.get link above to change the link to the correct city.
      citySearched: citySearched,
      //Assigning cityData to be responseData, which is pulling from LocationIQ API at index 0 (the first thing in the array, which will be the data for the city the user searched)
      cityData: responseData.data[0],
    });

  }

  render() {
    return (
      // Create a route with a method of `get` and a path of `/location`. The route callback should invoke a function to convert the search query to a latitude and longitude. The function should use the provided JSON data.
      <>
        <h1>City Explorer</h1>
        {this.state.searchInput ?
          <City showSearch={this.showSearch}
            displayData={this.state.cityData} /> :
          <CitySearch handleSearch={this.handleSearch} />}
      </>
    );
  }
}

export default App;
