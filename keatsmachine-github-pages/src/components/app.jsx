import React, {useState} from "react";
import '../styles/App.css';
import background from "../styles/diagmonds-light.png";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../pages/Home";
import TravelersParadox from "../pages/TravelersParadox";

const year = new Date().getFullYear();
const pages = ["Home", "Travelers Paradox"]; // TODO: Move to json file and add extra content etc

function App() {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function onPagePicked (pageIndex) {
    setCurrentPage(pages[pageIndex]);
  }

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Navigation
        pages={pages}
        heading={currentPage}
        onPagePicked={onPagePicked}
      />
      {currentPage === "Home" ? <Home /> : null}
      {currentPage === "Travelers Paradox" ? <TravelersParadox /> : null}
      <Footer />
      <p style={{
        margin: "0px",
        paddingBottom: "20px"
      }}>Copyright {year}</p>
    </div>
  );
}

export default App;