import React from 'react';
import { Table, Container, Image } from 'react-bootstrap/';

class City extends React.Component {
  render() {
    return (
      // pulling display_name property from cityData to display the city name
      //the image links to location iq to find the map, using location key, and properties of lat and lon from cityData https://locationiq.com/docs
      <>
        <button onClick={this.props.showSearch}>Enter a new city</button>
        <h2>{this.props.displayData.display_name}</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.displayData.lat}</td>
              <td>{this.props.displayData.lon}</td>
            </tr>
          </tbody>
        </Table>

        <Container>
          <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.displayData.lat},${this.props.displayData.lon}&zoom=10`} alt="City Map" fluid />
        </Container>
      </>
    )
  }
}

export default City;
