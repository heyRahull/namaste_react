import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestMenu = () => {
  const resId = useParams().id;
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2965552&lng=77.99659609999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json);
  }

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <>
      <h2>Id : {restaurantInfo?.data?.cards[0]?.card?.card?.info?.id}</h2>
      <div>
        <img
          src={
            IMG_CDN_URL +
            restaurantInfo?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
          alt="restaurant image"
        />
        <h2>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.name}</h2>
        <h3>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{restaurantInfo?.data?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>
          {restaurantInfo?.data?.cards[0]?.card?.card?.info?.avgRating} stars
        </h3>
      </div>
      <div>
        <ul>
          {restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (item) => (
              <li key={item.card.info.id}>{item.card.info.name}</li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default RestMenu;
