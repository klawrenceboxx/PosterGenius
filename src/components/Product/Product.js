import React from "react";
import "./Product.css";
import Heart from "../../DesignAssets/images/Heart.png";
import {v4 as uuidv4} from "uuid";
import {useStateValue} from "../StateProvider";
import {keyboard} from "@testing-library/user-event/dist/keyboard";

function Product({id, title, image, price}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket = (event) => {
    event.preventDefault(); // Prevent navigation

    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
      },
    });
  };

  return (
    <div className="product__container">
      <div className="product__top">
        <img className="product__image" src={image} alt="Posters" />
      </div>
      <div className="product__Bottom">
        <div className="product__Bottom--line1">
          <p>{title}</p>
          <img src={Heart} alt="heart" />
        </div>
        <div className="product__Bottom--line2">
          <p>${price} CAD</p>
          <button onClick={addToBasket} className="Product__button">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
