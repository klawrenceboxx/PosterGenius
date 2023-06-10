import React from "react";
import "./Checkout.css";
import Subtotal from "../../components/Subtotal/Subtotal";
import {useStateValue} from "../../components/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import "../../DesignAssets/fonts/Poppins-Regular.ttf";

function Checkout() {
  // figure out what this below code does
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <h1>Shopping Cart</h1>
      <div className="checkout__content">
        <div className="checkout__left">
          {basket.map((item) => (
            <div className="checkout__product">
              <CheckoutProduct
                // id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <div className="checkout__right">
          <div className="checkout__right__title">
            <h3>Order Summary</h3>
          </div>
          <div className="checkout__right__content">
            <div className="checkout__right__text">
              <Subtotal />
              <p>Estimated Shipping</p>
              <p>Estimated Tax</p>
              <p>Estimated Total</p>
            </div>
            <div className="checkout__right__buttons">
              <button>
                <p>PROCEED TO CHECKOUT</p>
              </button>
              <button>
                <p>PAYPAL CHECKOUT</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
