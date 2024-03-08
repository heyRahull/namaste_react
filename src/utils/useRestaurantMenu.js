import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json);
  }
  return restaurantInfo;
};

export default useRestaurantMenu;
