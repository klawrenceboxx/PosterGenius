import React from "react";
import "./Product.css";
import { v4 as uuidv4 } from "uuid";

function Product({ title, image, price }) {
  const id = uuidv4();

  return (
    <div className="product" id={id}>
      <div>
        <img className="product__image" src={image} alt="Posters" />
      </div>
      <div className="product__info">
        <div>
          <p className="product__info__text">{title}</p>
          <img className="product__info__image" src="Heart" alt="heart" />
        </div>
        <div>
          <p className="product__info__price">{price}</p>
          <p className="Product__info__sizes">Multiple Sizes</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
