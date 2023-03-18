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
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import "../i18config.ts";
import { MantineProvider } from "@mantine/core";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={carApiSlice}>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                breakpoints: {
                  xxs: "20em",
                  xs: "30em",
                  sm: "48em",
                  md: "64em",
                  lg: "74em",
                  xl: "90em",
                },
              }}
            >
              <App />
            </MantineProvider>
          </I18nextProvider>
        </Provider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
