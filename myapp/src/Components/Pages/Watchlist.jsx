// Watchlist.js
import React from "react";
import Navbar from "../LoginSignup/Navbar/Navbar";

const Watchlist = () => {
  // console.log("Watchlist Movies:", watchlist);
  const watch = JSON.parse(sessionStorage.getItem("watch")) || [];

  const handleButton = () => {
    alert("Movie is Playing");
  };
  return (
    <div>
      <Navbar />
      <h2>Watchlist</h2>
      <div className="movies">
        {watch.length > 0 &&
          watch.map((movie) => (
            <div>
              <div className="movie" key={movie.id}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pQCXHQa3V6BGwyNMlsVL4R2b7tZcRR4ZWQ&usqp=CAU"
                  alt=""
                />
                <h2> Title :{movie.original_title}</h2>
                {/* Add other details as needed */}
                <h3>{movie.overview}</h3>
                <h3> Release Date :{movie.release_date}</h3>
                <h3> Genre : {movie.genre_ids}</h3>
                <h3> Rating{movie.vote_count}</h3>
                <button onClick={handleButton}>Playing</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watchlist;
