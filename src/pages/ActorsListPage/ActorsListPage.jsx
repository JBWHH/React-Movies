import React from 'react'
import ActorCard from '../../components/ActorCard/ActorCard';


export default function ActorListPage({movies}) {
  const uActors = new Set();


  movies.forEach((movie) => {
    movie.cast.forEach((actor) => {
      uActors.add(actor);
    });
  });

  const uActorsArray = Array.from(uActors);

  return (
    <div>
      <h1>Actors</h1>
      {uActorsArray.map((actor) => (
        <ActorCard key={actor} actor={actor} />
      ))}
    </div>
  )
}

