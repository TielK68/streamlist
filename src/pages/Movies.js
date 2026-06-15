import React, { useState } from "react";

function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");

  const apiKey = "77548ad842159eff5ad3a563cbb55322";

  const searchMovies = async (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setMessage("Please enter a movie title.");
      setMovies([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
          searchTerm
        )}`
      );

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setMovies(data.results.slice(0, 5));
        setMessage("");
      } else {
        setMovies([]);
        setMessage("No movies found.");
      }
    } catch (error) {
      console.error(error);
      setMovies([]);
      setMessage("Error retrieving movie information.");
    }
  };

  return (
  <div className="page">
    <h2>Movie Search</h2>

    <p>Search for movie information using the TMDB API.</p>

    <form onSubmit={searchMovies} className="movie-form">
      <input
        type="text"
        placeholder="Enter movie title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>

    {message && <p>{message}</p>}

    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "20px",
          }}
        >
          <div style={{ flex: 1 }}>
            <h3>{movie.title}</h3>

            <p>
              <strong>Release Date:</strong>{" "}
              {movie.release_date || "Not Available"}
            </p>

            <p>{movie.overview || "No description available."}</p>
          </div>

          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              style={{
                borderRadius: "8px",
                maxWidth: "200px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  </div>
);
}

export default Movies;