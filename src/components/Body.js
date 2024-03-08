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
  // if (filterRestaurants?.length === 0)
  //   return <h1>No Restraunt match your Filter!!</h1>;

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
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
