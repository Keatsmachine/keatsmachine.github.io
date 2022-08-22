import React from "react";
import '../styles/App.css';
import logo from '../styles/logo.svg';
import Navigation from "./Navigation";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";
import Avatar from "@mui/material/Avatar";

const year = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <Navigation heading="Test" />
      <Heading />
      <Avatar alt="Remy Sharp" src={logo} style={{"margin":"auto"}}/>
      <Body />
      <Footer />
      <p>Copyright {year}</p>
    </div>
  );
}

export default App;