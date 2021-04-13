import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {

  render() {

    let fullList = this.props.weatherData.map((day, index) => (
      <ListGroup.Item key={index}> {`${day.date}: ${day.description}`}</ListGroup.Item>
    ))

    return (
      <>
        <ListGroup>
          <h3>Daily Weather Forecast:</h3>
          {fullList}
        </ListGroup>
      </>
    );
  }
}

export default Weather;
