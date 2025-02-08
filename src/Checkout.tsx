import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./DesignAssets/fonts/Poppins-Regular.ttf";

function Checkout() {
  // figure out what this below code does
  const [{basket}, dispatch] = useStateValue();
  console.log(basket);

  return (
    <div className="Shopping__cart">
      <section className="checkout">
        <div className="checkout__container">
          <h1 style={{margin: "0.5em 0"}}>Shopping Cart</h1>
          <div className="checkout__content">
            <div className="checkout__left">
              {basket.map((item, index) => {
                console.log("this is an id"); // Log the id value to the console
                console.log(item.id); // Log the id value to the console

                return (
                  <div key={item.id} className="checkout__product">
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </div>
            <div className="checkout__right">
              {basket.length === 0 ? (
                <div className="empty__cart__message">
                  <h3>Your cart is empty</h3>
                </div>
              ) : (
                <>
                  <div className="checkout__right__title">
                    <h3>Order Summary</h3>
                  </div>
                  <div className="checkout__right__content">
                    <div className="checkout__right__text">
                      <Subtotal />
                      {/* <p>Estimated Shipping</p>
                  <p>Estimated Tax</p>
                  <p>Estimated Total</p> */}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
