import { IMG_CDN_URL } from "../constants";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  id,
}) => {
  return (
    <div className="w-52 p-3 m-3 h-80 shadow-lg bg-slate-50 hover:bg-slate-200">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="BurgerKing image"
        className="h-40 w-[100%]"
      />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars.</h4>
    </div>
  );
};

export default RestaurantCard;
