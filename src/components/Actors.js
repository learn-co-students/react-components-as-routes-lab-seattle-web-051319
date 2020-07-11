import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const displayActors = () => {
    return actors.map((actor, i) => {
      return <div key={i}>
        <h3> {actor.name} </h3>
        <ul>
          {actor.movies.map((movie, i)=> {
            return <li key={i}> {movie} </li>
          })}
        </ul>
      </div>
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

export default Actors;
