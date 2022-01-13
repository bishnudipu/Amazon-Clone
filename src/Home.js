import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          <Product id="1" title=" T.shirt" price={20.0} image="Tshirt.jpg" />
          <Product id="2" title="Belt" price={30.0} image="Belt.jpg" />
        </div>
        <div className="home__row">
          <Product id="3" title="Wallet" price={10.0} image="wallet.jpg" />
          <Product id="4" title=" Cap" price={35.0} image="cap.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
