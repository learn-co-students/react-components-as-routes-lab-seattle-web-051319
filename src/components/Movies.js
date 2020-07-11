import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const displayMovies = () => {
    return movies.map((movie, i)=> {
      return <div key={i}>
       <h3> {movie.title} </h3>
       <p> Time: {movie.time} </p>
       <p> Genres: </p>
       <ul>
       {movie.genres.map(genre=>{
         return <li>{genre}</li>
       })}
       </ul>
      </div>
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {displayMovies()}
    </div>
  );
};

export default Movies;
