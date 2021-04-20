import React from 'react';
import MovieCall from './MovieCall.js';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {

  render() {

    let movieList = this.props.movieData.map((movie, index) => (
      <MovieCall key={index}
        title={movie.title}
        overview={movie.overview}
        vote_average={movie.vote_average}
        vote_count={movie.vote_count}
        popularity={movie.popularity}
        release_date={movie.release_date}
        poster_path={movie.poster_path}
      />

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
