// Navbar.js
import React from "react";
import Movies from "../../Pages/Movies";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="Navbar">
        <Link to="/">Movies</Link>
        <Link to="/watchlist">Watchlist</Link>
        <Link to="/favourite">Favorite</Link>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
