import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

// 1.  `.map` over the imported movie data array and render `MovieCard`s for each element. (see [documentation)][lists-and-keys]
// 2.  Don't forget to pass _all 4_ props

  generateMovieCards = () => {
    return movieData.map(movie => (
      <MovieCard {...movie} />
    ))
    debugger
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
