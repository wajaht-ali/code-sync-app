import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as AppRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter>
      <App />
    </AppRouter>
  </StrictMode>
);
