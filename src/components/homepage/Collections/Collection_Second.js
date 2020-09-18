import React from "react";
import "./Collection.css";
import { useStateValue } from "../../StateProvider";

export default function Special({ id, title, price, image, details }) {
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
    <div className="collection__container">
      <div className="collection__name">
        {title}
        <div className="underline"></div>
      </div>

      <div className="collection_images">
        <img src={image} alt="" />
        <img
          src="https://iplants.netlify.app/static/media/5.b17e3aef.png"
          alt=""
        />
        <img
          src="https://iplants.netlify.app/static/media/7.e55e25d8.jpg"
          alt=""
        />
        <img
          src="https://iplants.netlify.app/static/media/8.bee4a025.jpg"
          alt=""
        />
      </div>
      <hr className="collection__images__hr" />
      <div className="collection__desc">
        <h1 className="collecion__seconds">{details}</h1>
        <h1 className="collecion__seconds">LivingRoom/Bedrooms/Kitchen</h1>
        <hr className="collection__images__hr" />
        <button className="collection__button" onClick={addToBasket}>
          Buy Now ${price}
        </button>
        <hr className="collection__bottom" />
      </div>
    </div>
  );
}
