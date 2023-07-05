import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import noImg from "../assets/no-image.svg";

const imageUrl = import.meta.env.VITE_IMG;

export function MovieCard({ movie, showLink = true }) {

  

  return (
    <div className="movie-card">
      <img
        src={movie.poster_path ? `${imageUrl}${movie.poster_path}` : noImg}
        alt={`Image from the movie ${movie.title}`}
      />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average}
      </p>

      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
}
