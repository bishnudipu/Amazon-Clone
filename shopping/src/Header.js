import React from "react";
import { BarChart, PlusOne, Search } from "@material-ui/icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">Products</div>
      </Link>
      <div className="navbar">
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <Search className="header__searchIcon" />
        </div>

        <div className="nav__item">
          <BarChart />
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <PlusOne />
            <div className="cart">{basket.length} results</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
