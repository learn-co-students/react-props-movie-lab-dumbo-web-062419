import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // generateMovieCards = () => {
  //
  //   // console.log("generated movie cards displayed");
  //   // map over your movieData array and return the correct
  //   const movieComponents = movieData.map(movie => {
  //     return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />
  //   })
  //   console.log(movieData);
  //
  //   return movieComponents
  // }

  render() {
    const movieCardComponents = movieData.map(movie => {
      // console.log(movie);
      // return <MovieCard movie={movie} />
      // BUG: creates a default MovieCard object with default props, then adds a movie key with value of {movie}.
      // NOT Same as returning the below
      return <MovieCard title={movie.title} IMDBRating={movie.IMDBRating} genres={movie.genres} poster={movie.poster} />

    })
    return (
      <div id="movie-showcase">
        {movieCardComponents}
      </div>
    )
  }
}
