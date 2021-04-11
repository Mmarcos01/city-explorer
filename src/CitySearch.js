import React from 'react';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

//function for handling form submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.value);
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter a City Location:</label>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <Button variant="outline-light" type="submit">Explore!</Button>
      </form>

    );
  }
}

export default CitySearch;
