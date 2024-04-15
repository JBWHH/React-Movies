import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div>
      <hr />
      <Link to={`/movies/${movie.title}`}>{movie.title} </Link>
      <hr />
      <img src={movie.posterPath} alt={movie.title} />
      <br />
      <h4>Released: {movie.releaseDate} </h4>
    </div>
  );
}
