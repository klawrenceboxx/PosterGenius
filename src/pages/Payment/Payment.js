//import react and usestate
import React, {useEffect, useState} from "react";
import "./Payment.css";
import {useStateValue} from "../../components/StateProvider";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import {Link, useNavigate, useRouteMatch} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../../components/reducer";
import axios from "../../components/axios";

function Payment() {
  const [{basket}, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // this allows us to programmatically change the url

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  // clientSecret is how stripe knows how much to charge the customer. should be a sting that contains the secret key that we generated in the backend
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // this useEffect will only run when the basket changes
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      try {
        const response = await axios({
          // axios is a library that allows us to make requests
          method: "post",
          // Stripe expects the total in a currencies subunits
          url: `/payments/create`,
          data: {
            total: getBasketTotal(basket) * 100,
          }, // this is the endpoint we created in the backend
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error with getting client secret:", error.message);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Response status:", error.response.status);
          console.error("Response headers:", error.response.headers);
        } else if (error.request) {
          console.error("Request:", error.request);
        }
      }
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    console.log(clientSecret);


    try {
      const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // paymentIntent = payment confirmation
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      navigate("/orders"); // this will prevent the user from going back to the payment page after they have submitted their payment
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    }
  };

  const handleChange = (e) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment__container">
      <h1 style={{margin: "0.5em 0"}}>
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h1>
      <div className="payment__contact">
        <h3>1. Contact Information Already have an account? Please Sign In</h3>
        <div className="payment__inputs">
          <div className="payment__nameInput">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
          </div>
          <input placeholder="Email Address" type="text" />
          <input placeholder="Phone Number" type="text" />
        </div>
      </div>

      <div className="payment__contact">
        <h3>2. Shipping address</h3>
        <div className="payment__inputs">
          <div className="payment__nameInput">
            <input placeholder="First Name" type="text" />
            <input placeholder="Last Name" type="text" />
          </div>
          <div className="payment__nameInput">
            <input placeholder="Street Adress 1" type="text" />
            <input placeholder="Apt/Unit No." type="text" />
          </div>
          <div className="payment__nameInput">
            <input placeholder="Postal Code" type="text" />
            <input placeholder="City" type="text" />
            <input placeholder="Province" type="text" />
          </div>
        </div>
      </div>

      <div className="payment__contact">
        <h3>3. Payment</h3>
        <div className="payment__inputs">
          <div>
            <input type="checkbox" />
            <input type="checkbox" />
          </div>
          <input placeholder="Card Number" type="text" />
          <div className="payment__nameInput">
            <input placeholder="MM*" type="text" />
            <input placeholder="YY*" type="text" />
            <input placeholder="CSV" type="text" />
          </div>
        </div>
      </div>
      <div className="payment__section">
        <div className="payment__title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment__address">
          <p>123 React Lane</p>
          <p>Los Angeles, CA</p>
        </div>
      </div>

      <div className="payment__section">
        <div className="payment__title">
          <h3>Review items and delivery</h3>
        </div>
        <div className="payment__items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>

      <div className="payment__section">
        <div className="payment__title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment__details">
          {/* this is where the stripe magic happens */}
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__price__container">
              {/* CurrencyFormat is a component that formats numbers in a variety of ways */}
              <CurrencyFormat
                // renderText is a function that takes a value and renders it in a particular way
                renderText={(value) => <h3>Order Total: {value}</h3>}
                // various props used to customize the the appearance and behavious of the CurrencyFormat component
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>
            <button disabled={processing || disabled || succeeded}>
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
            {/* error */}
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;

//6:40:26

// firebase emulators:start

// 6:18 axios
// 6:34 server
// firebase init, firebase functions cloud functions
// 6:52 open emulator
