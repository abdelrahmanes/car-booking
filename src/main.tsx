import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import "react-circular-progressbar/dist/styles.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { carApiSlice } from "./services/car";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={carApiSlice}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
