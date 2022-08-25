import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/app";

import Home from "./pages/Home";
import TravelersParadox from "./pages/TravelersParadox";
import TravelersParadoxPrivacy from "./pages/TravelersParadoxPrivacy";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="Travelers%20Paradox" element={<TravelersParadox />} />
        <Route
          path="Travelers%20Paradoxs%20Privacy%20Policy"
          element={<TravelersParadoxPrivacy />}
        />
        <Route path="*" element={<p>There is nothing here</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
