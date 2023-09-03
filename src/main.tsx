import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./main.css";
import { UiContextProvider } from "./UiContext.tsx";
import { Header } from "./Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiContextProvider>
      <Header />
      <App />
    </UiContextProvider>
  </React.StrictMode>
);
