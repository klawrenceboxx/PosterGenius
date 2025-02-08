import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducer";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      {/* wrap the App in the StateProvider so it has access to the data layer */}
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Add the following line to modify the Content Security Policy directive?
// to allow script to be loaded from 'http://localhost:3000/src/mixpanel.min.js'
// if (process.env.NODE_ENV === "development") {
//   const csp = `${document
//     .querySelector('meta[name="content-security-policy"]')
//     .getAttribute("content")}`;
//   document
//     .querySelector('meta[name="content-security-policy"]')
//     .setAttribute(
//       "content",
//       `${csp} http://localhost:3000/src/mixpanel.min.js`
//     );
// }

reportWebVitals();
