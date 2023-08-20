import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

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
        {/* hrtr */}
        {/* <div className="product__strip">
          <button onClick={addToBasket} className="Product__button">
            <h6>Add to Cart</h6>
          </button>
        </div> */}
        {/*  */}
      </div>
    </div>
  );
}

export default Product;
