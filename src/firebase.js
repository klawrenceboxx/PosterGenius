import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj6p5VFSExYSWIZUllJDfvPUa3CBJfDZ0",
  authDomain: "postergenius-14856.firebaseapp.com",
  projectId: "postergenius-14856",
  storageBucket: "postergenius-14856.appspot.com",
  messagingSenderId: "288158376102",
  appId: "1:288158376102:web:ead403b2b25e7034f05467",
  measurementId: "G-WS50WJJDNT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};

// export default db;

// Path: src\index.js
// Compare this snippet from src\index.js:
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { StateProvider } from "./components/StateProvider";
// import reducer, { initialState } from "./components/reducer";
