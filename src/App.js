import { Route, Routes } from "react-router-dom";
// import "../src/Resources/bootstrap.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Checkout from "./Components/CheckoutPage/checkout/Checkout";
import Login from "./Components/login/Login";
import SharedLayout from "./SharedLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
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
