import React from 'react'
import { useParams } from "react-router-dom";


export default function MovieDetailPage({movies}) {
  const {movieName} = useParams();
  let movie = movies.find(movies => movies.title === movieName);

  return (
    <div>
      <h1>{movie.title}</h1>
      <h3>Release Date: {movie.releaseDate}</h3>
      <img src={movie.posterPath} alt="" />
      <h4>Cast: {movie.cast.join(',')}</h4>
    </div>
  )
}
