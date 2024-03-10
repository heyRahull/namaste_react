import { useState } from "react";
import Logo from "../assets/food_villa_logo.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img className="h-28 p-2" src={Logo} alt="logo" />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="flex justify-between px-4 bg-pink-200 shadow-lg ">
      <Title />
      <div className="flex">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>{" "}
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/">Cart</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button
            className="p-2 m-2 h-12 mt-7 bg-green-500 text-white rounded-md hover:bg-gray-400"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 m-2  h-12 mt-7 bg-green-500 text-white rounded-md hover:bg-gray-400"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
