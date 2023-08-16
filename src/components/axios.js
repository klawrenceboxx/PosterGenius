import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/postergenius-14856/us-central1/api", // The API (cloud function) URL
});

// firebase emulators:start

export default instance;
