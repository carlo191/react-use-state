import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./src/assets/css/index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
