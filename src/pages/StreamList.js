import React, { useState } from "react";

function StreamList() {
  const [movie, setMovie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Movie Added:", movie);
    setMovie("");
  };

  return (
    <div className="page">
      <h2>StreamList Homepage</h2>

      <p>Add a movie or show to your streaming list.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie or show title"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StreamList;