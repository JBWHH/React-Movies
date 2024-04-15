import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';



export default function MoviesListPage({movies}) {
  return (
    <div>
      {movies.map((movies) => {
        return <MovieCard key={movies.title} movie={movies} />;
      })}
    </div>
  );
}
