import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const showGenres = genres => {
    return genres.map(genre => {
      return <li>
        {genre}
      </li>
    })
  }

  const showMovies = () => {
    return movies.map(movie => {
      return <div>
        <p>Title: {movie.title}</p>
        <p>Run Time: {movie.time} minutes</p>
        Genres: <ul>{showGenres(movie.genres)}</ul>
        </div>
        })
  }

  return (
    <div>
      <h1>Movies Page</h1>
        {showMovies()}
    </div>
  );
};

export default Movies;
