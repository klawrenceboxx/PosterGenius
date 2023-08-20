import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer";
import {useNavigate} from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      {/* CurrencyFormat is a component that formats numbers in a variety of ways */}
      <CurrencyFormat
        // renderText is a function that takes a value and renders it in a particular way
        renderText={(value) => (
          // the value is the subtotal of the basket
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        // various props used to customize the the appearance and behavious of the CurrencyFormat component
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        className="checkout__buttons"
        onClick={(e) => navigate("/payment")}
      >
        <h6>Proceed to Checkout</h6>
      </button>{" "}
      {/* this button will take us to the payment page */}
    </div>
  );
}

export default Subtotal;

///selector do research
