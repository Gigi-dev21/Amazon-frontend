// import React from "react";
// import "./header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <div className="header">
//       <Link to="/">
//         <img
//           className="headerLogo"
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//         />
//       </Link>

//       <div className="headerNavButtons">
//         <LocationOnIcon
//           style={{
//             color: "white",
//           }}
//         />
//         <span className="headerOptionLineOne">Hello, </span>
//         <br />
//         <span className="headerOptionLineTwo">Select ur address</span>
//       </div>

//       <div className="headerSearch">
//         <input className="textInput " type="text"></input>
//         <SearchIcon className="searchIcon" />
//       </div>

//       <ShoppingCartIcon className="cart" />
//       <div className="headerNavButtons">
//         <span className="headerOptionLineOne">Hello,sign in ,</span>
//         <br />
//         <span className="headerOptionLineTwo"> Account & Lists</span>
//       </div>

//       <div className="headerNavButtons">
//         <span className="headerOptionLineOne">Returns &</span>
//         <br />
//         <span className="headerOptionLineTwo"> Orders</span>
//       </div>

//       <div className="carts">
//         <ShoppingCartIcon className="cart" />
//         <span className="cartUpdate">0</span>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../CheckoutPage/stateprovider/Stateprovider";

function Header() {
  const [{ basket, user }, disPatch, emails] = useStateValue();
  return (
    <div className="header ">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to="/login" className="header_option">
          <span className="header_optionLineOne">Hello{emails}</span>
          <span className="header_optionLineTwo">sign In</span>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">your</span>
          <span className="header_optionLineTwo">prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />

            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
          
    </div>
  );
}

export default Header;
