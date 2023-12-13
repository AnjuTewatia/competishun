import React, { useEffect, useState } from "react";
import { auth, provider } from "../../Firebase";
import { signInWithPopup } from "firebase/auth";
import Navbar from "./Navbar/Navbar";
import MainNavbar from "./Navbar/MainNavbar";
const Signup = () => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      {value ? (
        <Navbar />
      ) : (
        <button onClick={handleClick}> sign up with google</button>
      )}
    </div>
  );
};

export default Signup;
