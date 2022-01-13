import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, image, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title} </p>
        <p className="product__price">
          <small> </small>
          <strong>{price} </strong>
        </p>
      </div>
      <img src={image} alt="name" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
