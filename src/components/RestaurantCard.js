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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="BurgerKing image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars.</h4>
    </div>
  );
};

export default RestaurantCard;
