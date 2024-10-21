import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const isDevelopment = import.meta.env.DEV;

ReactDOM.createRoot(document.getElementById("root")!).render(
  !isDevelopment ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);
