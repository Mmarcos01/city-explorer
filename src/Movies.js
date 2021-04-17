import React from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


class Movies extends React.Component {

  render() {

    let movieList = this.props.movieData.map((movie, index) => (
      <Card key={index}>
        <h2>{`${movie.title}`}</h2>
        <p>{`${movie.overview}`}</p>
        <p>Average Votes: {`${movie.vote_average}`}/{`${movie.vote_count}`}</p>
        <p>Popularity Score: {`${movie.popularity}`}</p>
        <p>Release Date: {`${movie.release_date}`}</p>
      <Image class = "movie-poster" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" />
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
