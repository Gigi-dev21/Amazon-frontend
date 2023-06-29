import React from "react";
import "./products.css";
import { useStateValue } from "../CheckoutPage/stateprovider/Stateprovider";

function Products({ id, title, price, rating, image }) {
  const [{ basket }, disPatch] = useStateValue();

  console.log("this is the basket", basket);
  const addTobasket = () => {
    disPatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="productTitle"> {title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p className="ratingStar">⭐️</p>
            ))}
        </div>
      </div>
      <div className="imageAndButton">
        <img className="productImage" src={image} />
        <div>
          <button className="productButton" onClick={addTobasket}>
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
