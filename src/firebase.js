// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

// import firebase from "firebase/app";
// import {initializeApp} from "firebase/app";
// import {getFirestore} from "firebase/firestore";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAj6p5VFSExYSWIZUllJDfvPUa3CBJfDZ0",
//   authDomain: "postergenius-14856.firebaseapp.com",
//   projectId: "postergenius-14856",
//   storageBucket: "postergenius-14856.appspot.com",
//   messagingSenderId: "288158376102",
//   appId: "1:288158376102:web:ead403b2b25e7034f05467",
//   measurementId: "G-WS50WJJDNT",
// };

// // Initialize Firebase app
// const firebaseApp = initializeApp(firebaseConfig);

// // Get Firestore instance
// const db = getFirestore(firebaseApp);

// //const auth = firebase.auth();

// export {db, firebaseApp};
