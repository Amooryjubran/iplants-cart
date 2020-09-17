import React from "react";
import "./navbar.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [{ basket }] = useStateValue();
  return (
    <div class="hold">
      <div class="header">
        <div class="container" id="nav-container">
          <div id="navbar-logo">
            <h1 className="logo-text">iPlants</h1>
          </div>
          <ul class="nav">
            <li>
              <Link to="/">iHome</Link>
            </li>
            <li>
              <Link to="/blogs">iBlogs</Link>
            </li>
            <li>
              <Link to="/inspiration">inspiration</Link>
            </li>
            <li>
              <Link to="/contact">iContact</Link>
            </li>
            <li>
              <Link to="/checkout">
                <ShoppingBasketIcon />
                {basket?.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
