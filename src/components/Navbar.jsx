import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import "./navbar.css";

export function Navbar() {
  const [movieName, setMovieName] = useState("");
  const navigate = useNavigate();

  const isDisabled = !movieName.length;

  function handleSubmitForm(e) {
    e.preventDefault();
    navigate(`/search?q=${movieName}`);
    setMovieName("");
  }

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MoviesLib
        </Link>
      </h2>

      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Pesquisar filme..."
          value={movieName}
          onChange={({ target }) => setMovieName(target.value)}
        />

        <button type="submit" title="Buscar" disabled={isDisabled}>
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}
