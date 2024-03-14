import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestMenu = () => {
  const resId = useParams().id;
  const restaurantInfo = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <>
      <h2>Id : {restaurantInfo?.data?.cards[0]?.card?.card?.info?.id}</h2>
      <div className="flex">
        <div>
          <img
            src={
              IMG_CDN_URL +
              restaurantInfo?.data?.cards[0]?.card?.card?.info
                ?.cloudinaryImageId
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

        <div className="p-5">
          <h1 className="text-2xl">Menu</h1>
          <ul>
            {restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
              (item) => (
                <li key={item.card.info.id}>
                  {item.card.info.name}
                  <button
                    onClick={() => addFoodItem(item.card.info)}
                    className="p-2 m-2 bg-green-500 text-white rounded-md hover:bg-gray-400"
                  >
                    Add
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RestMenu;
