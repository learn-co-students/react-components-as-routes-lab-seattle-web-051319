import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const showMovies = movies => {
    return movies.map(movie => {
      return <li>{movie}</li>
    })
  }

  const showActors = () => {
    return actors.map(actor => {
      return <div>
        <p>{actor.name}</p>
        Movies: <ul>{showMovies(actor.movies)}</ul>
      </div>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {showActors()}
    </div>
  );
};

export default Actors;
