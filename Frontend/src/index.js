import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./components/inc/css/Fonts.css";
import "./components/inc/css/Style.css";
import { Provider } from "react-redux";
import store from "./store";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import { GoogleOAuthProvider } from "@react-oauth/google";


const MyCustomAlertTemplate = ({ style, options, message, close }) => (
  <div
    className={`custom-alert ${options.type}`}
    style={{
      ...style,
      position: "fixed",
      top: "65px",
      width: "320px",
      right: "15px",
      // backgroundColor: "#222",
      // color: "#fff",
      padding: "10px 20px",
      borderRadius: "8px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000,
    }}
  >
    <span className="alert-icon">
      {options.type === "success" ? "✔️" : "❌"}
    </span>
    <span className="alert-message ">{message}</span>
    <button className="alert-close-button " onClick={close}>
      &#x2715;
    </button>
  </div>
);

const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={MyCustomAlertTemplate} {...options}>
      <GoogleOAuthProvider
        clientId={`860151762645-mnn7qkvoufijtp9h7hh5jpcpsi5t4k35.apps.googleusercontent.com`}
      >
        <App />
      </GoogleOAuthProvider>
    </AlertProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
