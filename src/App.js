import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import StreamList from "./pages/StreamList";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1>🎬 StreamList</h1>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;