import React from "react";
import "../checkout/checkout.css";
import { Link } from "react-router-dom";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProducts from "./checkoutproducts/CheckoutProducts";
import { useStateValue } from "../stateprovider/Stateprovider";

function Checkout() {
  const [{ basket }, disPatch] = useStateValue();

  const emptyCart = () => {
    let emptyDesc = "";
    if (basket.length === 0) {
      return (emptyDesc = " Your Amazon Cart is empty. ");
    } else return (emptyDesc = " Your shopping cart ");
  };
  console.log(basket.length);

  return (
    <div>
      <div>
        {/* ////the background pic   */}
        <div className="checkout">
          <div>
            <img
              className="checkoutImage"
              src="https://m.media-amazon.com/images/G/01/credit/CBCC/acq-marketing/maple/Q123-1103_US_CBCC_ACQ_Maple_Thumbnail_126x80._CB613265021_.png"
            />
            <p
              style={{
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              $60 instant gift card
            </p>
          </div>
          <div className="imageDesc">
            <p>Name, get $60 instantly upon approval of Amazon Visa</p>
          </div>
          <div className="imagebutton">
            <button type="">learn more</button>
          </div>
        </div>

        {/* ///// */}
        <div className="checkoutSubtotal">
          <div
            className="checkoutUpdate"
            style={
              {
                // width: "50%",
              }
            }
          >
            <p
              style={{
                fontSize: "2rem",
                paddingBottom: "10px",
              }}
            >
              {emptyCart()}
              {/* Your Amazon Cart is empty. */}
            </p>
            <p
              style={{
                fontSize: "15px",
                paddingBottom: "10px",
              }}
            >
              Check your saved for later items below or{" "}
              <Link to="/">continue shopping.</Link>
            </p>
            {/* //////////// */}
          </div>

          {/* ////////////// */}
          <div className="checkout__right">
            <Subtotal />
          </div>
        </div>
      </div>
      <div>
        {basket.map((item) => (
          <CheckoutProducts
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
