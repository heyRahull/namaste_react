import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const isOnline = useOnline();
  const [allRestaurants, filterRestaurants, setFilterRestaurants] =
    useRestaurants();

  if (isOnline == false) {
    return (
      <>
        <h1>Looks like you are offline 🔴</h1>
        <h2>Check your Internet.</h2>
      </>
    );
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-200 my-5 shadow-lg">
        <input
          type="text"
          className="focus:bg-green-100 p-2 m-2"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-green-500 text-white rounded-md hover:bg-gray-400"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list flex flex-wrap bg-pink-100">
        {filterRestaurants?.length === 0 ? (
          <h1>No Restraunt match your Filter!!</h1>
        ) : (
          filterRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
