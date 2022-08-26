import React from "react";
import background from "../styles/diagmonds-light.png";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundColor: "whitesmoke",
      }}
    >
      <Navigation/>
      <ScrollToTop/>
      <Outlet />{/* All pages will be rendered here */}
      <Footer />
    </div>
  );
}

export default App;