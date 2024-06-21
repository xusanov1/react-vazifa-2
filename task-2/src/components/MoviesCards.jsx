import React from 'react';
import './MovieCard.css';
import { movies } from './Movies';

const MovieCard = () => {
  return (
    <div className="movie-container">
      {movies.map(movie => (
        <div className="movie-card" key={movie.id}>
          <img src={movie.poster} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
