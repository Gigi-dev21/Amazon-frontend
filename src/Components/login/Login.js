import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";
import { auth } from "../../firebase.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Header from "../Header/Header";
import Payment from "../../payments/Payment";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div>
      <div className="login">
        <div>
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </div>
        <div className="loginContainer">
          <h1>Sign in</h1>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <button
              type="submit"
              className="login_Signin_Button"
              onClick={signIn}
            >
              Sign in
            </button>
          </form>
          <p>
            By continuing,you agree to <Link> Amazon's Conditions of Use</Link>
            and <Link>Privacy Notice</Link>
          </p>
          <button className="login_register_Button" onClick={register}>
            Create your Amazon account
          </button>
        </div>

        {/* <div>
          <img
            className="login_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          />
        </div>
        <div className="loginContainer">
          <h1>Sign in</h1>

          <form>
            <h5>Email or mobile phone number</h5>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="login_Signin_Button"
              onClick={signIn}
            >
              Continue
            </button>
          </form>

          <div
            style={{
              textAlign: "left",
            }}
          >
            By continuing, you agree to Amazon's{" "}
            <Link>
              Conditions of <br />
              Use
            </Link>
            and <Link>Privacy Notice</Link>
          </div>
          <div
            style={{
              marginTop: "20px",
              textAlign: "left",
            }}
          >
            Need help?
          </div>
        </div>

        <div className="newToAmazon">
          <hr
            style={{
              width: "160px",
            }}
          />
          <div>New to Amazon</div>
          <hr
            style={{
              width: "160px",
            }}
          />
        </div> */}
      </div>
      {/* <Header emails={email} /> */}
    </div>
  );
};

export default Login;
