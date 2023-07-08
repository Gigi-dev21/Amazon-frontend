const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51NQbzkHV2kAtNdH4OetzKKUIndj2DqGjGy2QDYeZvKLWL8cpKzMOqeX30OCWu8kuMX0QHX97PLM04wyMDmzlNHaf00rhLSaj3g"
);

const app = express();

app.use(cors());
app.use(express.json());

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recived for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({ clientSecret: paymentIntent.client_secret });
});

exports.api = functions.https.onRequest(app);

// "http://127.0.0.1:5001/frontend-2f1bf/us-central1/api"
