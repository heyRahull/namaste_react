import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, description, imageId, price, id }) => {
  return (
    <div className="w-52 p-3 m-3 shadow-lg bg-slate-50 hover:bg-slate-200">
      <img
        src={IMG_CDN_URL + imageId}
        alt="BurgerKing image"
        className="h-40 w-[100%]"
      />
      <h2 className="font-bold text-lg">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees : {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
