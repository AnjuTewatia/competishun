// Movies.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movie.css";
import Watchlist from "./Watchlist";
import Navbar from "../LoginSignup/Navbar/Navbar";

const Movies = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            params: {
              api_key: "c121cd648f96c79ad2d1b302aeb81355",
            },
          }
        );

        setTopRatedMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  let favData = JSON.parse(sessionStorage.getItem("fav")) || [];
  let WatchData = JSON.parse(sessionStorage.getItem("watch")) || [];

  const handleFav = (movie) => {
    console.log("favruite movies", movie);
    alert("Movie Added to Favourite.");
    favData.push(movie);
    sessionStorage.setItem("fav", JSON.stringify(favData));
  };

  const handleWatchlist = (movie) => {
    console.log("watchlist movies", movie);

    alert("Movie Added to Watchlist.");
    WatchData.push(movie);
    sessionStorage.setItem("watch", JSON.stringify(WatchData));
  };

  return (
    <div>
      <Navbar />
      <h2>Top Rated Movies</h2>
      <div className="movies">
        {topRatedMovies.map((movie) => (
          <div className="movie">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1pQCXHQa3V6BGwyNMlsVL4R2b7tZcRR4ZWQ&usqp=CAU"
              alt="backend glich"
            />
            <h2 key={movie.id}> Title:{movie.original_title}</h2>
            {/* <h3>{movie.overview}</h3> */}
            {/* <h3> Release Date:{movie.release_date}</h3> */}
            <h3> Genre :{movie.genre_ids}</h3>
            {/* <h3>{movie.vote_count}</h3> */}
            <button className="buttons" onClick={() => handleFav(movie)}>
              Favourites
            </button>
            <button className="buttons" onClick={() => handleWatchlist(movie)}>
              Watchlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
