import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <div>
      <div className="Navbar">
        <Link to="/movies">Movies</Link>
        <h3>Cards</h3>
        <h3> Hotels</h3>
      </div>
    </div>
  );
};

export default MainNavbar;
