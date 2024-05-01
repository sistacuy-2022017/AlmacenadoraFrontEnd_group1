import { createRoot } from 'react-dom/client'; // Importa createRoot desde "react-dom/client"
import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store.jsx"; // Asegúrate de importar tu store aquí

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
