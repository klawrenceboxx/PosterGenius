import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider"; // 1. import useStateValue from StateProvider.js

function CheckoutProduct({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue(); // 2. use useStateValue to pull information from the data layer

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div>
      <img src={image} alt="" />
      <div>
        <p>{title}</p>
        <p>$</p>
        <p>{price}</p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
