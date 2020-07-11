import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const displayDirectors = () => {
    return directors.map((director, i) => {
      return <div key={i}>
        <h3> {director.name} </h3>
        <ul>
          {director.movies.map((movie, i) => {
            return <li key={i}> {movie} </li>
          })}
        </ul>
      </div>
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

export default Directors
