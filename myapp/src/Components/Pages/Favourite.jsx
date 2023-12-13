import React from "react";
import "./Movie.css";
import Navbar from "../LoginSignup/Navbar/Navbar";

const Favourite = () => {
  const favourite = JSON.parse(sessionStorage.getItem("fav")) || [];

  return (
    <div>
      <Navbar />
      <h1> Favourite Movies</h1>

      <div className="movies">
        {favourite.length > 0 &&
          favourite.map((movie) => (
            <div className="movie">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pQCXHQa3V6BGwyNMlsVL4R2b7tZcRR4ZWQ&usqp=CAU"
                alt=""
              />
              <h3>{movie.overview}</h3>
              <h3>{movie.vote_count}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favourite;
