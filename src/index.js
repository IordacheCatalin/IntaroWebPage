import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { I18nextProvider } from "react-i18next";
import global_en from "../src/Translation/en/global.json";
import global_ro from "../src/Translation/ro/global.json";

import i18next from "i18next";

i18next.init({
  interpolation: { escapeValues: true },
  lng: "en",
  resources: {
    ro: {
      global: global_ro,
    },
    en: {
      global: global_en,
    },
  },
});

// // Check if the protocol is HTTP, and if so, redirect to HTTPS
// if (window.location.protocol === "http:") {
//   window.location.href = `https:${window.location.href.substring(
//     window.location.protocol.length
//   )}`;
// } else {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );

  reportWebVitals();
// }
