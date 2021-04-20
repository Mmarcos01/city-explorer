import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class MovieCall extends React.Component {

  render() {
    return (

      <Card>
        <h2>{`${this.props.title}`}</h2>
        <p>{`${this.props.overview}`}</p>
        <p>Average Votes: {`${this.props.vote_average}`}/{`${this.props.vote_count}`}</p>
        <p>Popularity Score: {`${this.props.popularity}`}</p>
        <p>Release Date: {`${this.props.release_date}`}</p>
        <Image class="movie-poster" src={`https://image.tmdb.org/t/p/original${this.props.poster_path}`} alt="movie poster" />
      </Card>

    );

  }
}

export default MovieCall;
