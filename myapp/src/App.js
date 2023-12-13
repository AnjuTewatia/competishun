import logo from "./logo.svg";
import "./App.css";
import Signup from "./Components/LoginSignup/Signup";
import Navbar from "./Components/LoginSignup/Navbar/Navbar";
import Movies from "./Components/Pages/Movies";
import AllRoutes from "./Components/AllRoutes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Signup />
      <AllRoutes />

      {/* <Navbar /> */}
      {/* <Movies /> */}
    </div>
  );
}

export default App;
