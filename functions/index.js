const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const stripe = require("stripe")(
    `sk_test_51N5z6KKWLTAcuCBt0XFtbZp5MPLUMzUr2eCpF5lt` +
    `2lNG62S7ZThlIu4E5vlz7Sem0iRl5r5uWwlL3oPjKigY4PRr00qvYwJtUR`);
const express = require("express");

admin.initializeApp();

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
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
