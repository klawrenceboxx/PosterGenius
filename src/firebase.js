// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getAnalytics} from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAj6p5VFSExYSWIZUllJDfvPUa3CBJfDZ0",
  authDomain: "postergenius-14856.firebaseapp.com",
  projectId: "postergenius-14856",
  storageBucket: "postergenius-14856.appspot.com",
  messagingSenderId: "288158376102",
  appId: "1:288158376102:web:ead403b2b25e7034f05467",
  measurementId: "G-WS50WJJDNT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
