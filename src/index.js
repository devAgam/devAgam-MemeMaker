import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "./store/configureStore.js";
import { Provider } from "react-redux";

const store = configureStore();

console.log(store.getState())

const rootEl = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    rootEl
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
