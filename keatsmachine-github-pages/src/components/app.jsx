import React from "react";
import '../styles/App.css';
import logo from '../styles/logo.svg';
import Navigation from "./Navigation";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";

const year = new Date().getFullYear();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navigation />
        <Heading />
        <Body />
        <Footer />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p>
          Copyright {year}
        </p>
      </header>
    </div>
  );
}

export default App;