import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAb2K8gfLaHywu57r71nf9ixaRE7l0obiM",
  authDomain: "frontend-2f1bf. firebaseapp.com",
  projectId: "frontend-2f1bf",
  storageBucket: "frontend-2f1bf.appspot.com",
  messagingSenderId: "497785396918",
  appId: "1:497785396918:web:d2ca287776378d25841017",
  measurementId: "G-4Q8VX1WCYV",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };
