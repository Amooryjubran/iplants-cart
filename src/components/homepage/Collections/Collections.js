import React from "react";
import "./Collection.css";
import { useStateValue } from "../../StateProvider";

export default function Special({ id, title, image, price, details }) {
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
        details: details,
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
        <div className="collection__name">
          {title}
          <div className="underline"></div>
        </div>

        <div className="collection_images">
          <img src={image} alt="" />
          <img
            src="https://iplants.netlify.app/static/media/2.0c6d5c1e.jpg"
            alt=""
          />
          <img
            src="https://iplants.netlify.app/static/media/4.9dcea700.jpg"
            alt=""
          />
        </div>
        <hr className="collection__images__hr" />
        <div className="collection__desc">
          <h1>{details}</h1>
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
