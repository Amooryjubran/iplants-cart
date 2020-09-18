import React from "react";
import Star from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, price1, price2, rating, image }) {
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
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price || price1 || price2}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <Star className="product__star" />
              </p>
            ))}
        </div>
        <button onClick={RemoveFromCart}>Remove from cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
