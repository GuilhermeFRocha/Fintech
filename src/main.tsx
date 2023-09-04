import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./main.css";
import { UserContextProvider } from "./UserContext.tsx";
import { Content } from "./Content.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
