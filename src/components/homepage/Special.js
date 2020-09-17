import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

export default function Special({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="home">
      <div className="special">
        <div className="title">
          <span>Today's Special</span>
          <hr className="hr__special" />
        </div>

        <div className="special__container">
          <img src={image} alt="" className="special__image" />
          <div className="special__right">
            <div className="special_title">
              <h1 className="special__h1">
                {title} ${price}
              </h1>
              <div className="underline"></div>
              <p className="special__text">{rating}</p>
              <hr className="hr__bottom" />
              <button className="special__bottom" onClick={addToBasket}>
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
