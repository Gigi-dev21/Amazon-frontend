import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVkYaM-AJsjsezD6tdhd4OLm_9Dmar3fA",
  authDomain: "clone-33ee8.firebaseapp.com",
  projectId: "clone-33ee8",
  storageBucket: "clone-33ee8.appspot.com",
  messagingSenderId: "819892991550",
  appId: "1:819892991550:web:1a35c94afdb0caa5ed836f",
  measurementId: "G-733FN6NMMH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
