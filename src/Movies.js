import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {

  render() {

    let movieList = this.props.movieData.map((movie, index) => (
      <Card key={index}>
        <h2>{`${movie.title}`}</h2>
        <p>{`${movie.overview}`}</p>
        <p>{`${movie.release_date}`}</p>
        </Card>
          ))

          return (
      <>
            <Card>
              <h3>Movies:</h3>
              {movieList}
            </Card>
          </>
    );
  }
}

export default Movies;
