import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src="shoppins.jpg" alt="name" className="home__image" />

        <div className="home__row">
          <Product
            id="1"
            title=" Bennet Mystic is 15.6 inch shirt which is gorgeous and simple to wear
          and it is vwey werable"
            price={20.0}
            image="shirts.jpg"
          />
          <Product
            id="2"
            title=" article of clothing that extends from the waist to around the ankle easy comfort"
            price={30.0}
            image="pant.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title=" high standard lather coated with very high cemfy design"
            price={10.0}
            image="wallet.jpg"
          />
          <Product
            id="4"
            title=" puma the world class comfy design and with huge success"
            price={35.0}
            image="snicker.jpg"
          />
          <Product
            id="5"
            title=" with high standard wool and nylon with very comfy"
            price={8.0}
            image="towel.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title=" high definitation camera with brand sony very handy"
            price={80.0}
            image="camera.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
