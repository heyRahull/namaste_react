import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div>
        <div className="flex p-1 m-1">
          <h1 className="text-2xl font-bold">
            Cart Items - {cardItems.length}
          </h1>
          <button
            onClick={() => handleClearCart()}
            className="p-2 m-1 bg-green-500 text-white rounded-md hover:bg-gray-400"
          >
            Clear cart
          </button>
        </div>
        <div className="flex flex-wrap bg-pink-100">
          {cardItems.map((cardItem, index) => {
            return <FoodItem {...cardItem} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
