import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename="/Shara-Sh/">
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </Router>
  </StrictMode>,
);
