import React from "react";
import "./checkoutProduct.css";
import { Rating } from "@mui/material";
import { useStateValue } from "../../stateprovider/Stateprovider";

function CheckoutProducts({ id, title, image, price, rating, hiddenButton }) {
  const [{ basket, user }, disPatch] = useStateValue();
  const removeFromBasket = () => {
    disPatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout_Product">
      <img className="checkout_ProductImage" src={image} />
      <div className="checkout_ProductInfo">
        <p className="checkout_Title">{title}</p>
        <p className="checkout_Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_Rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        {!hiddenButton && (
          <button className="removeButton" onClick={removeFromBasket}>
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProducts;
