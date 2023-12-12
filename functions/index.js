/* eslint-disable */
/* prettier-ignore */

require("dotenv").config({path: "../.env"});

const functions = require("firebase-functions");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors({origin: true}));

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "cad",
    });

    console.log("Payment Intent:", paymentIntent);

    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    response.status(500).send({message: "Failed to create PaymentIntent"});
  }
});

exports.api = functions.https.onRequest(app);
