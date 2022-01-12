import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="chechout__left">
        <img src="ad.png" alt="name" className="checkout__ad" />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => {
            const { id, title, image, price, rating } = item;
            return (
              <CheckoutProduct
                id={id}
                title={title}
                image={image}
                price={price}
                rating={rating}
              />
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
