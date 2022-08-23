import React from "react";
import "../styles/App.css";
import Heading from "../components/Heading";
import Body from "../components/Body";
import PlaceImage from "../components/PlaceImage";

function TravelersParadox() {
  return (
    <div>
      <PlaceImage height={500} width={1000} />
      <Heading title="Travelers Paradox" />
      <Body />
    </div>
  );
}

export default TravelersParadox;
