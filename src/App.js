import './App.css';
import React from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CitySearch from './CitySearch.js';
import City from './City.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: false,
      citySearched: '',
      alertMessage: false,
      // cityData: {},
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
    } catch (error) {
      this.setState({ alertMessage: error.message })
    }
  };

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    if (this.state.alertMessage) {
      return (
        <>
          <Alert variant="secondary">
            <Alert.Heading>Couldn't find that City!</Alert.Heading>
            <p>
              Please try entering one that exists.
            </p>
          </Alert>
          <Button variant="outline-light" size="sm" type="button" onClick={this.refreshPage}>Try again!</Button>
        </>
      )
    }

    return (

      // ternaries are WTF (what ? true : false)
      //"the condition" ? "what you want when it's true" : "what you want when it's false"

      //has the user searched? If true : If false
      <>
        <h1>City Explorer</h1>

        {this.state.searchInput ?
          <City showSearch={this.showSearch}
            displayData={this.state.cityData} /> :
          <CitySearch handleSearch={this.handleSearch} />}
      </>
    );
  }
};


export default App;
