import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h2>You don't currently have any items</h2>
            <p>
              You have no items in your basket. To buy items, go back to home
              page and add them to the basket.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket </h2>
            {/* list out all of items */}
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                details={item.details}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <h1>Subtotal :</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
