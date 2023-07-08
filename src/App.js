import { Route, Routes } from "react-router-dom";
// import "../src/Resources/bootstrap.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Checkout from "./Components/CheckoutPage/checkout/Checkout";
import Login from "./Components/login/Login";
import SharedLayout from "./SharedLayout";
import Payment from "./payments/Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/orders/Orders";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./Components/CheckoutPage/stateprovider/Stateprovider";
import Lader from "./Components/CheckoutPage/subtotal/Lader";
const promise = loadStripe(
  " pk_test_51NQbzkHV2kAtNdH4K13tX0neFtmDp2l5CCOqDBpQl8qcd7PVa5TNWZ7Zg5MAXekDS8F7x5p7zdp9WnKuYiijelsi00GyZXqz2R"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/lader" element={<Lader />} />
          <Route
            path="payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
        <Route path="checkout" element={<Checkout />} />
      </Routes> */}
    </div>
  );
}

export default App;
