import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

import AboutMe from './pages/AboutMe';
import Home from "./pages/Home";
import TravelersParadox from "./pages/TravelersParadox";
import TravelersParadoxPrivacy from "./pages/TravelersParadoxPrivacy";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<AboutMe />} />
        <Route path="TravelersParadox" element={<TravelersParadox />} />
        <Route path="TP_Privacy" element={<TravelersParadoxPrivacy />} />
        <Route path="*" element={<p>There is nothing here</p>} />
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
