//import react and usestate
import React, {useEffect, useState} from "react";
import {db} from "./firebase";
import {doc, setDoc} from "firebase/firestore";

import "./Payment.css";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link, useNavigate} from "react-router-dom";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from "./axios";
import e from "cors";

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();

  console.log("User UID:", user?.uid); // This line logs the user's UID

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate(); // this allows us to programmatically change the url

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  // clientSecret is how stripe knows how much to charge the customer. should be a sting that contains the secret key that we generated in the backend
  const [clientSecret, setClientSecret] = useState("");

  // form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    // this useEffect will only run when the basket changes
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      try {
        const response = await axios({
          // axios is a library that allows us to make requests
          method: "post",
          // Stripe expects the total in a currencies subunits
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
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

  //
  //-------------------------------------------------------------------------------------------------------------------
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
      dispatch({
        type: "EMPTY_BASKET",
      });
      navigate("/orders");
    } catch (error) {
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    }

    // Firestore update logic
    const userDocRef = doc(db, "users", user.uid);
    console.log("User doc ref:", userDocRef);

    try {
      await setDoc(
        userDocRef,
        {
          postalCode: postalCode,
          address: streetAddress,
          city: city,
          country: country,
          province: province,
          phoneNumber: phoneNumber,
          // ... add other fields similarly ...
        },
        {merge: true}
      );
      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  //
  //-------------------------------------------------------------------------------------------------------------------
  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  //
  //-------------------------------------------------------------------------------------------------------------------
  const updateAddressInFirestore = async (e) => {
    e.preventDefault();

    try {
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(
        userDocRef,
        {
          address: streetAddress,
        },
        {merge: true}
      );
      console.log("Address updated successfully!");
      console.log("address is", streetAddress);
    } catch (error) {
      console.error("Error updating address: ", error);
    }
  };

  //
  //-------------------------------------------------------------------------------------------------------------------
  return (
    <div className="payment">
      <section className="contact__info">
        <div className="payment__container">
          <h1 style={{margin: "0.5em 0"}}>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
          {/* jjjjjjjjjjjjjjjjjjjjjjjjjj */}
          <button onClick={updateAddressInFirestore}>Update Address</button>

          <div className="payment__contact">
            <h5>1. Contact Information</h5>
            <div className="payment__input__container">
              <div className="payment__nameInput">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="payment__contact">
            <h5>2. Shipping address</h5>
            <div className="payment__input__container">
              <div className="payment__nameInput">
                <input
                  type="text"
                  placeholder="Street Address 1"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="address"
                  onChange={(e) => setStreetAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="payment__nameInput">
                <input
                  type="text"
                  placeholder="Postal/Zip Code"
                  onChange={(e) => setPostalCode(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Province"
                  onChange={(e) => setProvince(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="payment__contact">
            <h5>3. Payment Method</h5>
            <div className="payment__input__container">
              {/* <div>
                <input type="checkbox" />
                <input type="checkbox" />
              </div> */}
              {/* <CustomInput placeholder="Card Number" /> */}
              <CardElement onChange={handleChange} className="pay" />

              <div className="payment__nameInput">
                {/* <CustomInput placeholder="MM*" />
                <CustomInput placeholder="YY*" />
                <CustomInput placeholder="CSV" /> */}
              </div>
            </div>
          </div>
          {/* <div className="payment__section">
            <div className="payment__title">
              <h4>Delivery Address</h4>
            </div>
            <div className="payment__address">
              <p>123 React Lane</p>
              <p>Los Angeles, CA</p>
            </div>
          </div> */}
        </div>
      </section>

      <section className="review__delivery">
        <div className="payment__container">
          <div className="payment__section">
            <div className="payment__title">
              <h4>Review items and delivery</h4>
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
            {/* <div className="payment__title">
              <h4>Payment Method</h4>
            </div> */}
            <div className="payment__details">
              {/* this is where the stripe magic happens */}
              <form onSubmit={handleSubmit}>
                <div className="payment__price__container">
                  {/* CurrencyFormat is a component that formats numbers in a variety of ways */}
                  <CurrencyFormat
                    // renderText is a function that takes a value and renders it in a particular way
                    renderText={(value) => <h4>Order Total: {value}</h4>}
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
      </section>
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
