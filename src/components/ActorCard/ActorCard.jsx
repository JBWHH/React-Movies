import React from 'react'
import { Link } from "react-router-dom";

export default function ActorCard({actor}) {
  return (
    <div className="actor-card">
        <Link to={`/actors/${actor}`}>
            <h1>{actor}</h1>
            <br />
            <img src="https://picsum.photos/seed/picsum/200" alt="" />
        </Link>
    </div>
  )
}
