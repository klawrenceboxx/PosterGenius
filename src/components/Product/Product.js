import React from "react";
import "./Product.css";
import Heart from "../../DesignAssets/images/Heart.png";
import {v4 as uuidv4} from "uuid";
import {useStateValue} from "../StateProvider";

function Product({title, image, price}) {
  const id = uuidv4();

  const [{basket}, dispatch] = useStateValue();

  const addToBasket = () => {
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
    <div className="product">
      <div>
        <img className="product__image" src={image} alt="Posters" />
      </div>
      <div className="product__info">
        <div className="product__info__line1">
          <p className="product__info__text">{title}</p>
          <img className="product__info__image" src={Heart} alt="heart" />
        </div>
        <div className="product__info__line2">
          <p className="product__info__price">${price} CAD</p>
          <button onClick={addToBasket} className="Product__info__basket">
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
