import React from "react";
import Login from "../../login/Login";
import "./lader.css";
function Lader() {
  return (
    <div className="lader">
      <p className="desc">
        To review orders or Proceed to the payment You need to Sign in first!
      </p>

      <Login />
    </div>
  );
}

export default Lader;
