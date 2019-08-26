import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {

    const movieInfo = movieData.map(movie => {

      return <MovieCard movieProp = {movie}/>
    });
    return movieInfo;
  }

  render() {
    // console.log(movieData);

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
