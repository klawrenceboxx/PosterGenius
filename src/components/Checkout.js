import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  // figure out what this below code does
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <h1>hey</h1>
      {basket.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
      ))}

      <Subtotal />
    </div>
  );
}

export default Checkout;
