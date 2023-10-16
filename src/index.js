import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/index.css";
import Navbar from "./Components/navbar.jsx";
import HeroComponent from "./Components/heroComponent.jsx";
import FooterComponent from "./Components/footer_Component.jsx";
import AllocationForm from "./Components/allocationForm.jsx";
import AlertDialogSlide from "./Components/dialog_box.jsx";
import App from "./App";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
