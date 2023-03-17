import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import "react-circular-progressbar/dist/styles.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { carApiSlice } from "./services/car";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={carApiSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
