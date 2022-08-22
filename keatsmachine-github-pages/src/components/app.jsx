import React, {useState} from "react";
import '../styles/App.css';
import logo from '../styles/logo.svg';
import Navigation from "./Navigation";
import Heading from "./Heading";
import Body from "./Body";
import Footer from "./Footer";
import Avatar from "@mui/material/Avatar";

const year = new Date().getFullYear();
const pages = ["Home", "Travelers Paradox"]; // TODO: Move to json file and add extra content etc

function App() {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function onPagePicked (pageIndex) {
    setCurrentPage(pages[pageIndex]);
  }

  return (
    <div className="App">
      <Navigation
        pages={pages}
        heading={currentPage}
        onPagePicked={onPagePicked}
      />
      <Heading title={currentPage}/>
      <Avatar alt="Remy Sharp" src={logo} style={{ margin: "auto" }} />
      <Body />
      <Footer />
      <p>Copyright {year}</p>
    </div>
  );
}

export default App;