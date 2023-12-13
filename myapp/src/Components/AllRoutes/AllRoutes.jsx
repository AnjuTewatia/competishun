import React from "react";
import Watchlist from "../Pages/Watchlist";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "../LoginSignup/Navbar/MainNavbar";
import Favourite from "../Pages/Favourite";
import Signup from "../LoginSignup/Signup";
import Movies from "../Pages/Movies";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Signup />}></Route> */}
        <Route path="/" element={<Movies />}></Route>

        <Route path="/watchlist" element={<Watchlist />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
