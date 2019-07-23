import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const showMovies = movies => {
    return movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  const showDirectors = () => {
    return directors.map(director => {
      return <div>
        <p>{director.name}</p>
        Movies: <ul>{showMovies(director.movies)}</ul>
      </div>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {showDirectors()}
    </div>
  );
}

export default Directors
