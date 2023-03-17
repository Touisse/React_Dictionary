import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DictionaryContext } from "./context/Dictionary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DictionaryContext.Provider value="">
    <App />
  </DictionaryContext.Provider>
);
