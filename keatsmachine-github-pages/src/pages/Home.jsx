import React from "react";
import '../styles/App.css';
import portrait from "../styles/Portrait_Darren.jpeg";
import Heading from "../components/Heading";
import Body from "../components/Body";
import Avatar from "@mui/material/Avatar";

function Home () {
    return (
      <div>
        <Avatar
          alt="Unflattering self portrait of Darren"
          src={portrait}
          sx={{ width: 200, height: 200, margin: "auto", marginTop: "20px" }}
        />
        <Heading title="Home" />
        <Body />
      </div>
    );
}

export default Home;