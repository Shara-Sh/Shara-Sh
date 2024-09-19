import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "../redux/store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Router basename="/Shara-Sh/">
        <Routes>
          <Route path="/" Component={App} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
);
