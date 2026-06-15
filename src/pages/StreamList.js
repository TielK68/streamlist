import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

function StreamList() {
  const [movie, setMovie] = useState("");

  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("streamListMovies");
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("streamListMovies", JSON.stringify(movies));
  }, [movies]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movie.trim() === "") return;

    if (editIndex !== null) {
      const updatedMovies = movies.map((item, index) =>
        index === editIndex ? { ...item, title: movie } : item
      );

      setMovies(updatedMovies);
      setEditIndex(null);
    } else {
      setMovies([
        ...movies,
        {
          title: movie,
          completed: false,
        },
      ]);
    }

    setMovie("");
  };

  const handleEdit = (index) => {
    setMovie(movies[index].title);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedMovies = movies.filter((_, i) => i !== index);
    setMovies(updatedMovies);
  };

  const handleComplete = (index) => {
    const updatedMovies = movies.map((item, i) =>
      i === index
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    );

    setMovies(updatedMovies);
  };

  return (
    <div className="page">
      <h2>My Streaming Watchlist</h2>

      <p>Add a movie or show to your streaming list.</p>

      <form onSubmit={handleSubmit} className="movie-form">
        <input
          type="text"
          placeholder="Enter movie or show title"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <h3>Total Movies: {movies.length}</h3>

      <div className="movie-list">
        {movies.map((item, index) => (
          <div key={index} className="movie-item">
            <span className={item.completed ? "completed" : ""}>
              {item.title}
            </span>

            <div className="movie-actions">
              <button onClick={() => handleComplete(index)}>
                <FaCheck />
              </button>

              <button onClick={() => handleEdit(index)}>
                <FaEdit />
              </button>

              <button onClick={() => handleDelete(index)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StreamList;