import { useState } from "react";
import Logo from "../assets/food_villa_logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img className="h-28 p-2" src={Logo} alt="logo" />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between px-4 bg-pink-200 shadow-lg ">
      <Title />
      <div className="flex">
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About </li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="px-2">Cart- {cartItems.length} items</li>
          </Link>
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
