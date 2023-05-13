import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Homepage/Hero";
import Popular from "./components/Homepage/Popular";
import Promotion from "./components/Homepage/Promotion";
import Footer from "./components/Footer";
import Posters from "./components/Posters";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Footer />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Popular />
              <Promotion />
            </>
          }
        />
        <Route path="/posters" element={<Posters />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;

//ctrl + enter to pull up copilot
