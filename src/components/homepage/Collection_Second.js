import React from "react";
import "./Collection.css";
import { useStateValue } from "../StateProvider";

export default function Special({
  id,
  title,
  title1,
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
        image3: image3,
        image4: image4,
        image5: image5,
        image6: image6,
        price1: price1,
        rating: rating,
      },
    });
  };
  return (
    <div className="collection__container">
      <div className="collection__name">{title1}</div>
      <div className="collection_images">
        <img src={image3} alt="" />
        <img src={image6} alt="" />
        <img src={image5} alt="" />
        <img src={image6} alt="" />
      </div>
      <hr className="collection__images__hr" />
      <div className="collection__desc">
        <h1>
          Enlighten your livingroom with this beautiful combo that brings
          happeness
        </h1>
        <h1>LivingRoom/Bedrooms/Kitchen</h1>
        <hr className="collection__images__hr" />
        <button className="collection__button" onClick={addToBasket}>
          Buy Now ${price1}
        </button>
        <hr className="collection__bottom" />
      </div>
    </div>
  );
}
