import React from "react";
import "./Collection.css";
import { useStateValue } from "../StateProvider";

export default function Special({
  id,
  title,
  title1,
  title2,
  image,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  price,
  price1,
  price2,
  rating,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,

        image: image,
        image1: image1,
        image2: image2,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="collection">
      <h1 className="collection__title">
        <span>Our Collections</span>
      </h1>
      <hr className="collection__hr" />
      <div className="collection__container">
        <div className="collection__name">{title}</div>
        <div className="collection_images">
          <img src={image} alt="" />
          <img src={image1} alt="" />
          <img src={image2} alt="" />
        </div>
        <hr className="collection__images__hr" />
        <div className="collection__desc">
          <h1>A combo where you can design your bedrooms in a perfect way</h1>
          <h1>Bedrooms/LivingRoom/GuestRoom</h1>
          <hr className="collection__images__hr" />
          <button className="collection__button" onClick={addToBasket}>
            Buy Now ${price}
          </button>
          <hr className="collection__bottom" />
        </div>
      </div>
    </div>
  );
}
