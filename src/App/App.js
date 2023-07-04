import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";

import "./App.css";
import Header from "../components/Header/Header";
import Hero from "../pages/Homepage/Hero";
import Popular from "../pages/Homepage/Popular";
import Promotion from "../pages/Homepage/Promotion";
import Footer from "../components/Footer/Footer";
import Posters from "../pages/Posters/Posters";
import Checkout from "../pages/Checkout/Checkout";
import Payment from "../pages/Payment/Payment";
import PosterInfo from "../pages/PosterInfo/PosterInfo";
import {useStateValue} from "../components/StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import Homepage2 from "../pages/Homepage2/Homepage2";
import Orders from "../pages/Orders/Orders";
import Login from "../pages/Login/Login";

const promise = loadStripe(
  "pk_test_51N5z6KKWLTAcuCBtS9mA00hfM9jURZnEwCw6lhqrrXrayh1SogeNQUek4vzgIbyIGv6I2C2DL7ZxbIshY5h1kTZd00UJtbwvNO"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        {/* <Footer /> */}
      </div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Homepage2 />
                {/* <Hero />
              <Popular />
              <Promotion /> */}
              </>
            }
          />
          <Route path="/posters" element={<Posters />} />
          <Route path="/posterInfo/:id" element={<PosterInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/Orders" element={<Orders />} />

          {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
      </main>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//ctrl + enter to pull up copilot
