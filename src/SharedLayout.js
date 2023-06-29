import React from "react";
import "../src/Components/Header/Header";
import { Outlet } from "react-router-dom";
import Header from "../src/Components/Header/Header";
function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default SharedLayout;
