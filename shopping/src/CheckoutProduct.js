import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import reducer from "./reducer";
import { Delete } from "@material-ui/icons";

const CheckoutProduct = ({ id, title, image, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>

        <button onClick={removeFromBasket}>
          <Delete /> delete
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
