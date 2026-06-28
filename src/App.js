import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import StreamList from "./pages/StreamList";
import Movies from "./pages/Movies";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/Login";
import CreditCard from "./pages/CreditCard";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("streamListUser") !== null;
  });

  const handleLogout = () => {
    localStorage.removeItem("streamListUser");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated && (
          <nav className="navbar">
            <h1>🎬 StreamList</h1>

            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/about">About</Link>

              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </nav>
        )}

        <Routes>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route
            path="/"
            element={
              isAuthenticated ? <StreamList /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/movies"
            element={
              isAuthenticated ? <Movies /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/cart"
            element={
              isAuthenticated ? <Cart /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/credit-card"
            element={
              isAuthenticated ? (
                <CreditCard />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/about"
            element={
              isAuthenticated ? <About /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="*"
            element={<Navigate to={isAuthenticated ? "/" : "/login"} replace />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;