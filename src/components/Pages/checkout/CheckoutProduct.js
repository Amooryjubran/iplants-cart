import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, image, details }) {
  const [{ cart }, dispatch] = useStateValue();

  const RemoveFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct__image" alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p>{details}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={RemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
