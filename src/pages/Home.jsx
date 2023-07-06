import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

import "./moviesGrid.css";

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const result = data.results;
    setTopMovies(result);
  };

  useEffect(() => {
    document.title = "MoviesLib";
    const topRatedUrl = `${moviesUrl}/top_rated/?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);


  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>

      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}
