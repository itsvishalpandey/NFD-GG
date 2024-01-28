import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";

import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Features from "./Components/Features/Features.jsx";
import Aggregator from "./Components/Aggregator/Aggregator.jsx";
import Roadmap from "./Components/Roadmap/Roadmap.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="aggregator" element={<Aggregator />} />
      <Route path="features" element={<Features />} />
      <Route path="roadmap" element={<Roadmap />} />
      <Route path="contactus" element={<ContactUs />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
